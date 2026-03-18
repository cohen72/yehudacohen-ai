"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "I don\u2019t know what he did but my inbox no longer haunts me.",
    author: "Satisfied client",
    note: "(name withheld because I haven\u2019t gotten one yet, but soon\u2122)",
    initials: "SC",
  },
  {
    quote: "10/10 would recommend. Changed my life. Got a promotion. Bought a boat.",
    author: "Completely fabricated testimonial",
    note: "",
    initials: "CF",
  },
  {
    quote: "Wait, this is actually real?",
    author: "You, right now",
    note: "",
    initials: "YO",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          What people are saying
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="bg-surface rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-muted mb-6">
                {t.initials}
              </div>
              <p className="text-[#0a0a0a] text-base italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold">{t.author}</p>
              {t.note && (
                <p className="text-muted text-xs italic">{t.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
