"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="py-24 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-background">
            ABOUT
            <br />
            ME
          </h2>
          <div className="space-y-6 text-sm md:text-base max-w-md opacity-80 uppercase tracking-wide leading-relaxed text-background">
            <p>Adam Darusman – Frontend Developer | Design (Canva & Figma).</p>
            <p>
              I am Adam Darusman, a frontend developer who believes that great
              design is born from a balance between logic and creativity. Beyond
              building interfaces, I express ideas through typography and visual
              design. In my spare time, I continuously learn UI/UX design and
              stay active through regular exercise to maintain consistency and
              performance in my work.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] w-full max-w-md ml-auto grayscale hover:grayscale-0 transition-all duration-700 cursor-none hover-target"
        >
          <Image
            src="/about-adam.png"
            alt="Sophie"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
