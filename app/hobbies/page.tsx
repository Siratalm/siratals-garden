import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const coffee = [
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
  {
    category: "Hobbies",
    subcategory: "Coffee",
    title: "Finca Integral el ...",
    metadata: "Honduras · Simple Kaffa\nFloral, cocoa nibs, dark plum and citrus",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
    badges: [{ label: "FILTER" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Coffee",
    title: "Santuario Sul",
    metadata: "Brazil · Homeground Coffee Roasters\nPassionfruit, peach, honey and dark chocolate",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1509042232858-75e556880962?w=600&q=80",
    badges: [{ label: "FILTER" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Coffee",
    title: "Gasharu",
    metadata: "Rwanda · Flip Coffee Roasters\nCherry liqueur, mixed berries and dark chocolate",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    badges: [{ label: "ESPRESSO" }],
    href: "/hobbies",
  },
];

const plants = [
  {
    category: "Hobbies",
    subcategory: "Plants",
    title: "Asplenium 'Crispy Wave'",
    imageHeight: "h-72",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
    badges: [{ label: "ASPLENIACEAE" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Plants",
    title: "Philodendron hederaceum 'Micans'",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19207?w=600&q=80",
    badges: [{ label: "ARACEAE" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Plants",
    title: "Pithecellobium Confertum",
    imageHeight: "h-72",
    imageUrl: "https://images.unsplash.com/photo-1459411621453-7debff73a9cb?w=600&q=80",
    badges: [{ label: "FABACEAE" }],
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Plants",
    title: "Alocasia baginda 'Silver Dragon'",
    imageHeight: "h-64",
    imageUrl: "https://images.unsplash.com/photo-1463936575824-250362777222?w=600&q=80",
    badges: [{ label: "ARACEAE" }],
    href: "/hobbies",
  },
];

const climbing = [
  {
    category: "Hobbies",
    subcategory: "Climbing",
    title: "2022.12.05 @ Fit Bloc",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-32fd1485045e?w=600&q=80",
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Climbing",
    title: "2022.11.28 @ Vertical World",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1564769662533-4f00b7cfd59a?w=600&q=80",
    href: "/hobbies",
  },
];

const film = [
  {
    category: "Hobbies",
    subcategory: "Film",
    title: "Kentmere Pan 400",
    metadata: "35mm · Black & White",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Film",
    title: "Kodak Gold 200",
    metadata: "35mm · Color Negative",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Film",
    title: "Fujicolor C200",
    metadata: "35mm · Color Negative",
    imageHeight: "h-48",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    href: "/hobbies",
  },
];

const keyboards = [
  {
    category: "Hobbies",
    subcategory: "Keyboards",
    title: "Emogogo Grey 01",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1595267334346-e1da9c364879?w=600&q=80",
    href: "/hobbies",
  },
  {
    category: "Hobbies",
    subcategory: "Keyboards",
    title: "Monokei x Hand Engineering Kage",
    imageHeight: "h-56",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=600&q=80",
    href: "/hobbies",
  },
];

export default function HobbiesPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <h1 className="text-3xl font-normal tracking-tight mb-2">Hobbies</h1>
          <p className="text-muted leading-relaxed max-w-2xl font-sans">
            Coffee, plants, climbing, film photography, and mechanical keyboards.
          </p>
        </section>

        {/* Coffee */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-6 pb-4">
            <h2 className="text-sm uppercase tracking-wider text-muted font-sans font-medium">☕ Coffee</h2>
          </div>
          <BentoGrid columns={4}>
            {coffee.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </BentoGrid>
        </section>

        {/* Plants */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-6 pb-4">
            <h2 className="text-sm uppercase tracking-wider text-muted font-sans font-medium">🌱 Plants</h2>
          </div>
          <BentoGrid columns={4}>
            {plants.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </BentoGrid>
        </section>

        {/* Climbing */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-6 pb-4">
            <h2 className="text-sm uppercase tracking-wider text-muted font-sans font-medium">🧗 Climbing</h2>
          </div>
          <BentoGrid columns={4}>
            {climbing.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </BentoGrid>
        </section>

        {/* Film */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-6 pb-4">
            <h2 className="text-sm uppercase tracking-wider text-muted font-sans font-medium">📷 Film</h2>
          </div>
          <BentoGrid columns={4}>
            {film.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </BentoGrid>
        </section>

        {/* Keyboards */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-6 pb-4">
            <h2 className="text-sm uppercase tracking-wider text-muted font-sans font-medium">⌨️ Keyboards</h2>
          </div>
          <BentoGrid columns={4}>
            {keyboards.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </BentoGrid>
        </section>
      </main>
      <Footer />
    </div>
  );
}
