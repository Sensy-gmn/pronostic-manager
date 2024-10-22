import { Footer } from "@/components/client/Footer";
import { Header } from "@/components/client/Header";
import { ThemeProvider } from "@/components/client/ThemeProvider";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pronostic Manager - Prédictions Sportives Intelligentes",
    description: "Optimisez vos pronostics sportifs avec notre IA de pointe",
};

export default function PresentationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="absolute inset-0  opacity-[0.03] pointer-events-none"></div>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <Header />
                <main className="flex-grow relative z-10">{children}</main>
                <Footer />
            </ThemeProvider>
        </>
    );
}
