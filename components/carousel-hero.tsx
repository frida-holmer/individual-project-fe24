"use client";
import { fetchPopularGames } from '@/actions/fetch-game-categories';
import { Game } from '@/interfaces/game';
import GameHero from './game-hero';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./carouselhero.module.css";

export default function CarouselHero() {
    const [popularGames, setPopularGames] = useState<Game[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        const getPopularGames = async () => {
            const data = await fetchPopularGames();
            setPopularGames(data);
        }
        getPopularGames();
    }, []);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {popularGames.map((game, i) => (
                        <div key={i} className={styles.emblaSlide}>
                            <GameHero key={i} game={game} />
                        </div>
                    ))}
                </div>
            </div>

            <button className={styles.emblaPrev} onClick={scrollPrev}>
                Prev
            </button>
            <button className={styles.emblaNext} onClick={scrollNext}>
                Next
            </button>
        </div>
    )
}
