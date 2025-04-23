"use client"
import { Game } from "@/interfaces/game";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./mygamelist.module.css";

export default function MyGameListPage() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const myStoredGameList = localStorage.getItem("myGameList");
    if (myStoredGameList) {
      setGames(JSON.parse(myStoredGameList));
    }
  }, []);

  const handleRemove = (id: number) => {
    const updatedGameList = games.filter((game) => game.id !== id);
    setGames(updatedGameList);
    localStorage.setItem("myGameList", JSON.stringify(updatedGameList));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>My game list</h1>
        {games.length > 0 ? (
          games.map((game) => (
            <article key={game.id} className={styles.listCard}>
              <div className={styles.imgContainer}>
                <Link href={"/game/" + game.slug}>
                  <Image
                    src={game.background_image}
                    alt={game.name}
                    width={300}
                    height={169}
                  />
                </Link>
              </div>
              
              <h2><Link href={"/game/" + game.slug}>{game.name}</Link></h2>
              
              <button onClick={() => handleRemove(game.id)}>
                Remove from list
              </button>
            </article>
          ))
        ) : (
          <p>Your list is empty.</p>
        )}
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
