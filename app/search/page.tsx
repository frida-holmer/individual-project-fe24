"use client"
import SearchResult from "@/components/search-result";
import { useSearchParams } from "next/navigation";
import styles from "./search.module.css";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    return (
        <main className={styles.main}>
            <SearchResult query={query} />
        </main>
    );
}
