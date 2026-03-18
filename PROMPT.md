# Claude Code Prompt — yehudacohen.ai Website

Build a single-page personal brand website for **yehudacohen.ai** using **Next.js 14 (App Router) + Tailwind CSS + Framer Motion**.

---

## DESIGN AESTHETIC

**Vibe:** Dan Koe meets Sam Ovens. Light, premium, kinetic. Every section feels alive.

**Color palette:**
- Background: pure white `#ffffff` or near-white `#fafafa`
- Primary text: near-black `#0a0a0a`
- Accent: one single bold accent — either electric blue `#2563eb` or warm amber `#f59e0b` (pick whichever feels more premium)
- Subtle grays for secondary text: `#6b7280`
- Cards/surfaces: `#f5f5f5` or very subtle `#f9fafb`

**Typography:**
- Headings: `Inter` or `Geist` — bold, tight letter-spacing, large
- Body: clean, readable, generous line-height
- Use size contrast aggressively — huge headlines, small body text

**Motion principles (Framer Motion):**
- Sections fade + slide up on scroll into view (`useInView` + `motion.div`)
- Hero text animates in word by word or line by line on load
- Stagger children animations (each list item enters with 0.1s delay)
- Hover states on cards: subtle lift (`y: -4`) + shadow increase
- CTA button: gentle pulse animation on idle, scale on hover
- Cursor: consider a custom subtle cursor glow on desktop
- NO heavy animations that slow load. Everything should feel effortless.

**Layout:**
- Full-width sections with max-w-5xl centered content
- Generous whitespace — breathe, don't crowd
- Mobile-first, fully responsive
- Sticky nav with blur backdrop on scroll
- Smooth scroll between sections

---

## SECTIONS (in order)

### 1. NAV
- Logo: `yehudacohen.ai` (text-based, monospace or clean sans)
- Links: How it works, About, Pricing, FAQ
- CTA button: "Book a call" (accent color)
- Sticky, blurs on scroll

### 2. HERO
```
Oh yeah. Your own personal AI assistant.
[smaller] Set up by a guy who got way too deep into this and now does it for other people.

The kind that knows your name, remembers everything, never takes a sick day, and doesn't ask for a raise.

I'm Yehuda. I set it up for you.
One session. You go make coffee. It goes to work.

[CTA: Book a free call →]
[subtext: It's free. I'm not even going to pitch you. Much.]
```
- Hero headline should be massive — 72-96px on desktop
- Subtle animated background: very faint moving gradient or floating orbs (CSS only, no heavy libs)
- "Oh yeah." should feel like a gut punch — big, bold, slightly unexpected

### 3. AS SEEN IN (ticker/marquee)
Scrolling horizontal ticker — slow, infinite loop:
`Your competitor's Slack channel (probably)` • `Your industry's WhatsApp group (soon)` • `TechCrunch (in our dreams)` • `The Verge (maybe one day)` • `Your boss's nightmares` • `Product Hunt (soon™)`

Style: grayscale logo-bar aesthetic but text-only, premium feel

### 4. HOW IT WORKS
```
It's complicated technology made simple (for you).

1. We talk for 20 minutes. You complain about your inbox. I listen.
2. I build your AI assistant. Custom. Just for you.
3. You use it. Same day. Your life is slightly better forever.

[footnote] Results may vary. Side effects include: suspicious productivity gains, coworker jealousy, and an inexplicable urge to tell everyone you have an AI assistant.
```
- 3 numbered steps as cards, staggered entrance animation
- Each step has a large number (1, 2, 3) in light accent color behind the text

### 5. WHAT IT DOES
```
Your AI assistant will:
✓ Handle your messages
✓ Remember everything you forget
✓ Draft emails in your voice (not robot voice)
✓ Keep track of your clients, tasks, and notes
✓ Be available 24/7 without complaining about it

Basically? It's the employee you always wanted but could never afford.
```
- Two-column layout on desktop: left = headline + description, right = animated checklist items entering one by one
- Each checkmark item slides in with stagger

