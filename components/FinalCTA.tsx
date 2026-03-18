"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 sm:py-40">
      <div ref={ref} className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Ready?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted text-lg sm:text-xl leading-relaxed mb-4"
        >
          20-minute call. Free. No weirdness.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-muted text-lg sm:text-xl leading-relaxed mb-10"
        >
          If it makes sense, we do the thing. If not, we had a nice chat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="https://cal.com/yehudacohen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-accent-hover hover:scale-105 transition-all animate-pulse-subtle"
          >
            Book a free call &rarr;
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12"
        >
          <p className="text-muted italic">
            &mdash; Yehuda
            <br />
            <span className="text-sm">(The guy)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
