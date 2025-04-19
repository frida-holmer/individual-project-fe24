import { fetchSingleGame } from "@/actions/fetch-games";
import AddToListButton from "@/components/add-to-list-button";
import ScreenshotsGallery from "@/components/screenshots-gallery";
import Image from "next/image";
import styles from "./game.module.css";

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const game = await fetchSingleGame(slug);

  return (
    <div className={styles.page}>
      <header>
        <Image
          src={game.background_image}
          alt={game.name}
          width={1200}
          height={675}
        />
        <div className={styles.overlay}></div>
        <div className={styles.title}>
          <h1>{game.name}</h1>
          <AddToListButton game={game} />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.detailsWrapper}>
          <div className={styles.about}>
            <h2>About</h2>
            <p dangerouslySetInnerHTML={{ __html: game.description }} />
          </div>
          <div className={styles.moreDetails}>
            <p>Rating: {game.rating}</p>
            <p>Release date: {game.released}</p>
          </div>
        </div>

        <ScreenshotsGallery screenshots={game.screenshots || []} gameName={game.name} />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
