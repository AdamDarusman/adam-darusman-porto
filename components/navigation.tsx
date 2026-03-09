"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Cases", href: "#cases" },
    { name: "Skills", href: "#skills" },
    { name: "Edu", href: "#education" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <motion.a
          href="#hero"
          onClick={(e) => handleScrollTo(e, "#hero")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display text-xl md:text-2xl tracking-tighter mix-blend-difference hover-target"
        >
          ADAM DARUSMAN
        </motion.a>

        <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar md:overflow-visible py-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap hover-target"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
