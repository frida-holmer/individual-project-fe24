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
            e.preventDefault();
            const trimmedQuery = searchQuery.trim().replace(/\s+/g, " ");
            router.push(`/search?query=${encodeURIComponent(trimmedQuery)}`);
            setSearchQuery("");
        } else if (e.key === "Escape") {
            e.preventDefault();
            setSearchQuery("");
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <nav className={styles.nav}>
            <Link href="/">LOGO</Link>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search game..."
                    value={searchQuery}
                    onKeyDown={handleSearch}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery.length > 0 && (
                    <button type="button" onClick={clearSearch}>
                        x
                    </button>
                )}
            </div>
            <Link href="/list">My list</Link>
        </nav>
    );
}
