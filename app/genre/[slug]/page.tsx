import { fetchGamesByGenre, fetchGenreDetails } from "@/actions/fetch-game-genres";
import Image from "next/image";
import GameCard from "@/components/game-card";
import styles from "./genre.module.css";

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    const [genre, games] = await Promise.all([
        fetchGenreDetails(slug),
        fetchGamesByGenre(slug),
      ]);
  
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>{genre.name}</h1>
          <Image
            src={genre.image_background}
            alt={genre.name}
            width={1200}
            height={675}
          />
          <h2>About</h2>
          <p>{genre.description}</p>

          <section className={styles.genreWrapper}>
            {games.map((game, i) => (
                <GameCard key={i} game={game} />
            ))}
          </section>
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    );
  }
