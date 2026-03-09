"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* Background Text Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 w-full text-center z-0 select-none pointer-events-none px-4"
      >
        <h1 className="text-[15vw] md:text-[18vw] md:-ml-[25px] leading-none text-editorial font-black tracking-tighter">
          PORTFOLIO
        </h1>
      </motion.div>

      {/* Profile Image & Name Layer */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-[300px] h-[400px] md:w-[450px] md:h-[700px] md:mr-60 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-none hover-target"
        >
          <Image
            src="/images/adam-v2.png"
            alt="Sophie Petrova"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Floating Names */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none">
          <div className="flex justify-between w-full items-center px-4 md:px-0">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: -20, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-4xl md:text-8xl font-light tracking-[0.2em] md:-ml-[80px] md:mt-[70px] uppercase"
            >
              Adam
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-4xl md:text-[90px] font-light tracking-[0.2em] md:ml-[410px] md:mt-[280px] uppercase"
            >
              Darusman
            </motion.span>
          </div>
        </div>
      </div>

      {/* Socials / Bottom Info */}
      <div className="absolute bottom-10 left-10 text-[10px] md:text-xs tracking-widest leading-relaxed uppercase opacity-70">
        <p>li: Adam Darusman</p>
        <p>inst: adm_drsmn</p>
      </div>

      <div className="absolute bottom-10 right-10 text-[10px] md:text-xs tracking-widest uppercase opacity-70 text-right">
        <p>Based in Prague</p>
        <p>© 2025</p>
      </div>
    </section>
  );
}
