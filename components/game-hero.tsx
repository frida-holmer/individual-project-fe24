import { Game } from "@/interfaces/game";
import Image from "next/image";
import Link from "next/link";
import styles from "./gamehero.module.css";

interface gameHeroProps {
    game: Game;
}

export default function GameHero({ game }: gameHeroProps) {
    return (
        <Link href={"/game/" + game.slug}>
            <article key={game.id} className={styles.hero}>
                <Image
                    src={game.background_image}
                    alt={game.name}
                    width={1920}
                    height={1080}
                />
                <div className={styles.overlay}></div>
                <h2>{game.name}</h2>
            </article>
        </Link>
    );
}
