import { fetchSingleGame } from "@/actions/fetch-games";
import AddToListButton from "@/components/add-to-list-button";
import Image from "next/image";
import styles from "./game.module.css";

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const game = await fetchSingleGame(slug);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>{game.name}</h1>
          <AddToListButton game={game} />
        </div>

        <Image
          src={game.background_image}
          alt={game.name}
          width={1200}
          height={675}
        />

        <div className={styles.detailsWrapper}>
          <div className={styles.about}>
            <h2>About</h2>
            <p>{game.description}</p>
          </div>
          <div className={styles.moreDetails}>
            <p>Rating: {game.rating}</p>
            <p>Release date: {game.released}</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
