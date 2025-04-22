import { fetchNintendoGames, fetchPCGames, fetchPlaystationGames, fetchXboxGames } from "@/actions/fetch-game-categories";
import CarouselHero from "@/components/carousel-hero";
import CarouselGenres from "@/components/carousel-genres";
import CarouselSmall from "@/components/carousel-small";
import styles from "./page.module.css";

export default async function Home() {
  const [pcGames, psGames, xboxGames, nintendoGames] = await Promise.all([
    fetchPCGames(),
    fetchPlaystationGames(),
    fetchXboxGames(),
    fetchNintendoGames()
  ]);

  return (
    <div className={styles.page}>
      <CarouselHero />
      <CarouselGenres />

      <main className={styles.main}>
        <div className={styles.category}>
          <h2>Top Rated Games on PC</h2>
          <CarouselSmall games={pcGames} />
        </div>

        <div className={styles.category}>
          <h2>Top Rated Games on PlayStation 5</h2>
          <CarouselSmall games={psGames} />
        </div>

        <div className={styles.category}>
          <h2>Top Rated Games on Xbox One</h2>
          <CarouselSmall games={xboxGames} />
        </div>
        
        <div className={styles.category}>
          <h2>Top Rated Games on Nintendo Switch</h2>
          <CarouselSmall games={nintendoGames} />
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
