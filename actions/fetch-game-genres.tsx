import { Game } from "@/interfaces/game";
import { Genre, GenreDetails } from "@/interfaces/genre";

// Fetch list of game genres from API
export async function fetchGenres(): Promise<Genre[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.error("Error fetching genres:", err)
        return [];
    }
}

// Fetch games by genre from API
export async function fetchGamesByGenre(slug: string): Promise<Game[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games?genres=${slug}&key=${process.env.API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.error("Error fetching games by genre:", err)
        return [];
    }
}

// Fetch game genre details from API
export async function fetchGenreDetails(slug: string): Promise<GenreDetails> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/genres/${slug}?key=${process.env.API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data: GenreDetails = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching genre details:", err)
        throw err;
    }
}
