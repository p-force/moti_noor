interface TestimonialCardProps {
  name: string;
  comment: string;
  rating: number;
}

export function TestimonialCard({
  name,
  comment,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-xl">
            ✨
          </span>
        ))}
      </div>
      <p
        className="mb-6 italic leading-relaxed"
        style={{ color: "var(--text-dark)", opacity: 0.85 }}
      >
        &ldquo;{comment}&rdquo;
      </p>
      <p style={{ color: "var(--soft-rose)" }}>— {name}</p>
    </div>
  );
}
