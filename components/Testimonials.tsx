"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "\u201CI don\u2019t know what he did but my inbox no longer haunts me.\u201D",
    author: "Client #1",
    note: "(soon\u2122)",
    color: "bg-teal",
    initials: "C1",
  },
  {
    quote:
      "\u201C10/10. Changed my life. Got a promotion. Bought a boat.\u201D",
    author: "Completely fabricated testimonial",
    note: "",
    color: "bg-coral",
    initials: "CF",
  },
  {
    quote: "\u201CWait, this is actually real?\u201D",
    author: "You, right now",
    note: "",
    color: "bg-purple",
    initials: "YU",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-card-dark border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-black text-xs font-bold`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t.author}</p>
                {t.note && (
                  <p className="text-muted text-xs">{t.note}</p>
                )}
              </div>
            </div>
            <p className="text-white/90 text-lg italic">{t.quote}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-muted text-xs italic text-center mt-8">
        *Testimonials may be slightly embellished. Or entirely made up.
        You&rsquo;ll never know.
      </p>
    </section>
  );
}
