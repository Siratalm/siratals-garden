import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const projects = [
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
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-8">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight mb-2">Projects</h1>
          <p className="text-muted leading-relaxed max-w-2xl font-sans text-sm">
            A collection of things I&apos;ve built — from web apps to games.
          </p>
        </section>
        <BentoGrid columns={4}>
          {projects.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </BentoGrid>
      </main>
      <Footer />
    </div>
  );
}
