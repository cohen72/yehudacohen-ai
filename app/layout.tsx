import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Yehuda Cohen — AI Assistant Setup",
  description:
    "Your own personal AI assistant. Set up by a guy who got way too deep into this and now does it for other people.",
  openGraph: {
    title: "Yehuda Cohen — AI Assistant Setup",
    description:
      "Your own personal AI assistant. One session. Same day. Your life is slightly better forever.",
    url: "https://yehudacohen.ai",
    siteName: "yehudacohen.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased bg-bg text-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
