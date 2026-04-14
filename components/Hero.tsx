import Image from "next/image";
import Link from "next/link";

const heroCards = [
  {
    category: "Projects",
    title: "Design Spells",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    href: "/projects",
  },
  {
    category: "Projects",
    title: "Billbreak",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    href: "/projects",
  },
  {
    category: "Writing",
    title: "Blog",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
    href: "/writing",
  },
];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: Text */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 animate-fade-in max-w-prose">
          <div className="text-[1.35rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-[1.3] font-light text-foreground">
            Hey there, Im Siratal <span className="inline-block">👋</span> Welcome to my
            garden{" "}
            <span className="inline-block">🌱</span> I like building & automating{" "}
            <span className="font-medium">businesses</span>, and Im currently helping to build & automate{" "}
            <span className="font-medium">agency</span>.
          </div>
          <div className="text-[1.35rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-[1.3] font-light text-muted">
            In my free time, I enjoy learning from{" "}
            <span className="text-foreground font-normal">people</span>,
            discuss with my friends about {" "}
            <span className="text-foreground font-normal">various topics</span>, and{" "}
            <span className="text-foreground font-normal">walk</span> in nature.
          </div>
          <div className="text-[1.35rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-[1.3] font-light text-muted">
            I do some{" "}
            <Link href="/reading" className="text-foreground font-normal hover:opacity-70">
              reading
            </Link>{" "}
            and{" "}
            <Link href="/writing" className="text-foreground font-normal hover:opacity-70">
              writing
            </Link>{" "}
            as well, albeit not as consistently, but Im working on being better at that.
          </div>
        </div>

        {/* Right: Image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Large card spanning full width on top */}
          <Link
            href={heroCards[0].href}
            className="sm:col-span-2 group block bg-card-bg border border-border rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[280px]">
              <Image
                src={heroCards[0].image}
                alt={heroCards[0].title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs text-muted font-sans">
                {heroCards[0].category} · {heroCards[0].title}
              </span>
              <span className="text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </div>
          </Link>

          {/* Two smaller cards */}
          <Link
            href={heroCards[1].href}
            className="group block bg-card-bg border border-border rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[200px]">
              <Image
                src={heroCards[1].image}
                alt={heroCards[1].title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs text-muted font-sans">
                {heroCards[1].category} · {heroCards[1].title}
              </span>
              <span className="text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </div>
          </Link>

          <Link
            href={heroCards[2].href}
            className="group block bg-card-bg border border-border rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[200px]">
              <Image
                src={heroCards[2].image}
                alt={heroCards[2].title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs text-muted font-sans">
                {heroCards[2].category} · {heroCards[2].title}
              </span>
              <span className="text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
