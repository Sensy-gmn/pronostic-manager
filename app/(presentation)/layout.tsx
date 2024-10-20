import { Footer } from "@/components/client/Footer";
import { Header } from "@/components/client/Header";
import { ThemeProvider } from "@/components/client/ThemeProvider";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";

const GeistMono = localFont({
    src: "./../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const geistVf = localFont({
    src: "./../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

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
        <html lang="fr" suppressHydrationWarning>
            <body
                className={`${GeistMono.variable} ${geistVf.variable} font-sans text-white min-h-screen flex flex-col`}
            >
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
            </body>
        </html>
    );
}
