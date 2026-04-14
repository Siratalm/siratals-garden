interface BentoGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export default function BentoGrid({ children, columns = 3 }: BentoGridProps) {
  const columnClasses = {
    2: "masonry-2",
    3: "masonry-3",
    4: "masonry-4",
  };

  return (
    <div className={`max-w-7xl mx-auto px-6 pb-16 ${columnClasses[columns]}`}>
      {children}
    </div>
  );
}
