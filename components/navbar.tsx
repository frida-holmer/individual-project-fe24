import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">LOGO</Link>
            <Link href="/list">My list</Link>
        </nav>
    );
}
