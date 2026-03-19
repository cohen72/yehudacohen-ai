"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "We Talk",
    desc: "\u201C20 minutes. You complain about your inbox. I listen.\u201D",
    bg: "bg-teal",
  },
  {
    num: "02",
    title: "I Build",
    desc: "\u201CCustom AI assistant. Built for you specifically. Not a template.\u201D",
    bg: "bg-coral",
  },
  {
    num: "03",
    title: "You Use It",
    desc: "\u201CSame day. No learning curve. Your life is slightly better forever.\u201D",
    bg: "bg-purple",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${step.bg} text-black rounded-2xl p-10 flex flex-col justify-between min-h-[300px]`}
            >
              <span className="text-7xl font-serif font-bold opacity-30">
                {step.num}
              </span>
              <div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-black/80">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-muted text-sm italic mt-8 text-center">
          Results may vary. Side effects include suspicious productivity gains
          and coworker jealousy.
        </p>
      </div>
    </section>
  );
}
