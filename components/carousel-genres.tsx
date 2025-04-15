"use client";
import { fetchGenres } from '@/actions/fetch-game-genres';
import { Genre } from '@/interfaces/genre';
import GenreCard from './genre-card';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./carouselgenres.module.css";

export default function CarouselGenres() {
    const [gameGenres, setGameGenres] = useState<Genre[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", slidesToScroll: 5 });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const disableScrollButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        const getGameGenres = async () => {
            const data = await fetchGenres();
            setGameGenres(data);
        }
        getGameGenres();
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        disableScrollButtons();
        emblaApi.on('select', disableScrollButtons);
        emblaApi.on('reInit', disableScrollButtons);

        return () => {
            emblaApi.off('select', disableScrollButtons);
            emblaApi.off('reInit', disableScrollButtons);
        };
    }, [emblaApi, disableScrollButtons]);

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

            <button className={styles.emblaPrev} onClick={scrollPrev} disabled={!canScrollPrev}>
                Prev
            </button>
            <button className={styles.emblaNext} onClick={scrollNext} disabled={!canScrollNext}>
                Next
            </button>
        </div>
    )
}
