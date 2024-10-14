import Link from "next/link";
import "./../../globals.css";

export default function DashboardUserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body>
                <header>
                    <nav className="flex gap-4">
                        <Link href="/my-dashboard" className="text-blue-500">
                            Dashboard
                        </Link>
                        <Link href="/my-dashboard" className="text-blue-500">
                            Pronostics
                        </Link>
                        <Link href="/my-dashboard" className="text-blue-500">
                            Statistiques
                        </Link>
                        <Link href="/my-dashboard" className="text-blue-500">
                            Résultats
                        </Link>
                    </nav>
                </header>

                <main className="bg-blue-200">{children}</main>
            </body>
        </html>
    );
}
