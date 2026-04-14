import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const books = [
  {
    category: "Reading",
    subcategory: "Books",
    title: "Atomic Habits",
    metadata: "James Clear",
    imageHeight: "h-64",
    imageUrl: "/reading_books/atomic-habits-dots.png",
    badges: [{ label: "READ" }],
    href: "/reading",
  },
  {
    category: "Reading",
    subcategory: "Books",
    title: "Rich Dad Poor Dad",
    metadata: "Robert Kiyosaki",
    imageHeight: "h-72",
    imageUrl: "/reading_books/reach-dad-poor-dad.webp",
    badges: [{ label: "READING" }],
    href: "/reading",
  },
  {
    category: "Reading",
    subcategory: "Books",
    title: "The Creature from Jekyll Island",
    metadata: "G. Edward Griffin",
    imageHeight: "h-64",
    imageUrl: "/reading_books/the-creature-from-jekyll-island.jpg",
    badges: [{ label: "READING" }],
    href: "/reading",
  },
];

export default function ReadingPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-8">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight mb-2">Reading</h1>
          <p className="text-muted leading-relaxed max-w-2xl font-sans text-sm">
            Books I&apos;m reading, have read, and want to read. With notes and reflections.
          </p>
        </section>
        <BentoGrid columns={4}>
          {books.map((book, i) => (
            <Card key={i} {...book} />
          ))}
        </BentoGrid>
      </main>
      <Footer />
    </div>
  );
}
