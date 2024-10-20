import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { TextEncoder } from "util";

interface User {
    _id: string;
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

        const { email, password } = await request.json();

        // Check if email and password are provided
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Find the user
        const user = await collection.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 400 }
            );
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 400 }
            );
        }

        // Création du JWT token avec jose
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = await new SignJWT({ userId: user._id.toString() })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h")
            .sign(secret);

        // Set cookie with token
        const response = NextResponse.json(
            { message: "Login successful", redirectUrl: "/my-dashboard" },
            { status: 200 }
        );
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 3600,
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json(
            { error: "An error occurred during login" },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}
