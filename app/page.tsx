import CarouselHero from "@/components/carousel-hero";
import CarouselGenres from "@/components/carousel-genres";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <CarouselHero />
      <CarouselGenres />
      <main className={styles.main}>

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
