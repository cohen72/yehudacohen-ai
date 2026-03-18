"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$750",
    description: 'You get a fully working AI assistant.\nThat\u2019s it. No upsells. No "premium tier unlocks the good stuff."',
    detail: 'Setup + 1 week of "wait why isn\u2019t it doing the thing" support',
    popular: false,
  },
  {
    name: "Pro",
    price: "$1,500",
    description: "Everything above + connected to your actual tools.\nCalendar. Email. WhatsApp. The works.",
    detail: "Everything above + minor existential crisis about how much time you\u2019ve been wasting",
    popular: true,
  },
  {
    name: "Custom",
    price: "let\u2019s talk",
    description: "You have a weird idea. I probably love it.",
    detail: "My personal cell number (bad idea)",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          Pricing
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-accent shadow-md md:-translate-y-2"
                  : "border border-gray-100"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-accent mb-4">
                {plan.price}
              </p>
              <p className="text-[#0a0a0a] text-sm leading-relaxed whitespace-pre-line mb-4">
                {plan.description}
              </p>
              <p className="text-muted text-xs italic">{plan.detail}</p>
              <a
                href="https://cal.com/yehudacohen"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block text-center text-sm font-semibold px-6 py-3 rounded-full transition-colors ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "bg-surface text-[#0a0a0a] hover:bg-gray-200"
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
