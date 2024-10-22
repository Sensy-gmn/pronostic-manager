import { jwtVerify } from "jose";
import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const token = req.headers.get("Authorization")?.split(" ")[1];

    if (!token) {
        return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);

        // Connexion à MongoDB pour récupérer infos complètes de user
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MongoDB connection string is not defined");
        }

        const client = new MongoClient(uri);
        await client.connect();

        const database = client.db("pronostics");
        const collection = database.collection("users");

        const user = await collection.findOne({
            _id: new ObjectId(payload.userId as string),
        });

        if (!user) {
            return NextResponse.json(
                { error: "Utilisateur non trouvé" },
                { status: 404 }
            );
        }

        // Retourne infos user sans le mot de passe
        const { password, ...userWithoutPassword } = user;

        return NextResponse.json(userWithoutPassword);
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des données utilisateur:",
            error
        );
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
