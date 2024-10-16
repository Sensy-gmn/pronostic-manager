import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    EuroIcon,
    Hourglass,
    TrendingUp,
    Trophy,
    WandSparkles,
} from "lucide-react";

export default function ResumeCardDashboard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                        Solde Total
                    </CardTitle>
                    <EuroIcon className="h-6 w-6 text-gray-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold mb-2">231,89 €</div>
                    <div className="flex items-center text-sm bg-gray-100 rounded-full px-3 py-1 w-fit">
                        <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                        <span className="text-gray-600">
                            +20.1% cette semaine
                        </span>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                        Paris gagnants
                    </CardTitle>
                    <Trophy className="h-6 w-6 text-gray-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold mb-2">4 / 23</div>
                    <div className="text-sm bg-gray-100 rounded-full px-3 py-1 w-fit">
                        <span className="text-gray-600">
                            Gain net : +15,50 €
                        </span>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                        Paris en cours
                    </CardTitle>
                    <Hourglass className="h-6 w-6 text-gray-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold mb-2">12 paris</div>
                    <div className="flex justify-between text-sm">
                        <span className="bg-gray-100 rounded-full px-3 py-1 text-gray-600">
                            Mise : 45 €
                        </span>
                        <span className="bg-gray-100 rounded-full px-3 py-1 text-gray-600">
                            ROI : 42%
                        </span>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                        Opportunités
                    </CardTitle>
                    <WandSparkles className="h-6 w-6 text-gray-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold mb-2">
                        19 pronostics{" "}
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="bg-gray-100 rounded-full px-3 py-1 text-gray-600">
                            aujourd&apos;hui
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
