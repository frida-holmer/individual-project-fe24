"use client"
import { Screenshot } from "@/interfaces/game";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./screenshotsgallery.module.css";

export default function ScreenshotsGallery({ screenshots, gameName }: { screenshots: Screenshot[]; gameName: string; }) {
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: false });
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({ containScroll: "keepSnaps", dragFree: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        const index = emblaMainApi.selectedScrollSnap();
        setSelectedIndex(index);
        emblaThumbsApi.scrollTo(index);
    }, [emblaMainApi, emblaThumbsApi]);

    useEffect(() => {
        if (!emblaMainApi) return;
        emblaMainApi.on("select", onSelect);
        onSelect();
    }, [emblaMainApi, onSelect]);

    if (!screenshots || screenshots.length === 0) {
        return <p>No screenshots available.</p>;
    }

    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaMainRef}>
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

            <div className={styles.thumbViewport} ref={emblaThumbsRef}>
                <div className={styles.thumbContainer}>
                    {screenshots.map((screenshot, i) => (
                        <button key={screenshot.id} onClick={() => scrollTo(i)} className={`${styles.thumbSlide} ${i === selectedIndex ? styles.selected : ""}`}>
                            <Image
                                src={screenshot.image}
                                alt={`Thumbnail ${i + 1}`}
                                width={264}
                                height={148}
                                className={styles.thumbImage}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
