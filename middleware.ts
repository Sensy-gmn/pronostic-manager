import { verify } from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    // Protection des routes API
    if (request.nextUrl.pathname.startsWith("/api/protected")) {
        if (!token) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        try {
            verify(token, process.env.JWT_SECRET as string);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 401 }
            );
        }
    }

    // Protection de la route /my-dashboard
    if (request.nextUrl.pathname.startsWith("/my-dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            verify(token, process.env.JWT_SECRET as string);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/protected/:path*", "/my-dashboard/:path*"],
};
