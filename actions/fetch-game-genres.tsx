// Fetch list of game genres from API
export async function fetchGenres() {
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
export async function fetchGamesByGenre() {
    try {
        // const res = await fetch(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data.results.games;
    } catch (err) {
        console.error("Error fetching games by genre:", err)
        return [];
    }
}

// Fetch game genre details from API
export async function fetchGenreDetails(slug: string) {
    try {
        // const res = await fetch(`https://api.rawg.io/api/genres/${slug}?key=${process.env.API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching genre details:", err)
        return null;
    }
}
