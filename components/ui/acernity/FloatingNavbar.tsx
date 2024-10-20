"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "flex fixed top-4 inset-x-0 max-w-fit mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center justify-center space-x-4",
                className
            )}
        >
            {navItems.map((navItem, index) => (
                <Link
                    key={`link-${index}`}
                    href={navItem.link}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={cn(
                        "relative px-3 py-2 rounded-full text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors flex items-center"
                    )}
                >
                    {navItem.icon && (
                        <span className="mr-2">{navItem.icon}</span>
                    )}
                    <span className="relative z-10">{navItem.name}</span>
                    {activeIndex === index && (
                        <motion.div
                            layoutId="pill-tab"
                            transition={{ type: "spring", duration: 0.5 }}
                            className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full"
                        ></motion.div>
                    )}
                </Link>
            ))}
        </motion.div>
    );
};
