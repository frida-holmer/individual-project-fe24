import { fetchGamesByGenre, fetchGenreDetails } from "@/actions/fetch-game-genres";
import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/game-card";
import styles from "./genre.module.css";

interface GenrePageProps {
  params: { slug: string };
  searchParams?: { page?: string };
}

export default async function GenrePage({ params, searchParams }: GenrePageProps ) {
    const slug = (await params).slug;
    const page = parseInt(searchParams?.page || "1", 10);

    const [genre, gamesData] = await Promise.all([
        fetchGenreDetails(slug),
        fetchGamesByGenre(slug, page),
      ]);

    const { results: games, next, previous } = gamesData;
  
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

          <div>
            {previous && (
              <Link href={`/genre/${slug}?page=${page - 1}`}>
                Previous
              </Link>
            )}
            {next && (
              <Link href={`/genre/${slug}?page=${page + 1}`}>
                Next
              </Link>
            )}
          </div>
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    );
  }
