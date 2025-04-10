import { fetchGamesByGenre, fetchGenreDetails } from "@/actions/fetch-game-genres";
import Image from "next/image";
import GameCard from "@/components/game-card";
import Pagination from "@/components/pagination";
import styles from "./genre.module.css";

interface GenrePageProps {
  params: { slug: string };
  searchParams?: { page?: string };
}

export default async function GenrePage({ params, searchParams }: GenrePageProps ) {
    const slug = (await params).slug;
    const page = parseInt(searchParams?.page || "1", 10);
    const pageSize = 20;

    const [genre, gamesData] = await Promise.all([
        fetchGenreDetails(slug),
        fetchGamesByGenre(slug, page, pageSize),
      ]);

    const { results: games, next, previous, count } = gamesData;
    const totalPages = Math.ceil(count / pageSize);
  
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
          <Pagination currentPage={page} totalPages={totalPages} basePath={`/genre/${slug}`} />
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    );
  }
