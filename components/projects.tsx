import Image from "next/image";

const PROJECTS = [
  {
    title: "VOGUE CZ",
    category: "Editorial",
    image: "/fashion-editorial-photography-high-contrast.jpg",
    year: "2024",
  },
  {
    title: "BAZAAR",
    category: "Fashion",
    image: "/fashion-runway-photography.jpg",
    year: "2023",
  },
  {
    title: "PRADA",
    category: "Campaign",
    image: "/minimalist-fashion-campaign.jpg",
    year: "2024",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-20 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-6 flex justify-between items-end border-b border-foreground/20 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">
                  {project.category}
                </p>
                <h3 className="text-2xl font-serif">{project.title}</h3>
              </div>
              <p className="text-sm font-mono opacity-60">{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
