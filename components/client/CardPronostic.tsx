import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Trophy } from "lucide-react";

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

interface CardPronosticProps {
    match: Match;
}

export default function CardPronostic({ match }: CardPronosticProps) {
    // calculer la probabilité à partir de la cote
    const calculateProbability = (odds: number): number => {
        return Math.round((1 / odds) * 100);
    };

    // Calcul des probabilités
    const prob1 = calculateProbability(match.cote);
    const prob2 = 100 - prob1;

    // formater la probabilité
    const formatProbability = (prob: number) => `${prob}%`;

    return (
        <Card className="w-full overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-2 flex justify-between items-center">
                <Badge
                    variant="outline"
                    className="font-medium text-xs uppercase tracking-wide"
                >
                    {match.sport}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground bg-gray-100 rounded-full px-2 py-1">
                    <Clock className="mr-1 h-3 w-3" />
                    {match.heure}
                </div>
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex items-center justify-between space-x-2 mb-4">
                    <div className="flex-1 text-left">
                        <p className="text-sm font-semibold leading-tight truncate">
                            {match.opposant_1}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Prob: {formatProbability(prob1)}
                        </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 text-right">
                        <p className="text-sm font-semibold leading-tight truncate">
                            {match.opposant_2}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Prob: {formatProbability(prob2)}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-yellow-50 rounded-lg p-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <p className="text-sm font-medium text-yellow-700">
                        {match.pronostic}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="pt-2 bg-gray-50">
                <div className="flex w-full items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                        {match.jour}
                    </p>
                    <Badge
                        variant="secondary"
                        className={cn(
                            "font-bold text-xs",
                            match.cote > 2
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                        )}
                    >
                        Cote {match.cote.toFixed(2)}
                    </Badge>
                </div>
            </CardFooter>
        </Card>
    );
}
