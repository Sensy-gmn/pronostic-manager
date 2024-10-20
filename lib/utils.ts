import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatEuro(amount: number): string {
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
    }).format(amount);
}

export function flattenColorPalette(css: Record<string, string>) {
    return Object.entries(css).map(([key, value]) => {
        return `${key}: ${value}`;
    });
}
