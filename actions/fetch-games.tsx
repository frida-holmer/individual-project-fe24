import { Game } from "@/interfaces/game";

// Fetch all games from API
export async function fetchAllGames(): Promise<Game[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.error("Error fetching games:", err)
        return [];
    }
}

// Fetch single game from API
export async function fetchSingleGame(slug: string): Promise<Game> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games/${slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching game:", err)
        throw err;
    }
}
