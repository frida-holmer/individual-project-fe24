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

// Fetch high rated games on PC from API
export async function fetchPCGames(): Promise<Game[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&platforms=4&ordering=-metacritic&page_size=12`);
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

// Fetch high rated games on PS5 from API
export async function fetchPlaystationGames(): Promise<Game[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&platforms=187&ordering=-metacritic&page_size=12`);
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

// Fetch high rated games on Xbox One from API
export async function fetchXboxGames(): Promise<Game[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&platforms=1&ordering=-metacritic&page_size=12`);
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

// Fetch high rated games on Nintendo Switch from API
export async function fetchNintendoGames(): Promise<Game[]> {
    try {
        // const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&platforms=7&ordering=-metacritic&page_size=12`);
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
