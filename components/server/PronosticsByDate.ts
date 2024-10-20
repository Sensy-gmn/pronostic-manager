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

export async function getPronosticsByDate(
    jour: string,
    sortBy: "cote" | "heure" = "heure",
    sortOrder: "asc" | "desc" = "asc"
): Promise<Match[]> {
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
                { jour: jour },
                { "jour.value": jour },
                { jour: { $regex: new RegExp(jour, "i") } },
            ],
        };

        const sortOptions: { [key: string]: 1 | -1 } = {
            [sortBy]: sortOrder === "asc" ? 1 : -1,
        };

        const matches = await collection
            .find(query)
            .sort(sortOptions)
            .toArray();
        return matches;
    } catch (error) {
        console.error("Error fetching matches:", error);
        throw error;
    } finally {
        await client.close();
    }
}
