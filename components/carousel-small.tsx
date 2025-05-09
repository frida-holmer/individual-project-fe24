"use client";
import { Game } from '@/interfaces/game';
import GameCard from './game-card';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import styles from "./carouselsmall.module.css";

interface GameProps {
    games: Game[];
}

export default function CarouselSmall({ games }: GameProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", slidesToScroll: 3 });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const disableScrollButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

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
            <button className={styles.emblaPrev} onClick={scrollPrev} disabled={!canScrollPrev}>
                <Image src="arrow.svg" alt="Prev" height={24} width={24} />
            </button>

            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {games.map((game, i) => (
                        <div key={i} className={styles.emblaSlide}>
                            <GameCard game={game} />
                        </div>
                    ))}
                </div>
            </div>

            <button className={styles.emblaNext} onClick={scrollNext} disabled={!canScrollNext}>
                <Image src="arrow.svg" alt="Next" height={24} width={24} />
            </button>
        </div>
    )
}
