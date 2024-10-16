"use server";

import { MongoClient } from "mongodb";

interface Match {
    _id: string;
    cote: number;
    heure: string;
    jour: string;
    opposant_1: string;
    opposant_2: string;
    pronostic: string;
    scraping_date: string;
    sport: string;
}

export async function getPronosticsBySport(sport: string): Promise<Match[]> {
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
        const collection = database.collection<Match>("matches");

        const query = {
            $or: [
                { sport: sport },
                { "sport.value": sport },
                { sport: { $regex: new RegExp(sport, "i") } },
            ],
        };

        const matches = await collection.find(query).toArray();
        return matches;
    } catch (error) {
        console.error("Error fetching matches:", error);
        throw error;
    } finally {
        await client.close();
    }
}
