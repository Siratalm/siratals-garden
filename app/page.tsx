import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const allCards = [
  // Projects
  {
    category: "Projects",
    subcategory: "Website",
    title: "GetReacX",
    description: "A lead generation agency helping to generate leads.",
    imageHeight: "h-64",
    imageUrl: "/project/getreachx.png",
    href: "https://getreachx.com",
    external: true,
  },
  {
    category: "Projects",
    subcategory: "Automation",
    title: "Automation using n8n",
    description: "business-report-automation using n8n.",
    imageHeight: "h-72",
    imageUrl: "/project/business-report-automation.png",
    href: "https://github.com/Siratalm/business-report-automation",
  },
  {
    category: "Projects",
    subcategory: "Automation",
    title: "Automation using n8n",
    description: "School Fee Notification System using n8n.",
    imageHeight: "h-56",
    imageUrl: "/project/n8n_school_automation.png",
    href: "https://github.com/Siratalm/n8n_school_automation",
    external: true,
  },
  // Reading
  {
    category: "Reading",
    subcategory: "Books",
    title: "The Design of Everyday Things",
    metadata: "Donald A. Norman",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    badges: [{ label: "READING" }],
    href: "/reading",
  },
  {
    category: "Reading",
    subcategory: "Books",
    title: "Children of Dune",
    metadata: "Frank Herbert",
    imageHeight: "h-72",
    imageUrl: "https://images.unsplash.com/photo-1509316975474-886517e3e2c4?w=600&q=80",
    badges: [{ label: "READ" }],
    href: "/reading",
  },
  {
    category: "Reading",
    subcategory: "Books",
    title: "Dune",
    metadata: "Frank Herbert",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1507803388728-36e8477c796b?w=600&q=80",
    badges: [{ label: "READ" }],
    href: "/reading",
  },
  // Hobbies - Coffee
  {
    category: "Hobbies",
    subcategory: "Coffee",
    title: "Colombia Finca La ...",
    metadata: "Colombia · Apartment Coffee\nBlackberry, white peach and grapefruit",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    badges: [{ label: "FILTER" }, { label: "NOW BREWING" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Coffee",
    title: "Marimbus",
    metadata: "Brazil · Market Lane Coffee\nHazelnut and apricot",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80",
    badges: [{ label: "ESPRESSO" }, { label: "NOW BREWING" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Coffee",
    title: "Mexico Mico De Noche",
    metadata: "Mexico · Mountain Kids Coffee Roasters\nFloral, pear and peach",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1497636577773-f1231844b738?w=600&q=80",
    badges: [{ label: "ESPRESSO" }],
    href: "/hobbies",
  },
  // Hobbies - Plants
  {
    category: "Hobbies",
    subcategory: "Plants",
    title: "Philodendron hederaceum 'Micans'",
    imageHeight: "h-72",
    imageUrl: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19207?w=600&q=80",
    badges: [{ label: "ARACEAE" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Plants",
    title: "Asplenium 'Crispy Wave'",
    imageHeight: "h-72",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
    badges: [{ label: "ASPLENIACEAE" }],
    href: "/hobbies",
  },
  // Writing
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
    title: "Dune (2021)",
    metadata: "November 19, 2021",
    description: "Denis Villeneuve's Dune is a visual masterpiece. The scale, the sound design, the cinematography — everything comes together.",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1509316975474-886517e3e2c4?w=600&q=80",
    href: "/writing",
  },
  {
    category: "Writing",
    subcategory: "Blog",
    title: "What the heck is a digital garden?",
    metadata: "February 1, 2023",
    description: "So you've landed on my site (or not, that's okay you can check it out here), and you're curious about this \"digital garden\" thing.",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
    href: "/writing",
  },
  // Hobbies - Film
  {
    category: "Hobbies",
    subcategory: "Film",
    title: "Kentmere Pan 400",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    href: "/hobbies",
  },
  // Hobbies - Climbing
  {
    category: "Hobbies",
    subcategory: "Climbing",
    title: "2022.12.05 @ Fit Bloc",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-32fd1485045e?w=600&q=80",
    href: "/hobbies",
  },
  // Hobbies - Plants 2
  {
    category: "Hobbies",
    subcategory: "Plants",
    title: "Alocasia baginda 'Silver Dragon'",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1463936575824-250362777222?w=600&q=80",
    badges: [{ label: "ARACEAE" }],
    href: "/hobbies",
  },
  // Hobbies - Keyboards
  {
    category: "Hobbies",
    subcategory: "Keyboards",
    title: "Emogogo Grey 01",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1595267334346-e1da9c364879?w=600&q=80",
    href: "/hobbies",
  },
  // Hobbies - Coffee 2
  {
    category: "Hobbies",
    subcategory: "Coffee",
    title: "Colombia Finca La ...",
    metadata: "Colombia · Apartment Coffee\nBlackberry, white peach and grapefruit",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    badges: [{ label: "FILTER" }, { label: "NOW BREWING" }],
    href: "/hobbies",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BentoGrid columns={4}>
          {allCards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </BentoGrid>
      </main>
      <Footer />
    </div>
  );
}
