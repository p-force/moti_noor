import { ProductCard } from "@/components/cards/ProductCard";

const products = [
  {
    name: "Classic Mochi",
    price: "$3.50",
    image:
      "https://images.unsplash.com/photo-1672276071323-e9b50085b6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoaSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzE3OTI2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Matcha Mochi",
    price: "$4.00",
    image:
      "https://images.unsplash.com/photo-1724052526175-4a7332bd10e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBtb2NoaSUyMGdyZWVufGVufDF8fHx8MTc3MTc5MjYwMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Premium Donuts",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1626980714826-ad7bf460a027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZG9udXRzJTIwcGFzdGVsfGVufDF8fHx8MTc3MTc5MjYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Strawberry Mochi",
    price: "$4.00",
    image:
      "https://images.unsplash.com/photo-1613040599929-df37463471cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbnMlMjBwYXN0ZWx8ZW58MXx8fHwxNzcxNzkyNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Chocolate Bliss",
    price: "$4.50",
    image:
      "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzE3OTI2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Vanilla Dream",
    price: "$3.50",
    image:
      "https://images.unsplash.com/photo-1626256139204-8b4c568dd71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY3JlYW0lMjBkZXNzZXJ0fGVufDF8fHx8MTc3MTc5MjYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProductsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-28">
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="text-2xl">🍡</span>
          <h2 style={{ fontSize: "3rem", color: "var(--text-dark)" }}>
            Signature Collection
          </h2>
          <span className="text-2xl">🍩</span>
        </div>
        <p
          className="text-lg"
          style={{ color: "var(--text-dark)", opacity: 0.7 }}
        >
          Handmade with love, delivered fresh daily
        </p>
      </div>
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
