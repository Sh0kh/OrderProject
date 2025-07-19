'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const words = [
  "Empowering",
  "Legal",
  "Solutions",
  "for",
  "a",
  "Dynamic",
  "World"
];

export default function AnimationText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

  const directionVariants = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: -100 },
    { x: 0, y: 100 },
    { x: -150, y: -50 },
    { x: 150, y: 50 },
    { x: 0, y: 0 },
  ];

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage: `url('https://optim.tildacdn.one/tild3966-3931-4639-a163-383632383137/-/format/webp/Home.png.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Floating Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-rose-400 opacity-30 blur-3xl rounded-full animate-float-slow z-0" />
      <div className="absolute bottom-[-100px] right-[-150px] w-[250px] h-[250px] bg-yellow-300 opacity-30 blur-3xl rounded-full animate-float-fast z-0" />

      {/* Animated Text */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center"
      >
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl px-6">
          {words.map((word, index) => (
            <motion.span
              key={word + index}
              initial={{
                ...directionVariants[index % directionVariants.length],
                opacity: 0,
              }}
              whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 15,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-amber-400 via-red-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-xl"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* CSS Animatsiya */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-60px);
          }
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
