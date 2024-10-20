import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

interface User {
    username: string;
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error(
            "MongoDB connection string is not defined in the environment variables"
        );
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("pronostics");
        const collection = database.collection<User>("users");

        const { username, email, password } = await request.json();

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "Cet utilisateur existe déjà" },
                { status: 400 }
            );
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const newUser: User = { username, email, password: hashedPassword };
        await collection.insertOne(newUser);

        return NextResponse.json(
            { message: "Utilisateur créé avec succès" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error registering user:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de l'inscription" },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}
