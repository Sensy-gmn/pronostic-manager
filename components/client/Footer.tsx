import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link
                    href="/privacy"
                    className="text-sm hover:underline underline-offset-4"
                >
                    Politique de confidentialité
                </Link>
                <Link
                    href="/terms"
                    className="text-sm hover:underline underline-offset-4"
                >
                    Conditions d&apos;utilisation
                </Link>
            </div>
            <div className="mt-4 sm:mt-0">
                <p className="text-sm text-gray-300">
                    © 2024 Pronostic Manager. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
