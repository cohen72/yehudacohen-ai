"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TickerBand from "@/components/TickerBand";
import HowItWorks from "@/components/HowItWorks";
import WhatItDoes from "@/components/WhatItDoes";
import MeetTheGuy from "@/components/MeetTheGuy";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TickerBand />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <hr className="section-divider" />
      <WhatItDoes />
      <Marquee />
      <section id="about">
        <MeetTheGuy />
      </section>
      <hr className="section-divider" />
      <section id="pricing">
        <Pricing />
      </section>
      <hr className="section-divider" />
      <Testimonials />
      <hr className="section-divider" />
      <section id="faq">
        <FAQ />
      </section>
      <FinalCTA />
      <Footer />
    </main>
  );
}
