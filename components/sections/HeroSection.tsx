import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,249,240,0.45) 0%, rgba(255,232,240,0.5) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">

          {/* Logo */}
          <svg
            className="w-full max-w-[480px] drop-shadow-[0_2px_12px_rgba(50,30,40,0.18)]"
            viewBox="0 0 900 180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="MOTI NOOR"
          >
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A3545" />
                <stop offset="50%" stopColor="#3A2835" />
                <stop offset="100%" stopColor="#2E1F28" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              fontFamily="Playfair Display, Cormorant Garamond, serif"
              fontSize="90"
              letterSpacing="8"
              fill="url(#logoGrad)"
            >
              MOTI NOOR
            </text>
          </svg>

          {/* Tagline */}
          <p
            className="text-sm font-medium uppercase tracking-[0.35em]"
            style={{ color: "#C4899A" }}
          >
            Handcrafted Mochi & Donuts
          </p>

          {/* Headline */}
          <h2
            className="leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#3A2835",
              lineHeight: "1.25",
            }}
          >
            Every Bite Tells a Story of
            <br />
            <span style={{ color: "#D4657D" }}>Love & Sweetness</span>
          </h2>

          {/* Subtext */}
          <p
            className="max-w-xl text-lg leading-relaxed"
            style={{ color: "#5A4A55", opacity: 0.85 }}
          >
            Made with passion, served with love. Bring joy to your
            sweetest moments.
          </p>

          {/* CTA */}
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <button
              className="hero-cta-primary rounded-full px-12 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{ minWidth: "220px" }}
            >
              View Menu
            </button>
            <button
              className="rounded-full border-2 px-12 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "#D4657D",
                color: "#D4657D",
                minWidth: "220px",
              }}
            >
              Our Story
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-current"
                  style={{ color: "#D4657D" }}
                />
              ))}
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: "#5A4A55", opacity: 0.7 }}
            >
              500+ Happy Customers
            </span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #FFECEF 100%)",
        }}
      />
    </section>
  );
}
