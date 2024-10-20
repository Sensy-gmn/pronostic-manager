"use client";

import ChartResumeMonth from "@/components/client/ChartResumeMonth";
import ChartResumeWeek from "@/components/client/ChartResumeWeek";
import ListPronosticAvailable from "@/components/client/ListPronosticAvailable";
import ResumeCardDashboard from "@/components/client/ResumeCardDashboard";

export default function MyDashboardPage() {
    return (
        <>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 mx-auto max-w-8xl">
                <main className="grid flex-1 items-start gap-4 p-3 sm:px-6 sm:py-0 md:gap-8 ">
                    <ResumeCardDashboard />

                    <h2 className="text-2xl font-bold">Mon Portefeuille</h2>

                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                        <ChartResumeWeek />
                        <ChartResumeMonth />
                    </div>

                    <h2 className="text-2xl font-bold">
                        Tous les pronostics disponibles
                    </h2>
                    <ListPronosticAvailable />
                </main>
            </div>
        </>
    );
}
