"use client"
import { fetchGenres } from "@/actions/fetch-game-genres";
import { Genre } from "@/interfaces/genre";
import { useEffect, useState } from "react";
import styles from "./filter.module.css"

export default function FilterGenre() {
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        const getGenres = async () => {
            const data: Genre[] = await fetchGenres();
            const genreName = data.map((genre) => genre.name)
            setGenres(genreName);
        }
        getGenres();
    }, []);

    return (
        <div className={styles.filter}>
            <label htmlFor="genreSelect">Genre:</label>
            <select id="genreSelect">
                {genres.map((genre, i) => (
                    <option key={i} value={genre}>{genre}</option>
                ))}
            </select>
        </div>
    );
}
