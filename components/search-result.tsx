import { Game } from "@/interfaces/game";
import { useEffect, useState } from "react";
import GameCardContainer from "./game-card-container";
import styles from "./searchresult.module.css";

interface SearchResultProps {
    query: string | null;
    genre: string | null;
}

export default function SearchResult({ query, genre }: SearchResultProps) {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                if (!query && !genre) {
                    setGames([]);
                    return;
                }

                let url = `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}`;

                if (query) {
                    url += `&search=${query}`;
                }

                if (genre) {
                    url += `&genres=${genre}`;
                }

                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setGames(data.results || []);
            } catch (err) {
                console.error("Error fetching games: ", err)
                return [];
            } finally {
                setLoading(false);
            }
        };
        fetchSearch();

    }, [query, genre]);

    if (loading) return <p>Searching games...</p>

    return (
        <section className={styles.searchContainer}>
            <h1>Search result for "{query}"</h1>
            <GameCardContainer games={games} />
        </section>
    );
}
