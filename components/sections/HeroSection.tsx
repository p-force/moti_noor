import { Sparkles, Heart, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFF9F0 0%, #FFE8F0 100%)",
      }}
    >
      <div className="absolute left-[10%] top-20 opacity-30">
        <Sparkles className="h-8 w-8" style={{ color: "var(--soft-rose)" }} />
      </div>
      <div className="absolute right-[15%] top-40 opacity-30">
        <Sparkles className="h-6 w-6" style={{ color: "var(--soft-rose)" }} />
      </div>
      <div className="absolute bottom-32 left-[20%] opacity-30">
        <Heart className="h-7 w-7" style={{ color: "var(--soft-rose)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <h1
              className="tracking-[0.3em]"
              style={{
                fontSize: "3.5rem",
                color: "var(--text-dark)",
                letterSpacing: "0.2em",
              }}
            >
              MOTI NOOR
            </h1>
            <span className="text-2xl">✨</span>
          </div>

          <h2
            className="mb-8 leading-tight"
            style={{
              fontSize: "2.5rem",
              color: "var(--text-dark)",
              lineHeight: "1.3",
            }}
          >
            Every Bite Tells a Story of
            <br />
            <span style={{ color: "var(--soft-rose)" }}>Love & Sweetness</span>
          </h2>

          <p
            className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed"
            style={{ color: "var(--text-dark)", opacity: 0.75 }}
          >
            Handcrafted mochi & donuts that bring joy to your moments. Made with
            passion, served with love.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="rounded-full px-10 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,184,198,0.5)]"
              style={{
                background: "var(--soft-rose)",
                color: "white",
                minWidth: "200px",
                boxShadow: "0 6px 25px rgba(255,184,198,0.3)",
              }}
            >
              View Menu
            </button>
            <button
              className="rounded-full border-2 px-10 py-4 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--soft-rose)",
                color: "var(--soft-rose)",
                minWidth: "200px",
              }}
            >
              Our Story
            </button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="mb-2 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                    style={{ color: "var(--soft-rose)" }}
                  />
                ))}
              </div>
              <p
                className="text-sm"
                style={{ color: "var(--text-dark)", opacity: 0.6 }}
              >
                500+ Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "white",
          clipPath: "ellipse(100% 100% at 50% 100%)",
        }}
      />
    </section>
  );
}
