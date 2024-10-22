"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

// Ajout d'un nouveau composant pour le skeleton
import LoginSkeleton from "./Skeleton";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Tentative de connexion...");
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("Réponse du serveur:", data);

            if (response.ok) {
                if (data.token) {
                    localStorage.setItem("token", data.token); // Stockage token
                } else {
                    console.error("Token manquant dans la réponse");
                }
                router.push("/my-dashboard");
            } else {
                console.error("Erreur de connexion:", data.error);
                alert(
                    data.error ||
                        "Une erreur est survenue lors de la connexion."
                );
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Une erreur est survenue:", error);
            alert("Une erreur inattendue est survenue. Veuillez réessayer.");
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <LoginSkeleton />;
    }

    return (
        <Card className="w-full shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Connexion
                </CardTitle>
                <CardDescription className="text-center">
                    Entrez vos identifiants pour accéder à votre dashboard.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            placeholder="********"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        type="submit"
                    >
                        Se connecter
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
