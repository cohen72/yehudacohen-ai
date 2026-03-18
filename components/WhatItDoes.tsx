"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "Handle your messages",
  "Remember everything you forget",
  "Draft emails in your voice (not robot voice)",
  "Keep track of your clients, tasks, and notes",
  "Be available 24/7 without complaining about it",
];

export default function WhatItDoes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              What it does
            </h2>
            <p className="text-muted text-lg">
              Basically? It&apos;s the employee you always wanted but could never
              afford.
            </p>
          </motion.div>

          {/* Right column — checklist */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="text-accent font-bold text-lg mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span className="text-[#0a0a0a] text-base sm:text-lg">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
