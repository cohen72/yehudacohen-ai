"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    a: "I\u2019ve got you for a week. After that you\u2019re on your own \u2014 honestly it\u2019s not that complicated.",
  },
  {
    q: "Are you actually good at this?",
    a: "My own AI assistant wrote parts of this website. Make of that what you will.",
  },
  {
    q: "Can you set it up remotely?",
    a: "Yes. Zoom + screen share. You make coffee, I set it up.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] text-white text-center mb-12">
          FAQ
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span
                  className={`text-lg font-medium transition-colors ${
                    open === i ? "text-lime" : "text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`ml-4 text-2xl transition-all duration-200 ${
                    open === i
                      ? "text-lime rotate-45"
                      : "text-white/50 rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted pb-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
