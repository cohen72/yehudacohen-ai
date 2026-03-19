const text =
  "DONE FOR YOU \u2022 ONE SESSION \u2022 ZERO BS \u2022 OH YEAH \u2022 ";

export default function Marquee() {
  return (
    <div className="py-6 overflow-hidden whitespace-nowrap border-y border-white/5">
      <div className="animate-marquee-slow inline-block">
        <span className="text-white/10 font-black uppercase text-[clamp(2rem,5vw,4rem)] tracking-[-0.03em]">
          {text}
          {text}
          {text}
          {text}
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
