# yehudacohen.ai — Full Redesign Prompt

## REFERENCE SITE
affinity.studio — study it. That's the vibe.

## DESIGN SYSTEM

**Background:** `#0a0a0a` near-black. This is a DARK site now.

**Colors:**
- Background: `#0a0a0a`
- Primary text: `#f5f5f5` (off-white)
- Accent 1 (CTA): `#c8f135` — neon lime green
- Accent 2: `#5ee7c8` — teal/mint
- Accent 3: `#ff6b6b` — coral/red
- Accent 4: `#c084fc` — purple
- Card backgrounds: each section gets its own accent color as bg

**Typography:**
- Headlines: `"Playfair Display"` or `"DM Serif Display"` from Google Fonts — big, bold, editorial serif. Import it.
- Body: `"Inter"` — clean sans
- Headline size: HUGE. 80-120px desktop. Full viewport width text where possible.
- Use `font-style: italic` on some headline words for drama

**Buttons:**
- Primary CTA: `bg-[#c8f135] text-black` — neon green, black text, bold
- Rounded pill shape: `rounded-full px-8 py-4`
- Hover: scale up slightly, brightness increase

---

## SECTIONS

### 1. NAV
- Logo: `yehudacohen.ai` — white, small, monospace font left side
- Links: How it works · About · Pricing · FAQ — right side, small white text
- CTA: "Book a call" — neon green pill button
- Transparent bg, blur on scroll
- Mobile: hamburger

### 2. HERO
Full viewport height. Dark bg.

```
[small label, uppercase, letter-spaced, teal color]
AI SETUP. DONE FOR YOU.

[massive headline, serif, white, 2-3 lines]
Oh yeah.
Your own personal
AI assistant.

[subtext, small, gray]
Set up by a guy who got way too deep into this
and now does it for other people.

[two buttons side by side]
[neon green] Book a free call →    [outline white] See how it works
```

Animated background: subtle dark radial gradient that slowly shifts — deep purple/teal hues. NO stock photos.
Hero text animates in: each line slides up + fades in, staggered 0.15s

### 3. TICKER BAND
Full width solid band — `#c8f135` neon green background, black text
Infinite scrolling marquee:
`OH YEAH • YOUR AI ASSISTANT • DONE FOR YOU • ONE SESSION • ZERO BS • OH YEAH • YOUR AI ASSISTANT • DONE FOR YOU • ONE SESSION • ZERO BS •`
Bold uppercase, fast scroll

### 4. HOW IT WORKS
Dark bg section. 3 large cards side by side (stack mobile).
Each card: colored bg (teal, coral, purple), dark text, big number, description.

Card 1 — bg `#5ee7c8` (teal), text black:
**01**
We Talk
"20 minutes. You complain about your inbox. I listen."

Card 2 — bg `#ff6b6b` (coral), text black:
**02**  
I Build
"Custom AI assistant. Built for you specifically. Not a template."

Card 3 — bg `#c084fc` (purple), text black:
**03**
You Use It
"Same day. No learning curve. Your life is slightly better forever."

*footnote in small italic gray: Results may vary. Side effects include suspicious productivity gains and coworker jealousy.*

Cards animate in on scroll with stagger.

### 5. WHAT IT DOES
Split layout: left = big bold serif headline, right = animated checklist

LEFT (serif, huge):
"The employee you always wanted but could never afford."

RIGHT (staggered list, each item slides in):
✓ Handles your messages
✓ Remembers everything you forget  
✓ Drafts emails in your voice (not robot voice)
✓ Tracks your clients, tasks, notes
✓ Available 24/7 without complaining

Checkmarks in neon green.

### 6. MEET THE GUY
Full-width dark section with a colored left border accent (neon green).

Big serif italic headline:
*"I don't fully know what I'm doing, but I'm doing it confidently and it keeps working."*

Below: name badge
**Yehuda Cohen** · AI Setup Person · Certified Since 2026
[WARNING: PROFESSIONAL (sort of)] — small pill badge, coral bg

