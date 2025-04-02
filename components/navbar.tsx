import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">LOGO</Link>
            <Link href="/list">My list</Link>
        </nav>
    );
}
