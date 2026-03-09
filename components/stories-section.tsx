"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function StoriesSection() {
  const stories = [
    "/iphone-story-fashion.jpg",
    "/iphone-story-minimalist.jpg",
    "/iphone-story-details.jpg",
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-display text-6xl md:text-9xl mb-16 text-center"
        >
          STORIES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="aspect-[9/16] relative border border-background/20 overflow-hidden cursor-none hover-target group"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Story ${i}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-xs tracking-widest uppercase">
                  Content Case 0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
