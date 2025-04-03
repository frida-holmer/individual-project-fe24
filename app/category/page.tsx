import { fetchAllGames } from "@/actions/fetch-games";
import { Game } from "@/interfaces/game";
import Image from "next/image";
import styles from "./category.module.css";

export default async function CategoryPage() {
  const data = await fetchAllGames();
  const allGames: Game[] = data;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {allGames.map((game) => (
          <article key={game.id}>
            <Image 
              src={game.background_image} 
              alt={game.name} 
              width={100} 
              height={100} 
            />
            <h2>{game.name}</h2>
          </article>
        ))}
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
