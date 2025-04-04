export interface Genre {
    id: number;
    name: string;
    slug: string;
    games: GamesByGenre[];
}

interface GamesByGenre {
    id: number;
    slug: string;
    name: string;
}

export interface GenreDetails {
    id: number;
    name: string;
    slug: string;
    image_background: string;
    description: string;
}