Bio text in gray:
"iOS developer by day. AI setup guy by... also day, apparently.
My day job thinks I'm focused on mobile apps. My therapist doesn't know about any of this."

TIMELINE — vertical, dark, neon green dots:
• 2024 — Discovered AI assistants. Used one to avoid emails. Worked too well.
• 2025 — First client paid $250. Should have charged more.
• 2026 — Built this website. Convinced myself I'm a legitimate business.

### 7. PRICING
3 cards. Dark bg with subtle border.

Card 1 — border `#5ee7c8`:
**Starter**
$750
"You get a fully working AI assistant. No upsells. No 'premium tier unlocks the good stuff.'"
- Setup + 1 week of support
[Book this →] outline button

Card 2 — bg `#c8f135` (neon green), text BLACK — elevated, most popular:
**Pro** ← [MOST POPULAR pill badge]
$1,500
"Everything + connected to your actual tools. Calendar. Email. WhatsApp."
- Minor existential crisis about wasted time included
[Book this →] black button

Card 3 — border `#c084fc`:
**Custom**
Let's talk
"You have a weird idea. I probably love it."
- My personal cell number (bad idea)
[Let's talk →] outline button

### 8. TESTIMONIALS
3 cards with subtle dark bg (`#161616`), thin border.
Avatar: circle with initials, colored bg.

"I don't know what he did but my inbox no longer haunts me."
— Client #1 *(soon™)*

"10/10. Changed my life. Got a promotion. Bought a boat."
— Completely fabricated testimonial*

"Wait, this is actually real?"  
— You, right now

*small italic disclaimer at bottom: *Testimonials may be slightly embellished. Or entirely made up. You'll never know.

### 9. FAQ
Dark accordion. Clean. Neon green + icon on open state.
AnimatePresence for smooth expand/collapse.

Q: Do I need to know anything about AI?
A: Nope. That's literally why I exist.

Q: How long does it take?
A: One session. A few hours. Same day.

Q: What if something breaks after?
A: I've got you for a week. After that you're on your own — honestly it's not that complicated.

Q: Are you actually good at this?
A: My own AI assistant wrote parts of this website. Make of that what you will.

Q: Can you set it up remotely?
A: Yes. Zoom + screen share. You make coffee, I set it up.

### 10. FINAL CTA
Full width. Gradient bg: dark purple to near-black.
Center aligned.

Big serif italic headline:
*"Ready?"*

Sub:
"20-minute call. Free. No weirdness.
If it makes sense, we do the thing. If not, we had a nice chat."

Big neon green pill button: **Book a free call →**

Small text below: *— Yehuda (The guy)*

### 11. FOOTER
Minimal. One line. Dark bg.
`yehudacohen.ai · hello@yehudacohen.ai · © 2026`

---

## TECHNICAL

- **Next.js 14 App Router**
- **Tailwind CSS** (extend config with custom colors above)
- **Framer Motion** — useInView for scroll triggers, AnimatePresence for FAQ
- **Google Fonts:** DM Serif Display + Inter — load in layout.tsx
- **NO external UI libraries** — handcraft everything
- **Mobile responsive** — hamburger nav, stacked cards
- **Performance** — no heavy deps, lazy load
- **CTA links:** `https://cal.com/yehudacohen` placeholder

## VIBE CHECK

Dark, editorial, bold. Each section should feel like its own world.
Big type. Punchy copy. Color pops against the dark.
Think: magazine spread, not SaaS landing page.

If it looks generic → start over.
If it makes someone stop scrolling → ship it.

---

After building:
1. npm install && npm run build — must be clean
2. git add -A && git commit -m "redesign: dark editorial rebrand" && git push
3. npx vercel --token $VERCEL_TOKEN --yes --prod
4. When done: openclaw system event --text "Done: yehudacohen.ai redesign is live - URL: [vercel url]" --mode now
