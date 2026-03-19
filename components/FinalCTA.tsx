"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-serif italic text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-[-0.04em] text-white mb-6"
      >
        Ready?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted max-w-md mx-auto mb-10 leading-relaxed"
      >
        20-minute call. Free. No weirdness.
        <br />
        If it makes sense, we do the thing. If not, we had a nice chat.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="https://cal.com/yehudacohen"
        className="inline-block bg-lime text-black font-bold rounded-full px-10 py-5 text-lg hover:brightness-110 hover:scale-105 transition-all"
      >
        Book a free call &rarr;
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-muted text-sm italic mt-8"
      >
        &mdash; Yehuda (The guy)
      </motion.p>
    </section>
  );
}
