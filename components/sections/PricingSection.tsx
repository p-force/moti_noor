const pricingOptions = [
  {
    size: "Single Piece",
    price: "$3.50 - $5.50",
    desc: "Perfect for a quick treat",
  },
  {
    size: "Box of 6",
    price: "$20.00",
    desc: "Share with friends & family",
  },
  {
    size: "Box of 12",
    price: "$38.00",
    desc: "Best value for parties",
  },
];

export function PricingSection() {
  return (
    <section className="py-24" style={{ background: "var(--milk-beige)" }}>
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <h2
            className="mb-4"
            style={{ fontSize: "3rem", color: "var(--text-dark)" }}
          >
            Pricing
          </h2>
          <p style={{ color: "var(--text-dark)", opacity: 0.7 }}>
            Choose the perfect size for your occasion
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {pricingOptions.map((item) => (
            <div
              key={item.size}
              className="rounded-3xl bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              <h3
                className="mb-3"
                style={{ color: "var(--text-dark)" }}
              >
                {item.size}
              </h3>
              <div
                className="mb-4 text-3xl"
                style={{ color: "var(--soft-rose)" }}
              >
                {item.price}
              </div>
              <p
                className="text-sm"
                style={{ color: "var(--text-dark)", opacity: 0.7 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
