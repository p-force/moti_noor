import { ProductSlider } from "@/components/ui/ProductSlider";
import type { FlavorSlide } from "@/components/ui/ProductSlider";

const products: FlavorSlide[] = [
  {
    name: "Strawberry Bliss",
    price: "$4.00",
    image:
      "https://images.unsplash.com/photo-1613040599929-df37463471cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbnMlMjBwYXN0ZWx8ZW58MXx8fHwxNzcxNzkyNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Нежнейший клубничный моти с начинкой из свежих ягод. Каждый кусочек — маленький праздник вкуса.",
    bgColor: "#FFE4EC",
    accentColor: "#E85D8A",
  },
  {
    name: "Matcha Dream",
    price: "$4.00",
    image:
      "https://images.unsplash.com/photo-1724052526175-4a7332bd10e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBtb2NoaSUyMGdyZWVufGVufDF8fHx8MTc3MTc5MjYwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Изысканный маття из Японии в сочетании с нежным рисовым тестом. Баланс горчинки и сладости.",
    bgColor: "#E8F5E9",
    accentColor: "#5A9E6F",
  },
  {
    name: "Mango Sunset",
    price: "$4.50",
    image:
      "https://images.unsplash.com/photo-1672276071323-e9b50085b6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoaSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzE3OTI2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Тропический манго встречается с шёлковым рисовым тестом. Вкус солнечного лета в каждом моти.",
    bgColor: "#FFF3E0",
    accentColor: "#E8943A",
  },
  {
    name: "Chocolate Truffle",
    price: "$4.50",
    image:
      "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzE3OTI2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Бельгийский шоколад в оболочке из нежного моти. Насыщенный вкус для истинных ценителей.",
    bgColor: "#F0E6E0",
    accentColor: "#8B5E4B",
  },
  {
    name: "Premium Donuts",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1626980714826-ad7bf460a027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZG9udXRzJTIwcGFzdGVsfGVufDF8fHx8MTc3MTc5MjYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Авторские пончики с глазурью ручной работы. Пять уникальных вкусов в каждой коробке.",
    bgColor: "#FFF0F5",
    accentColor: "#D4657D",
  },
  {
    name: "Vanilla Cloud",
    price: "$3.50",
    image:
      "https://images.unsplash.com/photo-1626256139204-8b4c568dd71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY3JlYW0lMjBkZXNzZXJ0fGVufDF8fHx8MTc3MTc5MjYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Воздушная ваниль Мадагаскара в классическом моти. Лёгкий, нежный, незабываемый.",
    bgColor: "#FFFDE7",
    accentColor: "#C9A84C",
  },
];

export function ProductsSection() {
  return (
    <ProductSlider
      products={products}
      topDividerColor="#FFECEF"
      bottomDividerColor="#F5E6D3"
    />
  );
}
