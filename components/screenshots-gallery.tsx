"use client"
import { Screenshot } from "@/interfaces/game";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./screenshotsgallery.module.css";

export default function ScreenshotsGallery({ screenshots, gameName }: { screenshots: Screenshot[]; gameName: string; }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    if (!screenshots || screenshots.length === 0) {
        return <p>No screenshots available.</p>;
    }

    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {screenshots.map((screenshot) => (
                        <div key={screenshot.id} className={styles.emblaSlide}>
                            <Image
                                src={screenshot.image}
                                alt={`${gameName} screenshot`}
                                width={1200}
                                height={675}
                                className={styles.mainImage}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.thumbs}>
                {screenshots.map((screenshot, i) => (
                    <button key={screenshot.id} onClick={() => scrollTo(i)} className={`${styles.thumb} ${i === selectedIndex ? styles.selected : ""}`} >
                        <Image
                            src={screenshot.image}
                            alt={`Thumbnail ${i + 1}`}
                            width={120}
                            height={67}
                            className={styles.thumbImage}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