### 6. MEET THE GUY
```
Yehuda Cohen • AI Setup Person • Certified Since 2026
[badge] WARNING: PROFESSIONAL (sort of)

Hi. I'm Yehuda.

iOS developer by day. AI setup guy by... also day, apparently.

Somewhere between watching too many YouTube videos and avoiding real work, I figured out how to set up AI assistants that actually do stuff. My own AI assistant is basically running my life. Now I do it for other people.

My day job thinks I'm focused on mobile apps.
My therapist doesn't know about any of this.

"I don't fully know what I'm doing, but I'm doing it confidently and it keeps working."
```

**The Journey** (timeline component):
- 2024: Discovered AI assistants. Used one exclusively to avoid answering emails. It worked too well.
- 2025: Started setting them up for people. First client paid me $250. I should have charged more.
- 2026: Built this website. Convinced myself I'm a legitimate business. Still have a day job. Working on it.

Timeline: vertical line with dots, each entry animates in on scroll

### 7. PRICING
3 cards side by side (stack on mobile):

**Starter — $750**
You get a fully working AI assistant.
That's it. No upsells. No "premium tier unlocks the good stuff."
- Setup + 1 week of "wait why isn't it doing the thing" support

**Pro — $1,500** [MOST POPULAR badge]
Everything above + connected to your actual tools.
Calendar. Email. WhatsApp. The works.
- Everything above + minor existential crisis about how much time you've been wasting

**Custom — let's talk**
You have a weird idea. I probably love it.
- My personal cell number (bad idea)

Cards hover: lift effect, Pro card slightly elevated by default with accent border

### 8. TESTIMONIALS
```
"I don't know what he did but my inbox no longer haunts me."
— Satisfied client (name withheld because I haven't gotten one yet, but soon™)

"10/10 would recommend. Changed my life. Got a promotion. Bought a boat."
— Completely fabricated testimonial

"Wait, this is actually real?"
— You, right now
```
- 3 cards in a row, grayscale avatars (placeholder circles with initials)
- Subtle card hover animation

### 9. FAQ
Accordion component, smooth open/close animation:

- Do I need to know anything about AI? → Nope. That's literally why I exist.
- How long does it take? → One session. A few hours. Same day.
- What if something breaks after? → I've got you for a week. After that you're on your own — but honestly it's not that complicated.
- Are you actually good at this? → I mean... yes? My own AI assistant wrote parts of this website. Make of that what you will.
- Can you set it up remotely? → Yes. Zoom + screen share. You make coffee, I set it up.

### 10. FINAL CTA
Large, full-width section:
```
Ready?

20-minute call. Free. No weirdness.
If it makes sense, we do the thing. If not, we had a nice chat.

[Book a free call →]

— Yehuda
(The guy)
```
- Bold, centered, generous padding
- CTA button: large, accent color, subtle pulse animation

### 11. FOOTER
- `yehudacohen.ai`
- `hello@yehudacohen.ai`
- Minimal. One line.

---

## TECHNICAL REQUIREMENTS

- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (useInView for scroll triggers, AnimatePresence for accordion)
- **Fonts:** Google Fonts — Inter or Geist (import in layout)
- **No external UI libraries** (no shadcn, no chakra) — handcraft everything
- **Performance:** no heavy dependencies, lazy load images, optimize bundle
- **Booking link:** Use `https://cal.com/yehudacohen` as placeholder for all CTA buttons (can be replaced later)
- **Mobile:** fully responsive, hamburger menu on mobile nav
- **SEO:** proper meta tags, og:image placeholder, title = "Yehuda Cohen — AI Assistant Setup"

---

## VIBE CHECK

Think: clean white space, large confident typography, subtle kinetic energy throughout. Nothing should feel static. But nothing should feel overdone either. Every animation serves the content — it doesn't distract from it.

If it looks like a generic AI website, start over.
If it looks like something Dan Koe would nod at, ship it.

---

Build the complete project, ready to `npm run dev` locally and deploy to Vercel.
