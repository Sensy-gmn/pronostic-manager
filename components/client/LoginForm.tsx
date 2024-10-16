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

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            router.push("/my-dashboard");
        } else {
            const data = await response.json();
            alert(data.error);
        }
    };

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
