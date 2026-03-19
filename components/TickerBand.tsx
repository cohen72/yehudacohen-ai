"use client";

const text =
  "OH YEAH \u2022 YOUR AI ASSISTANT \u2022 DONE FOR YOU \u2022 ONE SESSION \u2022 ZERO BS \u2022 ";

export default function TickerBand() {
  return (
    <div className="bg-lime py-4 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="text-black font-bold uppercase text-sm tracking-widest">
          {text}
          {text}
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
