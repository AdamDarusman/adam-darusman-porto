"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    {
      category: "FRONTEND",
      items: [
        "REACT",
        "TYPESCRIPT",
        "NEXTJS",
        "TAILWIND CSS",
        "FRAMER MOTION",
        "JAVASCRIPT",
      ],
    },
    { category: "DESIGN", items: ["FIGMA", "UI/UX", "RESPONSIVE DESIGN"] },
    {
      category: "BACKEND",
      items: ["NODE.JS", "EXPRESS", "POSTGRESQL", "MONGODB", "REST API"],
    },
    { category: "TOOLS", items: ["GIT", "VS CODE", "WEBPACK", "NPM"] },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 relative overflow-hidden bg-gradient-to-b from-white to-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="section-title text-background">I CREATE</h2>
          <div className="grid grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 border-b border-[#4a1c1c] pb-2 text-background">
                  {skill.category}
                </h3>
                <ul className="space-y-2 text-xs tracking-[0.2em] uppercase opacity-70 text-background">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#4a1c1c] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/3 aspect-[2/3] grayscale hover:grayscale-0 transition-all duration-700 md:block cursor-none hover-target"
        >
          <Image
            src="/adam-2-skill.png"
            alt="Sophie creating"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
