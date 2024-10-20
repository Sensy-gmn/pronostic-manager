"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Fonctionnalités", link: "#features" },
    { name: "Tarifs", link: "#pricing" },
    { name: "À propos", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? " backdrop-blur-sm py-2" : "py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className={`text-white font-bold transition-all duration-300 ${
                            isScrolled ? "opacity-0 pointer-events-none" : ""
                        }`}
                    >
                        Pronostic Manager
                    </Link>

                    <motion.nav
                        className={cn(
                            "flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1 transition-all duration-300",
                            isScrolled
                                ? "scale-90 flex-grow justify-center"
                                : ""
                        )}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isScrolled && (
                            <Link
                                href="/"
                                className="text-white font-bold mr-4"
                            >
                                PM
                            </Link>
                        )}
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                className="relative px-3 py-2 rounded-full text-sm font-medium text-white hover:text-gray-200 transition-colors"
                            >
                                <span className="relative z-10">
                                    {item.name}
                                </span>
                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="pill-tab"
                                        transition={{
                                            type: "spring",
                                            duration: 0.5,
                                        }}
                                        className="absolute inset-0 bg-white/20 rounded-full"
                                    ></motion.div>
                                )}
                            </Link>
                        ))}
                        {isScrolled && (
                            <>
                                <Link
                                    href="/login"
                                    className="text-white bg-gradient-to-r from-purple-500 to-indigo-600 px-3 py-1 rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-white bg-gradient-to-r from-blue-500 to-teal-400 px-3 py-1 rounded-full hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Contacter l&apos;équipe
                                </Link>
                            </>
                        )}
                    </motion.nav>

                    <div
                        className={`flex items-center space-x-4 transition-all duration-300 ${
                            isScrolled ? "opacity-0 pointer-events-none" : ""
                        }`}
                    >
                        <Link href="/login" className="text-white">
                            Connexion
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Contacter l&apos;équipe
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
