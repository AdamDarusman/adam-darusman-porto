export function EducationSection() {
  const certificates = [
    {
      year: "2022",
      title: "КУРС ПО SMM-EDICATION",
      desc: "Профессиональный курс по маркетингу в соцсетях.",
    },
    {
      year: "2023",
      title: "ДИЗАЙН И ВИЗУАЛ",
      desc: "Специализация на создании эстетичного контента.",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="section-title text-center md:text-left">EDUCATION</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="editorial-card bg-foreground text-background group transition-colors duration-500"
          >
            <span className="text-xs opacity-60 mb-2 block">{cert.year}</span>
            <h3 className="text-2xl font-display mb-4">{cert.title}</h3>
            <p className="text-sm opacity-80 uppercase tracking-widest leading-relaxed">
              {cert.desc}
            </p>
            <div className="mt-8 pt-4 border-t border-background/20 flex justify-between items-center">
              <span className="text-[10px] tracking-widest">
                CERTIFICATE_ID_0{i + 1}
              </span>
              <div className="w-8 h-8 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all">
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
