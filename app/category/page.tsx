import { fetchAllGames } from "@/actions/fetch-games";
import { Game } from "@/interfaces/game";
import GameCardContainer from "@/components/game-card-container";
import styles from "./category.module.css";

export default async function CategoryPage() {
  const data = await fetchAllGames();
  const games: Game[] = data;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <GameCardContainer games={games} />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
