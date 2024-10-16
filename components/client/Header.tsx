"use client";
import Link from "next/link";
import { FloatingNav } from "../ui/acernity/FloatingNavbar";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Fonctionnalités", link: "#features" },
    { name: "Tarifs", link: "#pricing" },
    { name: "À propos", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export function Header() {
    return (
        <header className="w-full flex justify-between items-center px-4 py-2">
            <Link href="/" className="text-2xl font-bold">
                Pronostic Manager
            </Link>
            <div className="flex items-center space-x-4">
                <FloatingNav navItems={navItems} />
                <ThemeToggle />
                <Button variant="ghost" asChild>
                    <Link href="/login">Connexion</Link>
                </Button>
                <Button variant="secondary" asChild>
                    <Link href="/contact">Contacter l&apos;équipe</Link>
                </Button>
            </div>
        </header>
    );
}
