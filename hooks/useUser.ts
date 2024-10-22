import { useEffect, useState } from "react";

interface User {
    _id: string;
    email: string;
    username: string;

    // Ajouter champs à récupérer (data by user...)
}

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    setUser(null);
                    return;
                }

                const response = await fetch("/api/user/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données utilisateur:",
                    error
                );
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, []);

    return { user, loading };
}
