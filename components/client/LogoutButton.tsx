"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        const response = await fetch("/api/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            router.push("/login");
        } else {
            console.error("Logout failed");
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
}
