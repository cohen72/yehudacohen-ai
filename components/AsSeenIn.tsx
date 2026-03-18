"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "Your competitor's Slack channel (probably)",
  "Your industry's WhatsApp group (soon)",
  "TechCrunch (in our dreams)",
  "The Verge (maybe one day)",
  "Your boss's nightmares",
  "Product Hunt (soon\u2122)",
];

export default function AsSeenIn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-12 border-y border-gray-100 overflow-hidden"
    >
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-sm text-muted font-medium tracking-wide uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
