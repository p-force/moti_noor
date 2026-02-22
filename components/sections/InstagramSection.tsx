import { Instagram } from "lucide-react";

export function InstagramSection() {
  return (
    <section className="py-20" style={{ background: "var(--light-cream)" }}>
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="text-center">
          <h3
            className="mb-6"
            style={{ fontSize: "2rem", color: "var(--text-dark)" }}
          >
            Follow Our Journey
          </h3>
          <button
            className="mx-auto flex items-center gap-3 rounded-full px-10 py-4 transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E1306C, #F77737)",
              color: "white",
              boxShadow: "0 4px 20px rgba(225,48,108,0.3)",
            }}
          >
            <Instagram className="h-5 w-5" />
            @motinoor on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
