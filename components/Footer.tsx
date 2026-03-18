"use client";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted">
        <span className="font-mono">yehudacohen.ai</span>
        <a
          href="mailto:hello@yehudacohen.ai"
          className="hover:text-[#0a0a0a] transition-colors"
        >
          hello@yehudacohen.ai
        </a>
      </div>
    </footer>
  );
}
