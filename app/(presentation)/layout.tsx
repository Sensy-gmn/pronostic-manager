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
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Pronostic Manager",
    description: "Pronostic Manager",
};

export default function PresentationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${GeistMono.variable} ${geistVf.variable}`}>
                {children}
            </body>
        </html>
    );
}
