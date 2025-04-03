export interface Game {
    id: number;
    name: string;
    released: string;
    background_image: string;
    rating: number;
    playtime: number;
    platforms: Platform[];
}

interface Platform {
    name: string;
}
