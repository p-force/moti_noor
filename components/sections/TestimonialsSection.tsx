import { TestimonialCard } from "@/components/cards/TestimonialCard";

const testimonials = [
  {
    name: "Sarah M.",
    comment:
      "Absolutely divine! The mochi is so soft and the flavors are incredible. My new obsession!",
    rating: 5,
  },
  {
    name: "Emma L.",
    comment:
      "These are not just desserts, they're little pieces of art. Perfect for special occasions!",
    rating: 5,
  },
  {
    name: "Olivia K.",
    comment:
      "The quality is outstanding. You can really taste the premium ingredients. Worth every penny!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFF9F0 0%, #FFE8F0 30%, #FFD6E0 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="text-2xl">💕</span>
            <h2 style={{ fontSize: "3rem", color: "var(--text-dark)" }}>
              Customer Love
            </h2>
            <span className="text-2xl">💕</span>
          </div>
          <p style={{ color: "var(--text-dark)", opacity: 0.7 }}>
            See what our happy customers are saying
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
