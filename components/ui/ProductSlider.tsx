"use client";

import { useState, useCallback } from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { CreamDivider } from "@/components/ui/CreamDivider";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface FlavorSlide {
  name: string;
  price: string;
  image: string;
  description: string;
  bgColor: string;
  accentColor: string;
}

interface ProductSliderProps {
  products: FlavorSlide[];
  topDividerColor?: string;
  bottomDividerColor?: string;
}

export function ProductSlider({
  products,
  topDividerColor,
  bottomDividerColor,
}: ProductSliderProps) {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  const total = products.length;
  const current = products[active];

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating || idx === active) return;
      setIsAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setSlideKey((k) => k + 1);
        setTimeout(() => setIsAnimating(false), 50);
      }, 350);
    },
    [isAnimating, active],
  );

  const next = () => goTo((active + 1) % total);
  const prev = () => goTo((active - 1 + total) % total);

  return (
    <>
      {topDividerColor && (
        <CreamDivider
          topColor={topDividerColor}
          bottomColor={current.bgColor}
          variant={1}
        />
      )}
      <section
        className="flavor-slider"
        style={{
          backgroundColor: current.bgColor,
          transition: "background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
      {/* Edge fades — neutralize blob influence at section boundaries */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-[1] h-24"
        style={{
          background: `linear-gradient(to bottom, ${current.bgColor}, transparent)`,
          transition: "background 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-24"
        style={{
          background: `linear-gradient(to top, ${current.bgColor}, transparent)`,
          transition: "background 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="flavor-blob flavor-blob--1"
        style={{ background: current.accentColor }}
      />
      <div
        className="flavor-blob flavor-blob--2"
        style={{ background: current.accentColor }}
      />
      <div
        className="flavor-blob flavor-blob--3"
        style={{ background: current.bgColor }}
      />

      {/* Sparkle decorations */}
      <svg
        className="flavor-sparkle flavor-sparkle--1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill={current.accentColor}
        />
      </svg>
      <svg
        className="flavor-sparkle flavor-sparkle--2"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill={current.accentColor}
        />
      </svg>
      <svg
        className="flavor-sparkle flavor-sparkle--3"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill={current.accentColor}
        />
      </svg>

      {/* Content */}
      <div className="flavor-slider__inner">
        {/* Left — text */}
        <div key={`text-${slideKey}`} className="flavor-slider__text">
          <span
            className="flavor-slider__index"
            style={{ color: current.accentColor }}
          >
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>

          <h2 className="flavor-slider__title">{current.name}</h2>

          <p
            className="flavor-slider__price"
            style={{ color: current.accentColor }}
          >
            {current.price}
          </p>

          <p className="flavor-slider__desc">{current.description}</p>

          <button
            className="flavor-slider__cta"
            style={{ background: current.accentColor }}
          >
            Order Now
          </button>
        </div>

        {/* Right — product image */}
        <div key={`img-${slideKey}`} className="flavor-slider__image-wrap">
          <ImageWithFallback
            src={current.image}
            alt={current.name}
            className="flavor-slider__image"
          />
        </div>
      </div>

      {/* Arrows */}
      <button
        className="flavor-slider__arrow flavor-slider__arrow--prev"
        onClick={prev}
        aria-label="Previous flavor"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="flavor-slider__arrow flavor-slider__arrow--next"
        onClick={next}
        aria-label="Next flavor"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="flavor-slider__dots">
        {products.map((_, i) => (
          <button
            key={i}
            className={`flavor-slider__dot ${i === active ? "flavor-slider__dot--active" : ""}`}
            style={{
              background:
                i === active ? current.accentColor : "rgba(255,255,255,0.5)",
            }}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      </section>
      {bottomDividerColor && (
        <CreamDivider
          topColor={current.bgColor}
          bottomColor={bottomDividerColor}
          variant={2}
        />
      )}
    </>
  );
}
