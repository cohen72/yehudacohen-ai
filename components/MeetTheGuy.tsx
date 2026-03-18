"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2024",
    text: "Discovered AI assistants. Used one exclusively to avoid answering emails. It worked too well.",
  },
  {
    year: "2025",
    text: "Started setting them up for people. First client paid me $250. I should have charged more.",
  },
  {
    year: "2026",
    text: "Built this website. Convinced myself I\u2019m a legitimate business. Still have a day job. Working on it.",
  },
];

export default function MeetTheGuy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">
            Meet the guy
          </h2>
          <p className="text-muted text-sm mb-1">
            Yehuda Cohen &bull; AI Setup Person &bull; Certified Since 2026
          </p>
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-10 uppercase tracking-wide">
            Warning: Professional (sort of)
          </span>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed mb-16">
            <p>Hi. I&apos;m Yehuda.</p>
            <p>
              iOS developer by day. AI setup guy by... also day, apparently.
            </p>
            <p>
              Somewhere between watching too many YouTube videos and avoiding
              real work, I figured out how to set up AI assistants that actually
              do stuff. My own AI assistant is basically running my life. Now I
              do it for other people.
            </p>
            <p className="text-muted">
              My day job thinks I&apos;m focused on mobile apps.
              <br />
              My therapist doesn&apos;t know about any of this.
            </p>
            <p className="italic text-muted border-l-2 border-accent pl-4">
              &ldquo;I don&apos;t fully know what I&apos;m doing, but I&apos;m
              doing it confidently and it keeps working.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-8">The Journey</h3>
          <div className="relative pl-8 border-l-2 border-gray-200 space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 bg-accent rounded-full" />
                <span className="text-accent font-bold text-sm uppercase tracking-wide">
                  {item.year}
                </span>
                <p className="text-[#0a0a0a] text-base mt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
