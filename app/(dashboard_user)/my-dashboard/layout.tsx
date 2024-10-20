"use client";

import { AppSidebar } from "@/components/client/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    SidebarContent,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChevronDown, GalleryVerticalEnd, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import "../../globals.css";

// Exemple de données de navigation
const navMain = [
    {
        title: "Dashboard",
        items: [
            { title: "Overview", url: "/my-dashboard", isActive: false },
            {
                title: "Analytics",
                url: "/my-dashboard/analytics",
                isActive: false,
            },
        ],
    },
    {
        title: "Management",
        items: [
            { title: "Users", url: "/my-dashboard/users", isActive: false },
            {
                title: "Projects",
                url: "/my-dashboard/projects",
                isActive: false,
            },
        ],
    },
];

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    const breadcrumbs = useMemo(() => {
        const pathParts = pathname.split("/").filter(Boolean);
        return pathParts.map((part, index) => {
            const href = `/${pathParts.slice(0, index + 1).join("/")}`;
            return {
                href,
                label: part.charAt(0).toUpperCase() + part.slice(1),
            };
        });
    }, [pathname]);

    return (
        <html>
            <body>
                <SidebarProvider>
                    <AppSidebar>
                        <SidebarHeader className="border-b px-6 py-3">
                            <div className="flex items-center gap-2">
                                <GalleryVerticalEnd className="h-6 w-6" />
                                <div className="font-semibold">Dashboard</div>
                            </div>
                        </SidebarHeader>
                        <SidebarContent>
                            <div className="space-y-4 py-4">
                                <div className="px-3 py-2">
                                    <form>
                                        <div className="relative">
                                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                type="search"
                                                placeholder="Search..."
                                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="px-3 py-2">
                                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                        Navigation
                                    </h2>
                                    <SidebarMenu>
                                        {navMain.map((section) => (
                                            <SidebarMenuItem
                                                key={section.title}
                                            >
                                                <SidebarMenuButton asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="w-full justify-between font-normal"
                                                    >
                                                        {section.title}
                                                        <ChevronDown className="h-4 w-4" />
                                                    </Button>
                                                </SidebarMenuButton>
                                                <SidebarMenuSub>
                                                    {section.items.map(
                                                        (item) => (
                                                            <SidebarMenuSubItem
                                                                key={item.title}
                                                            >
                                                                <SidebarMenuSubButton
                                                                    asChild
                                                                    isActive={
                                                                        pathname ===
                                                                        item.url
                                                                    }
                                                                >
                                                                    <a
                                                                        href={
                                                                            item.url
                                                                        }
                                                                        className="block w-full rounded-md px-2 py-1 hover:bg-muted"
                                                                    >
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </a>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        )
                                                    )}
                                                </SidebarMenuSub>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </div>
                            </div>
                        </SidebarContent>
                    </AppSidebar>
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {breadcrumbs.map((breadcrumb, index) => (
                                        <BreadcrumbItem key={breadcrumb.href}>
                                            {index < breadcrumbs.length - 1 ? (
                                                <>
                                                    <BreadcrumbLink
                                                        href={breadcrumb.href}
                                                    >
                                                        {breadcrumb.label}
                                                    </BreadcrumbLink>
                                                    <BreadcrumbSeparator />
                                                </>
                                            ) : (
                                                <BreadcrumbPage>
                                                    {breadcrumb.label}
                                                </BreadcrumbPage>
                                            )}
                                        </BreadcrumbItem>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </header>
                        <main className="flex-1 p-4">{children}</main>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
