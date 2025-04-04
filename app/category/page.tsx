import { fetchAllGames } from "@/actions/fetch-games";
import { Game } from "@/interfaces/game";
import GameCard from "@/components/game-card";
import styles from "./category.module.css";

export default async function CategoryPage() {
  const data = await fetchAllGames();
  const allGames: Game[] = data;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.resultWrapper}>
          {allGames.map((game, i) => (
            <GameCard key={i} game={game} />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
