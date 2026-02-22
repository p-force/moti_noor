import { FillingCard } from "@/components/cards/FillingCard";

const fillings = [
  {
    name: "Matcha",
    image:
      "https://images.unsplash.com/photo-1724052526175-4a7332bd10e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBtb2NoaSUyMGdyZWVufGVufDF8fHx8MTc3MTc5MjYwMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Chocolate",
    image:
      "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzE3OTI2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Vanilla",
    image:
      "https://images.unsplash.com/photo-1626256139204-8b4c568dd71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY3JlYW0lMjBkZXNzZXJ0fGVufDF8fHx8MTc3MTc5MjYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Raspberry",
    image:
      "https://images.unsplash.com/photo-1761637604820-6b6aa2887d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBkZXNzZXJ0JTIwZmlsbGluZ3xlbnwxfHx8fDE3NzE3OTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Pistachio",
    image:
      "https://images.unsplash.com/photo-1630859885691-967800725d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW8lMjBudXQlMjBkZXNzZXJ0fGVufDF8fHx8MTc3MTc5MjYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Mango",
    image:
      "https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHRyb3BpY2FsJTIwZnJ1aXR8ZW58MXx8fHwxNzcxNzkyNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function FillingsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-24">
      <div className="mb-16 text-center">
        <h2
          className="mb-4"
          style={{ fontSize: "3rem", color: "var(--text-dark)" }}
        >
          Flavor Selection
        </h2>
        <p style={{ color: "var(--text-dark)", opacity: 0.7 }}>
          Discover our exquisite range of fillings
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
        {fillings.map((filling) => (
          <FillingCard key={filling.name} {...filling} />
        ))}
      </div>
    </section>
  );
}
