"use client"
import SearchResult from "@/components/search-result";
import FilterGenre from "@/components/filter-genre";
import { useSearchParams } from "next/navigation";
import styles from "./search.module.css";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const genre = searchParams.get("genre");

    return (
        <main className={styles.main}>
            <FilterGenre />
            <SearchResult query={query} genre={genre} />
        </main>
    );
}
