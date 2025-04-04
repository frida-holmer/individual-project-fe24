import { fetchGenres } from "@/actions/fetch-game-genres";
import { Genre } from "@/interfaces/genre";
import GenreCard from "@/components/genre-card";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetchGenres();
  const genres: Genre[] = data;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.genreWrapper}>
          {genres.map((genre, i) => (
            <GenreCard key={i} genre={genre} />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
