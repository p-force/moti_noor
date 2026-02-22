import { Sparkles, Heart, Send } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-32" style={{ background: "white" }}>
      <div className="absolute right-[10%] top-10 opacity-20">
        <Sparkles className="h-12 w-12" style={{ color: "var(--soft-rose)" }} />
      </div>
      <div className="absolute bottom-10 left-[10%] opacity-20">
        <Heart className="h-10 w-10" style={{ color: "var(--soft-rose)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: "3.5rem",
              color: "var(--text-dark)",
              lineHeight: "1.2",
            }}
          >
            Ready to Experience
            <br />
            <span style={{ color: "var(--soft-rose)" }}>Pure Bliss?</span>
          </h2>
          <p
            className="mb-12 text-xl leading-relaxed"
            style={{ color: "var(--text-dark)", opacity: 0.75 }}
          >
            Order your handcrafted mochi & donuts now and taste the difference
            that love makes. Fresh, premium, unforgettable.
          </p>
          <button
            className="mx-auto flex items-center gap-4 rounded-full px-16 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_45px_rgba(0,136,204,0.5)]"
            style={{
              background: "linear-gradient(135deg, #0088cc 0%, #00a0e9 100%)",
              color: "white",
              fontSize: "1.25rem",
              boxShadow: "0 8px 35px rgba(0,136,204,0.4)",
            }}
          >
            <Send className="h-6 w-6" />
            Order via Telegram
          </button>
          <p
            className="mt-6 text-sm"
            style={{ color: "var(--text-dark)", opacity: 0.5 }}
          >
            Fast response • Same day delivery • Fresh guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
