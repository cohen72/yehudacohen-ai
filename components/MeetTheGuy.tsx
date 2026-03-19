"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2024",
    text: "Discovered AI assistants. Used one to avoid emails. Worked too well.",
  },
  {
    year: "2025",
    text: "First client paid $250. Should have charged more.",
  },
  {
    year: "2026",
    text: "Built this website. Convinced myself I\u2019m a legitimate business.",
  },
];

export default function MeetTheGuy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto border-l-4 border-lime pl-8 md:pl-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif italic text-[clamp(1.5rem,4vw,3rem)] leading-[1.2] text-white mb-10"
        >
          &ldquo;I don&rsquo;t fully know what I&rsquo;m doing, but I&rsquo;m
          doing it confidently and it keeps working.&rdquo;
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="text-white font-bold text-lg">Yehuda Cohen</span>
          <span className="text-muted">&middot;</span>
          <span className="text-muted">AI Setup Person</span>
          <span className="text-muted">&middot;</span>
          <span className="text-muted">Certified Since 2026</span>
          <span className="bg-coral text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Warning: Professional (sort of)
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted leading-relaxed mb-12 space-y-4"
        >
          <p>
            iOS developer by day. AI setup guy by... also day, apparently.
          </p>
          <p>
            My day job thinks I&rsquo;m focused on mobile apps. My therapist
            doesn&rsquo;t know about any of this.
          </p>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-lime mt-2 shrink-0" />
              <div>
                <span className="text-lime font-bold">{item.year}</span>
                <span className="text-muted"> &mdash; {item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
