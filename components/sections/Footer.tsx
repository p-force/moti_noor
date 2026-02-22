import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12" style={{ background: "var(--milk-beige)" }}>
      <div className="mx-auto max-w-[1440px] px-8 text-center">
        <p
          className="mb-2"
          style={{ color: "var(--text-dark)", opacity: 0.6 }}
        >
          © 2026 MOTI NOOR. All rights reserved.
        </p>
        <p
          className="flex items-center justify-center gap-1 text-sm"
          style={{ color: "var(--text-dark)", opacity: 0.5 }}
        >
          Made with{" "}
          <Heart
            className="inline h-4 w-4 fill-current"
            style={{ color: "var(--soft-rose)" }}
          />{" "}
          in our kitchen
        </p>
      </div>
    </footer>
  );
}
