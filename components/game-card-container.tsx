import { Game } from "@/interfaces/game";
import GameCard from "./game-card";
import styles from "./gamecardcontainer.module.css"

interface CardContainerProps {
    games: Game[];
}

export default function GameCardContainer({ games }: CardContainerProps) {
    return (
        <section className={styles.cardContainer}>
            {games.map((game, i) => (
                <GameCard key={i} game={game} />
            ))}
        </section>
    );
}
