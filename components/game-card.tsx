import { Game } from "@/interfaces/game";
import Image from "next/image";
import Link from "next/link";
import styles from "./gamecard.module.css";

interface gameCardProps {
    game: Game;
}

export default function GameCard({ game }: gameCardProps) {
    return (
        <Link href={"/game/" + game.slug}>
            <article key={game.id} className={styles.card}>
                <Image
                    src={game.background_image}
                    alt={game.name}
                    width={300}
                    height={169}
                />
                <div className={styles.overlay}></div>
                <h3>{game.name}</h3>
            </article>
        </Link>
    );
}
