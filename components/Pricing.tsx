"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$750",
    desc: "You get a fully working AI assistant. No upsells. No \u2018premium tier unlocks the good stuff.\u2019",
    detail: "Setup + 1 week of support",
    cta: "Book this \u2192",
    featured: false,
    border: "border-teal",
  },
  {
    name: "Pro",
    price: "$1,500",
    desc: "Everything + connected to your actual tools. Calendar. Email. WhatsApp.",
    detail: "Minor existential crisis about wasted time included",
    cta: "Book this \u2192",
    featured: true,
    border: "",
  },
  {
    name: "Custom",
    price: "Let\u2019s talk",
    desc: "You have a weird idea. I probably love it.",
    detail: "My personal cell number (bad idea)",
    cta: "Let\u2019s talk \u2192",
    featured: false,
    border: "border-purple",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`rounded-2xl p-8 flex flex-col ${
              plan.featured
                ? "bg-lime text-black md:-mt-4 md:py-12"
                : `bg-card-dark border ${plan.border} text-white`
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <h3
                className={`text-xl font-bold ${
                  plan.featured ? "text-black" : "text-white"
                }`}
              >
                {plan.name}
              </h3>
              {plan.featured && (
                <span className="bg-black text-lime text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular
                </span>
              )}
            </div>

            <p
              className={`text-4xl font-serif font-bold mb-4 ${
                plan.featured ? "text-black" : "text-white"
              }`}
            >
              {plan.price}
            </p>

            <p
              className={`mb-4 ${
                plan.featured ? "text-black/80" : "text-white/70"
              }`}
            >
              {plan.desc}
            </p>

            <p
              className={`text-sm italic mb-8 ${
                plan.featured ? "text-black/60" : "text-muted"
              }`}
            >
              {plan.detail}
            </p>

            <a
              href="https://cal.com/yehudacohen"
              className={`mt-auto text-center font-bold rounded-full px-6 py-3 transition-all hover:scale-105 ${
                plan.featured
                  ? "bg-black text-lime"
                  : "border border-white/30 text-white hover:border-white/60"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
