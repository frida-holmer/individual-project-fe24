import { Genre } from "@/interfaces/genre";
import Image from "next/image";
import Link from "next/link";
import styles from "./genrecard.module.css"

interface genreCardProps {
    genre: Genre;
}

export default function GenreCard({ genre }: genreCardProps) {
    return (
        <Link href={"/genre/" + genre.slug}>
            <article key={genre.id} className={styles.cardGenre}>
                <Image
                    src={genre.image_background}
                    alt={genre.name}
                    width={169}
                    height={169}
                />
                <h2>{genre.name}</h2>
            </article>
        </Link>
    );
}
