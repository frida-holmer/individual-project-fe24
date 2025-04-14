import { Game } from "@/interfaces/game";

// Fetch popular games (most added) from API
export async function fetchPopularGames(): Promise<Game[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&ordering=-added&page_size=5`);
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
