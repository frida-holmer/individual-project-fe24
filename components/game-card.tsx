import { Game } from "@/interfaces/game";
import Image from "next/image";

interface gameCardProps {
    game: Game;
}

export default function GameCard({ game }: gameCardProps) {
    return (
        <article key={game.id}>
            <Image
                src={game.background_image}
                alt={game.name}
                width={100}
                height={100}
            />
            <h2>{game.name}</h2>
        </article>
    );
}
