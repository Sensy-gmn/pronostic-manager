import Link from "next/link";

export default function PresentationPage() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
