import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

export function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="mb-2" style={{ color: "var(--text-dark)" }}>
          {name}
        </h3>
        <p className="text-xl" style={{ color: "var(--soft-rose)" }}>
          {price}
        </p>
      </div>
    </div>
  );
}
