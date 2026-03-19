"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "Handles your messages",
  "Remembers everything you forget",
  "Drafts emails in your voice (not robot voice)",
  "Tracks your clients, tasks, notes",
  "Available 24/7 without complaining",
];

export default function WhatItDoes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-white">
          The employee you always wanted but could never{" "}
          <em className="text-lime">afford.</em>
        </h2>

        <div className="space-y-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-start gap-3 text-lg"
            >
              <span className="text-lime font-black text-3xl mt-[-2px] drop-shadow-[0_0_8px_rgba(200,241,53,0.5)]">&#10003;</span>
              <span className="text-white/90">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
