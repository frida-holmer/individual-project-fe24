"use client"
import { fetchGenres } from "@/actions/fetch-game-genres";
import { Genre } from "@/interfaces/genre";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./filter.module.css"

export default function FilterGenre() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const getGenres = async () => {
            const data: Genre[] = await fetchGenres();
            setGenres(data);
        }
        getGenres();
    }, []);

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSlug = event.target.value;

        const currentParams = new URLSearchParams(searchParams.toString());
        if (selectedSlug) {
            currentParams.set("genre", selectedSlug);
        } else {
            currentParams.delete("genre");
        }

        router.push(`/search?${currentParams.toString()}`);
    }

    const selectedGenre = searchParams.get("genre") || "";

    return (
        <div className={styles.filter}>
            <label htmlFor="genreSelect">Genre:</label>
            <select id="genreSelect" onChange={handleGenreChange} value={selectedGenre}>
                <option value="">All genres</option>
                {genres.map((genre, i) => (
                    <option key={i} value={genre.slug}>{genre.name}</option>
                ))}
            </select>
        </div>
    );
}
