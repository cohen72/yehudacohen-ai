"use client";

import { motion } from "framer-motion";

const lines = ["Oh yeah.", "Your own personal", "AI assistant."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #c084fc22 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #5ee7c822 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #c8f13511 0%, transparent 50%)",
          backgroundSize: "400% 400%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-xs tracking-[0.3em] text-teal mb-8"
        >
          AI Setup. Done for you.
        </motion.p>

        <h1 className="font-serif">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.15 }}
              className="block text-[clamp(3rem,10vw,7.5rem)] leading-[0.85] tracking-[-0.04em] text-white"
            >
              {i === 2 ? <em>{line}</em> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted mt-8 max-w-lg mx-auto text-lg"
        >
          Set up by a guy who got way too deep into this
          <br />
          and now does it for other people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://cal.com/yehudacohen"
            className="bg-lime text-black font-bold rounded-full px-8 py-4 text-base hover:brightness-110 hover:scale-105 transition-all"
          >
            Book a free call &rarr;
          </a>
          <a
            href="#how-it-works"
            className="border border-white/30 text-white rounded-full px-8 py-4 text-base hover:border-white/60 transition-all"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
