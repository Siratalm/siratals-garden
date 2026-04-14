import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface Badge {
  label: string;
  color?: string;
}

interface CardProps {
  category: string;
  subcategory?: string;
  title: string;
  metadata?: string;
  description?: string;
  imageHeight?: string;
  imageUrl?: string;
  badges?: Badge[];
  href?: string;
  external?: boolean;
}

// Badge color mapping
const badgeColors: Record<string, string> = {
  FILTER: "bg-green-100 text-green-800",
  "NOW BREWING": "bg-orange-100 text-orange-800",
  READING: "bg-yellow-100 text-yellow-800",
  ESPRESSO: "bg-purple-100 text-purple-800",
  ARACEAE: "bg-sky-100 text-sky-800",
  FABACEAE: "bg-sky-100 text-sky-800",
  PTERIDACEAE: "bg-sky-100 text-sky-800",
  ASPLENIACEAE: "bg-sky-100 text-sky-800",
  READ: "bg-green-100 text-green-800",
  DEFAULT: "bg-neutral-100 text-neutral-600",
};

// Placeholder images for cards
const placeholderImages = [
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  "https://images.unsplash.com/photo-1501084817091-a4f3d1d19207?w=600&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c83cd6f?w=600&q=80",
  "https://images.unsplash.com/photo-1555449372-525af0a19c6b?w=600&q=80",
  "https://images.unsplash.com/photo-1522542550221-32fd1485045e?w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
];

export default function Card({
  category,
  subcategory,
  title,
  metadata,
  description,
  imageHeight = "h-48",
  imageUrl,
  badges,
  href,
  external = false,
}: CardProps) {
  const showArrow = !!href;
  const isExternal = external || (href ? href.startsWith("http") : false);

  // Use useMemo to deterministically select image based on title hash (avoids mutable state)
  const image = useMemo(() => {
    if (imageUrl) return imageUrl;
    // Hash the title to get a consistent index
    const hash = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return placeholderImages[hash % placeholderImages.length];
  }, [title, imageUrl]);

  const CardInner = (
    <div className="group flex flex-col bg-card-bg border border-border rounded-lg overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
      {/* Image placeholder */}
      <div className={`relative w-full ${imageHeight}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
        {/* Category · Subcategory + Arrow */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted font-sans">
            {category}
            {subcategory && <span> · {subcategory}</span>}
          </span>
          {showArrow && (
            <span className="text-muted text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          )}
        </div>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className={`text-[10px] uppercase tracking-wider font-sans font-medium px-2 py-0.5 rounded ${
                  badge.color || badgeColors[badge.label] || badgeColors.DEFAULT
                }`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-normal leading-tight">{title}</h3>

        {/* Metadata */}
        {metadata && (
          <div className="text-sm text-muted font-sans whitespace-pre-line">{metadata}</div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-muted font-sans leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    if (isExternal) {
      return (
        <div className="masonry-item">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CardInner}
          </a>
        </div>
      );
    }
    return (
      <div className="masonry-item">
        <Link href={href}>{CardInner}</Link>
      </div>
    );
  }

  return <div className="masonry-item">{CardInner}</div>;
}
