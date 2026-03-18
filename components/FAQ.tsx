"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "Do I need to know anything about AI?",
    a: "Nope. That\u2019s literally why I exist.",
  },
  {
    q: "How long does it take?",
    a: "One session. A few hours. Same day.",
  },
  {
    q: "What if something breaks after?",
    a: "I\u2019ve got you for a week. After that you\u2019re on your own \u2014 but honestly it\u2019s not that complicated.",
  },
  {
    q: "Are you actually good at this?",
    a: "I mean... yes? My own AI assistant wrote parts of this website. Make of that what you will.",
  },
  {
    q: "Can you set it up remotely?",
    a: "Yes. Zoom + screen share. You make coffee, I set it up.",
  },
];

function FAQItem({ faq, i, inView }: { faq: typeof faqs[0]; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-base sm:text-lg font-medium pr-4">{faq.q}</span>
        <span
          className={`text-muted text-xl shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted text-base leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div ref={ref} className="max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight mb-12 text-center"
        >
          FAQ
        </motion.h2>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
