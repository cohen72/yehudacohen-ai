"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "1",
    text: "We talk for 20 minutes. You complain about your inbox. I listen.",
  },
  {
    num: "2",
    text: "I build your AI assistant. Custom. Just for you.",
  },
  {
    num: "3",
    text: "You use it. Same day. Your life is slightly better forever.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-muted text-lg italic mb-16">
            It&apos;s complicated technology made simple (for you).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="relative bg-surface rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="absolute top-4 right-6 text-8xl font-bold text-accent/10 select-none">
                {step.num}
              </span>
              <span className="inline-block text-accent font-bold text-xl mb-4">
                Step {step.num}
              </span>
              <p className="text-[#0a0a0a] text-base leading-relaxed relative z-10">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-muted text-sm italic mt-10 text-center"
        >
          Results may vary. Side effects include: suspicious productivity gains,
          coworker jealousy, and an inexplicable urge to tell everyone you have
          an AI assistant.
        </motion.p>
      </div>
    </section>
  );
}
