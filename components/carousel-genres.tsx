"use client";
import { fetchGenres } from '@/actions/fetch-game-genres';
import { Genre } from '@/interfaces/genre';
import GenreCard from './genre-card';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./carouselgenres.module.css";

export default function CarouselGenres() {
    const [gameGenres, setGameGenres] = useState<Genre[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    useEffect(() => {
        const getGameGenres = async () => {
            const data = await fetchGenres();
            setGameGenres(data);
        }
        getGameGenres();
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
                    {gameGenres.map((genre, i) => (
                        <div key={i} className={styles.emblaSlide}>
                            <GenreCard genre={genre} />
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
