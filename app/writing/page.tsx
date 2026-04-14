import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const articles = [
  {
    category: "Writing",
    subcategory: "Blog",
    title: "On weddings",
    metadata: "February 16, 2025",
    description: "I've always wanted a small wedding. Just our immediate families and closest friends, in a beautiful yet cozy venue.",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863557?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "Consistency and spontaneity",
    metadata: "December 31, 2023",
    description: "So, here I am spending the last two days of 2023 down with a fever. I've been wanting to take some time to reflect on the year.",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19207?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "Out of focus",
    metadata: "June 12, 2023",
    description: "Last Friday, as I was heading home from work, my eyes were feeling the strain from staring at my computer screen all day.",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "On copying",
    metadata: "April 20, 2023",
    description: "Not too long ago, I completed a new iteration of my personal website and shared it online.",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "What the heck is a digital garden?",
    metadata: "February 1, 2023",
    description: "So you've landed on my site (or not, that's okay you can check it out here), and you're curious about this \"digital garden\" thing.",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "Everyday it gets a little easier",
    metadata: "January 15, 2023",
    description: "A reflection on building habits and finding rhythm in daily creative practice.",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "Dune (2021)",
    metadata: "November 19, 2021",
    description: "Denis Villeneuve's Dune is a visual masterpiece. The scale, the sound design, the cinematography.",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1509316975474-886517e3e2c4?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "On minimalism",
    metadata: "October 5, 2021",
    description: "Thoughts on living with less and finding clarity in simplicity.",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    href: "/writing",
  },
];

export default function WritingPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <h1 className="text-5xl sm:text-6xl font-normal tracking-tight mb-4">writing.</h1>
          <p className="text-muted leading-relaxed max-w-2xl font-sans text-sm">
            I have a blog that doesn&apos;t really adhere to any fixed themes. From philosophy essays to
            movie reviews to shower thoughts, it really is the wild west. These days, I&apos;m trying to Tweet
            more instead.
          </p>
        </section>
        <BentoGrid columns={4}>
          {articles.map((article, i) => (
            <Card key={i} {...article} />
          ))}
        </BentoGrid>
      </main>
      <Footer />
    </div>
  );
}
