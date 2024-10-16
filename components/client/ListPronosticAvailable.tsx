import { getPronosticsByDate } from "@/components/server/PronosticsByDate";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "../ui/pagination";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import CardPronostic from "./CardPronostic";

// ----- INTERFACES

interface Match {
    _id: string;
    cote: number;
    heure: string;
    jour: string;
    opposant_1: string;
    opposant_2: string;
    pronostic: string;
    sport: string;
}

export default function ListPronosticAvailable() {
    const [matches, setMatches] = useState<Match[]>([]);
    const [sortBy, setSortBy] = useState<"cote" | "heure">("heure");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const matchesPerPage = 12;

    const jour = new Date().toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    useEffect(() => {
        const fetchMatches = async () => {
            const fetchedMatches = await getPronosticsByDate(
                jour,
                sortBy,
                sortOrder
            );
            setMatches(fetchedMatches);
        };
        fetchMatches();
    }, [jour, sortBy, sortOrder]);

    useEffect(() => {
        const sorted = [...matches].sort((a, b) => {
            if (sortBy === "cote") {
                return sortOrder === "asc" ? a.cote - b.cote : b.cote - a.cote;
            } else {
                return sortOrder === "asc"
                    ? a.heure.localeCompare(b.heure)
                    : b.heure.localeCompare(a.heure);
            }
        });
        setSortedMatches(sorted);
    }, [matches, sortBy, sortOrder]);

    const [sortedMatches, setSortedMatches] = useState<Match[]>([]);

    const indexOfLastMatch = currentPage * matchesPerPage;
    const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
    const currentMatches = sortedMatches.slice(
        (currentPage - 1) * matchesPerPage,
        currentPage * matchesPerPage
    );

    const totalPages = Math.ceil(sortedMatches.length / matchesPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const [sortOption, setSortOption] = useState("default");

    const handleSortChange = (value: string) => {
        setSortOption(value);
        switch (value) {
            case "default":
            case "heure_asc":
                setSortBy("heure");
                setSortOrder("asc");
                break;
            case "cote_asc":
                setSortBy("cote");
                setSortOrder("asc");
                break;
            case "cote_desc":
                setSortBy("cote");
                setSortOrder("desc");
                break;
            case "heure_desc":
                setSortBy("heure");
                setSortOrder("desc");
                break;
        }
    };

    return (
        <Card className="overflow-hidden xl:col-span-1 flex flex-col h-full">
            <CardHeader className="flex-shrink-0 flex flex-row items-start bg-muted/50 py-4">
                <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                        Aujourd&apos;hui
                    </CardTitle>
                    <CardDescription>Jour: {jour}</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                    <Button size="sm" variant="outline" className="h-8 gap-1">
                        <ArrowUp className="h-3.5 w-3.5" />
                        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                            Voir ma sélection
                        </span>
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="text-sm px-0 flex-grow overflow-hidden flex flex-col">
                <Card className="border-none shadow-none py-0 flex-grow flex flex-col">
                    <CardHeader className="flex-shrink-0">
                        <CardTitle>
                            <Select
                                value={sortOption}
                                onValueChange={handleSortChange}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Trier par" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="default">
                                            Trier par défaut
                                        </SelectItem>
                                        <SelectItem value="cote_asc">
                                            Cote croissante
                                        </SelectItem>
                                        <SelectItem value="cote_desc">
                                            Cote décroissante
                                        </SelectItem>

                                        <SelectItem value="heure_asc">
                                            plus tôt au plus tard
                                        </SelectItem>
                                        <SelectItem value="heure_desc">
                                            plus tard au plus tôt
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow overflow-hidden">
                        <div className="h-full overflow-y-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {currentMatches.map((match) => (
                                <CardPronostic key={match._id} match={match} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </CardContent>

            <CardFooter className="flex-shrink-0 flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                    mis à jour le <time dateTime={jour}>{jour}</time> -{" "}
                    {sortedMatches.length} pronostics disponibles - Page{" "}
                    {currentPage} sur {totalPages}
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6"
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft className="h-3.5 w-3.5" />
                                <span className="sr-only">Page précédente</span>
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6"
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight className="h-3.5 w-3.5" />
                                <span className="sr-only">Page suivante</span>
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    );
}
