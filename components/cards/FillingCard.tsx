import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface FillingCardProps {
  image: string;
  name: string;
}

export function FillingCard({ image, name }: FillingCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 h-28 w-28 overflow-hidden rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
        <ImageWithFallback
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-center" style={{ color: "var(--text-dark)" }}>
        {name}
      </p>
    </div>
  );
}
