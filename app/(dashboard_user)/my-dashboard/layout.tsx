"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Bell,
    Briefcase,
    Building,
    Home,
    MessageSquare,
    PanelLeft,
    Settings,
    User,
    Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import "../../globals.css";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const activeLink =
        "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8";

    const inactiveLink =
        "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8";

    const pathname = usePathname();

    const getLinkClassName = (path: string) => {
        return path === pathname ? activeLink : inactiveLink;
    };

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

    useEffect(() => {
        // Remove the attribute causing the hydration warning
        document.body.removeAttribute("cz-shortcut-listen");
    }, []);

    return (
        <html lang="fr">
            <body suppressHydrationWarning={true}>
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                            <TooltipProvider>
                                <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                                    <nav className="flex flex-col items-center gap-4 px-2 py-4">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href="/my-dashboard"
                                                    className={getLinkClassName(
                                                        "/my-dashboard"
                                                    )}
                                                >
                                                    <Home className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        My Dashboard
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                My Dashboard
                                            </TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href="/my-dashboard/empty"
                                                    className={getLinkClassName(
                                                        "/my-dashboard/empty"
                                                    )}
                                                >
                                                    <Building className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        empty
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                empty
                                            </TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href="/my-dashboard/empty"
                                                    className={getLinkClassName(
                                                        "/my-dashboard/empty"
                                                    )}
                                                >
                                                    <Users2 className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        empty
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                empty
                                            </TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href="/my-dashboard/empty"
                                                    className={getLinkClassName(
                                                        "/my-dashboard/empty"
                                                    )}
                                                >
                                                    <Briefcase className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        empty
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                empty
                                            </TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href="/my-dashboard/empty"
                                                    className={getLinkClassName(
                                                        "/my-dashboard/empty"
                                                    )}
                                                >
                                                    <MessageSquare className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        empty
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                empty
                                            </TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href="/my-dashboard/empty"
                                                    className={getLinkClassName(
                                                        "/my-dashboard/empty"
                                                    )}
                                                >
                                                    <Bell className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        empty
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                empty
                                            </TooltipContent>
                                        </Tooltip>
                                    </nav>
                                    <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href="#"
                                                    className={getLinkClassName(
                                                        "/my-dashboard/empty"
                                                    )}
                                                >
                                                    <Settings className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        empty
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                empty
                                            </TooltipContent>
                                        </Tooltip>
                                    </nav>
                                </aside>
                            </TooltipProvider>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="sm:hidden"
                                    >
                                        <PanelLeft className="h-5 w-5" />
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="left"
                                    className="sm:max-w-xs"
                                >
                                    <nav className="grid gap-6 text-lg font-medium">
                                        <Link
                                            href="/my-dashboard"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Home className="h-5 w-5" />
                                            My Dashboard
                                        </Link>
                                        <Link
                                            href="/my-dashboard"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Building className="h-5 w-5" />
                                            empty
                                        </Link>
                                        <Link
                                            href="/my-dashboard"
                                            className="flex items-center gap-4 px-2.5 text-foreground"
                                        >
                                            <Users2 className="h-5 w-5" />
                                            empty
                                        </Link>
                                        <Link
                                            href="/my-dashboard"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Briefcase className="h-5 w-5" />
                                            empty
                                        </Link>
                                        <Link
                                            href="/my-dashboard"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <MessageSquare className="h-5 w-5" />
                                            empty
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>

                            <Breadcrumb className="hidden md:flex">
                                <BreadcrumbList>
                                    {breadcrumbs.map((breadcrumb, index) => (
                                        <BreadcrumbItem key={index}>
                                            {index < breadcrumbs.length - 1 ? (
                                                <>
                                                    <BreadcrumbLink asChild>
                                                        <Link
                                                            href={
                                                                breadcrumb.href
                                                            }
                                                        >
                                                            {breadcrumb.label}
                                                        </Link>
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

                            <div className="relative ml-auto flex-1 grow-0 ">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="overflow-hidden rounded-full"
                                        >
                                            <User className="h-10 w-10 overflow-hidden rounded-full" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>
                                            Dashboard
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Link href="/">Client view</Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </header>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
