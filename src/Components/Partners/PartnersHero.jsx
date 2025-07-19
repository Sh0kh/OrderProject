'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PartnersHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={ref} className="relative pt-24 min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://static.norma.uz/images/152299_bc2e2d76944abb61a16172445505.jpg')",
          y,
        }}
      />

      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              AllLegal<br />
              <span className="text-amber-600">Uzbekistan</span>
            </h1>
            <div className="flex items-center space-x-8 mb-12">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">About</span>
                <div className="w-12 h-0.5 bg-amber-600"></div>
                <span className="text-white font-medium">Partners</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg leading-relaxed">
                Bridging local insight with global expertise, PraeLegal Uzbekistan empowers
                businesses to navigate complex legal landscapes with confidence, precision,
                and a commitment to lasting success.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
