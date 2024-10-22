import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pronostic Manager",
    description: "Prédictions Sportives Intelligentes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <ThemeProvider>
                <body className={inter.className}>{children}</body>
            </ThemeProvider>
        </html>
    );
}
