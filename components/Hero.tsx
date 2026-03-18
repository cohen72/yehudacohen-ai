"use client";

import { motion } from "framer-motion";

const headlineWords = ["Oh", "yeah.", "Your", "own", "personal", "AI", "assistant."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float-orb absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="animate-float-orb-delayed absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Main headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] mb-6">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-8 italic"
        >
          Set up by a guy who got way too deep into this and now does it for
          other people.
        </motion.p>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="max-w-lg mx-auto mb-4"
        >
          <p className="text-[#0a0a0a] text-base sm:text-lg leading-relaxed mb-6">
            The kind that knows your name, remembers everything, never takes a
            sick day, and doesn&apos;t ask for a raise.
          </p>
          <p className="text-[#0a0a0a] text-base sm:text-lg leading-relaxed mb-2">
            I&apos;m Yehuda. I set it up for you.
          </p>
          <p className="text-[#0a0a0a] text-base sm:text-lg leading-relaxed">
            One session. You go make coffee. It goes to work.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-10"
        >
          <a
            href="https://cal.com/yehudacohen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full hover:bg-accent-hover hover:scale-105 transition-all animate-pulse-subtle"
          >
            Book a free call &rarr;
          </a>
          <p className="text-muted text-sm mt-4 italic">
            It&apos;s free. I&apos;m not even going to pitch you. Much.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
