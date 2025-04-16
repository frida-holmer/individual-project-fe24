"use client"
import { Screenshot } from "@/interfaces/game";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./screenshotsgallery.module.css";

export default function ScreenshotsGallery({ screenshots, gameName }: { screenshots: Screenshot[]; gameName: string; }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

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
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
