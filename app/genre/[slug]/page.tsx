import { fetchGamesByGenre, fetchGenreDetails } from "@/actions/fetch-game-genres";
import Image from "next/image";
import GameCardContainer from "@/components/game-card-container";
import styles from "./genre.module.css";

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    const [genre, games] = await Promise.all([
        fetchGenreDetails(slug),
        fetchGamesByGenre(slug),
      ]);
  
    return (
      <div className={styles.page}>
        <header>
          <Image
            src={genre.image_background}
            alt={genre.name}
            width={1200}
            height={675}
          />
          <div className={styles.overlay}></div>
          <h1>{genre.name}</h1>
        </header>

        <main className={styles.main}>
          <div className={styles.about}>
            <h2>About</h2>
            <p dangerouslySetInnerHTML={{ __html: genre.description }} />
          </div>

          <GameCardContainer games={games} />
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    );
  }
