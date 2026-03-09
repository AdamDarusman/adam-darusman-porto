"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CasesSection() {
  const images = [
    "/aesthetic-skincare-product.jpg",
    "/fashion-editorial-close-up.jpg",
    "/minimalist-interior.png",
    "/texture-macro.jpg",
    "/luxury-detail.jpg",
    "/model-portrait.png",
  ];

  return (
    <section id="cases" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">THE CASE</h2>
        <span className="text-display text-2xl opacity-60">VISUAL</span>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="aspect-square relative grayscale hover:grayscale-0 transition-all duration-500 cursor-none hover-target"
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Case study ${i}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
