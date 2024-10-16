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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                email,
                password,
                age: parseInt(age),
                gender,
            }),
        });

        if (response.ok) {
            router.push("/login");
        } else {
            const data = await response.json();
            alert(data.error);
        }
    };

    return (
        <Card className="mx-auto max-w-xl shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Inscription
                </CardTitle>
                <CardDescription className="text-center">
                    Créez votre compte pour accéder à votre dashboard.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Nom d&apos;utilisateur</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="JohnDoe"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full"
                        />
                    </div>
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
                    <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                            id="age"
                            type="number"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gender">Genre</Label>
                        <Select onValueChange={setGender} required>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sélectionnez votre genre" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Homme</SelectItem>
                                <SelectItem value="female">Femme</SelectItem>
                                <SelectItem value="other">
                                    Non spécifié
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        type="submit"
                    >
                        S&apos;inscrire
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
