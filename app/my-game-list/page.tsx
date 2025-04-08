"use client"
import { Game } from "@/interfaces/game";
import GameCard from "@/components/game-card";
import { useEffect, useState } from "react";
import styles from "./mygamelist.module.css";

export default function MyGameListPage() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const myGameList = localStorage.getItem("myGameList");
    if (myGameList) {
      setGames(JSON.parse(myGameList));
    }
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>My game list</h1>
        {games.length > 0 ? (
          games.map((game, i) => (
            <GameCard key={i} game={game} />
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
