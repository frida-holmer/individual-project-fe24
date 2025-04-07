"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            router.push(`?search=${searchQuery}`);
        }
    }

    return (
        <nav className={styles.nav}>
            <Link href="/">LOGO</Link>
            <input
                type="text"
                placeholder="Search game..."
                value={searchQuery}
                onKeyDown={handleSearch}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link href="/list">My list</Link>
        </nav>
    );
}
