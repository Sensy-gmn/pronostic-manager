import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    console.log("Middleware called for path:", request.nextUrl.pathname);
    console.log("Token present:", !!token);

    // Protection des routes API
    if (request.nextUrl.pathname.startsWith("/api/protected")) {
        console.log("Protecting API route");
        if (!token) {
            console.log("No token found for API route, returning 401");
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            await jwtVerify(token, secret);
            console.log("Token verified for API route");
            return NextResponse.next();
        } catch (error) {
            console.error("Invalid token for API route:", error);
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 401 }
            );
        }
    }

    // Protection de la route /my-dashboard
    if (request.nextUrl.pathname.startsWith("/my-dashboard")) {
        console.log("Protecting /my-dashboard route");
        if (!token) {
            console.log("No token found, redirecting to login");
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            await jwtVerify(token, secret);
            console.log("Token verified for /my-dashboard");
            return NextResponse.next();
        } catch (error) {
            console.error("Invalid token for /my-dashboard:", error);
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    console.log("Middleware allowing request to proceed");
    return NextResponse.next();
}

export const config = {
    matcher: ["/api/protected/:path*", "/my-dashboard/:path*"],
};
