import Image from "next/image";

export function HighlightsSection() {
  const highlights = [
    { label: "КАТАЛОГ", img: "/fashion-catalog.jpg" },
    { label: "ОТЗЫВЫ", img: "/reviews-typography.jpg" },
    { label: "ДЕТАЛИ", img: "/macro-details.jpg" },
    { label: "РАБОТА", img: "/bts-work.jpg" },
    { label: "КЕЙСЫ", img: "/portfolio-case.jpg" },
    { label: "О НАС", img: "/about-us-concept.png" },
    { label: "КОНТАКТ", img: "/contact-us-concept.png" },
    { label: "СТИЛЬ", img: "/placeholder.svg?height=200&width=200" },
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-center">
      <h2 className="section-title mb-20">HIGHLIGHTS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
        {highlights.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-4 group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-foreground/20 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src={h.img || "/placeholder.svg"}
                  alt={h.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {h.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
