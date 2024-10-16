import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { formatEuro } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export default function ChartResumeWeek() {
    const chartData = [
        { Day: "Lundi", Result: 186 },
        { Day: "Mardi", Result: -305 },
        { Day: "Mercredi", Result: 237 },
        { Day: "Jeudi", Result: 73 },
        { Day: "Vendredi", Result: 209 },
        { Day: "Samedi", Result: 214 },
        { Day: "Dimanche", Result: -214 },
    ];

    const totalResult = chartData.reduce((sum, item) => sum + item.Result, 0);
    const isPositive = totalResult >= 0;
    const mainColor = isPositive ? "hsl(140, 86%, 26%)" : "hsl(0, 84%, 60%)";

    return (
        <Card className="col-span-2 overflow-hidden">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-2xl font-bold mb-1">
                            Résumé de la Semaine
                        </CardTitle>
                        <CardDescription>
                            Performance des pronostics - Du 07 au 14 octobre
                            2024
                        </CardDescription>
                    </div>
                    <div className={`flex flex-col items-end`}>
                        <span
                            className="text-3xl font-bold"
                            style={{ color: mainColor }}
                        >
                            {formatEuro(totalResult)}
                        </span>
                        <div className="flex items-center mt-1">
                            {isPositive ? (
                                <TrendingUp className="w-4 h-4 mr-1" />
                            ) : (
                                <TrendingDown className="w-4 h-4 mr-1" />
                            )}
                            <span
                                className="text-sm font-medium"
                                style={{ color: mainColor }}
                            >
                                {isPositive ? "+" : "-"}5.2% cette semaine
                            </span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient
                                    id="colorResult"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor={mainColor}
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor={mainColor}
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="Day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "hsl(var(--muted-foreground))" }}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(value) => `${value}€`}
                                tick={{ fill: "hsl(var(--muted-foreground))" }}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: "hsl(var(--card))",
                                    border: "none",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    color: "hsl(var(--foreground))",
                                }}
                                labelStyle={{
                                    fontWeight: "bold",
                                    marginBottom: "4px",
                                }}
                                formatter={(value) => [
                                    formatEuro(value),
                                    "Résultat",
                                ]}
                            />
                            <Area
                                type="monotone"
                                dataKey="Result"
                                stroke={mainColor}
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorResult)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
