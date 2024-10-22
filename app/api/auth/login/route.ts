import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { TextEncoder } from "util";

interface User {
    _id: ObjectId;
    email: string;
    password: string;
    name: string;
    role: string;
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

        // Vérification email et password
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Recherche user
        const user = await collection.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 400 }
            );
        }

        // Vérification password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const token = await new SignJWT({ userId: user._id.toString() })
                .setProtectedHeader({ alg: "HS256" })
                .setExpirationTime("1h")
                .sign(new TextEncoder().encode(process.env.JWT_SECRET));

            const response = NextResponse.json(
                {
                    message: "Login successful",
                    token,
                    redirectUrl: "/my-dashboard",
                },
                { status: 200 }
            );

            // Définition token comme cookie HttpOnly
            response.cookies.set("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 3600,
                path: "/",
            });

            return response;
        }

        return NextResponse.json(
            { error: "Invalid password" },
            { status: 400 }
        );
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
