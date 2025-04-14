"use client";
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./carouselhero.module.css";

export default function CarouselHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
                <div className={styles.emblaSlide}>Slide 1</div>
                <div className={styles.emblaSlide}>Slide 2</div>
                <div className={styles.emblaSlide}>Slide 3</div>
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
