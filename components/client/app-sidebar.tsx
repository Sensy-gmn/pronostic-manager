import { useUser } from "@/hooks/useUser";
import { Calendar, ChevronDown, Home, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const items = [
    {
        title: "Platform",
        icon: Home,
        subItems: [
            { title: "Playground", url: "/playground" },
            { title: "History", url: "/history" },
            { title: "Starred", url: "/starred" },
            { title: "Settings", url: "/settings" },
        ],
    },
    {
        title: "Models",
        icon: Plus,
        url: "/models",
    },
    {
        title: "Documentation",
        icon: Calendar,
        url: "/documentation",
    },
    {
        title: "Settings",
        icon: Settings,
        url: "/settings",
    },
];

export function AppSidebar() {
    const { user, loading } = useUser();
    const router = useRouter();
    const [expandedItem, setExpandedItem] = useState("Platform");

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <Sidebar className="bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)]">
            <SidebarContent>
                {items.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel
                            className="flex items-center justify-between px-4 py-2 hover:bg-[var(--sidebar-accent)] cursor-pointer"
                            onClick={() =>
                                setExpandedItem(
                                    expandedItem === item.title
                                        ? ""
                                        : item.title
                                )
                            }
                        >
                            <div className="flex items-center gap-2">
                                <item.icon className="h-4 w-4" />
                                <span>{item.title}</span>
                            </div>
                            {item.subItems && (
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${
                                        expandedItem === item.title
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            )}
                        </SidebarGroupLabel>
                        {item.subItems && expandedItem === item.title && (
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.subItems.map((subItem) => (
                                        <SidebarMenuItem key={subItem.title}>
                                            <SidebarMenuButton asChild>
                                                <Link
                                                    href={subItem.url}
                                                    className="block pl-8 pr-4 py-2 hover:bg-[var(--sidebar-accent)] relative"
                                                >
                                                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--sidebar-border)]"></div>
                                                    {subItem.title}
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        )}
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    );
}
