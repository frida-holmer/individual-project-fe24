"use client"
import SearchResult from "@/components/search-result";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    return (
        <main>
            <SearchResult query={query} />
        </main>
    );
}
