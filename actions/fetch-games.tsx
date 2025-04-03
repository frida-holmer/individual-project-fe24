// Fetch all games from API
export async function fetchAllGames() {
    const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`);
    const data = await res.json();

    return data.results;
}
