export interface Game {
    id: number;
    slug: string;
    name: string;
    description: string;
    released: string;
    background_image: string;
    rating: number;
    playtime: number;
    platforms: Platform[];
    tags: Tag[];
    short_screenshots: Screenshot[];
}

interface Platform {
    name: string;
}

interface Tag {
    name: string;
}

interface Screenshot {
    image: string;
}
