import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chaindesk.africa"),
  title: "CHAINDESK AFRICA | Enterprise Web3 & DLT Consultancy",
  description:
    "To build secure, scalable, and transparent digital infrastructure for African enterprises.",
  icons: {
    icon: [
      { url: "/chaindesk_icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/chaindesk_icon.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/chaindesk_icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "CHAINDESK AFRICA | Enterprise Web3 & DLT Consultancy",
    description:
      "To build secure, scalable, and transparent digital infrastructure for African enterprises.",
    url: "https://chaindesk.africa",
    siteName: "Chaindesk Africa",
    images: [
      {
        url: "/chaindesk_preview.jpeg",
        width: 1024,
        height: 571,
        alt: "CHAINDESK AFRICA - Enterprise Web3 & DLT Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHAINDESK AFRICA | Enterprise Web3 & DLT Consultancy",
    description:
      "To build secure, scalable, and transparent digital infrastructure for African enterprises.",
    images: ["/chaindesk_preview.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased relative`}>
        {/* Global Minimalist Web3 Network Background (Light-Gray/Blue Intersecting Mesh) */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <svg className="absolute inset-0 h-full w-full stroke-slate-200/70 [mask-image:radial-gradient(ellipse_at_center,white_35%,transparent_85%)]">
            <defs>
              <pattern
                id="global-web3-network-mesh"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                {/* Interconnected Network Grid Lines */}
                <path
                  d="M0 40 L40 0 L80 40 L40 80 Z M0 0 L80 80 M80 0 L0 80 M40 0 L40 80 M0 40 L80 40"
                  fill="none"
                  strokeWidth="0.65"
                  className="stroke-slate-200"
                />
                {/* Network Node Vertices (Light Gray & Subtle Cyan/Blue Accents) */}
                <circle cx="40" cy="40" r="2.2" className="fill-blue-400/60 stroke-blue-200/50" strokeWidth="0.75" />
                <circle cx="0" cy="0" r="1.5" className="fill-slate-300" />
                <circle cx="80" cy="0" r="1.5" className="fill-slate-300" />
                <circle cx="0" cy="80" r="1.5" className="fill-slate-300" />
                <circle cx="80" cy="80" r="1.5" className="fill-slate-300" />
                <circle cx="40" cy="0" r="1.75" className="fill-blue-400/40" />
                <circle cx="40" cy="80" r="1.75" className="fill-blue-400/40" />
                <circle cx="0" cy="40" r="1.75" className="fill-blue-400/40" />
                <circle cx="80" cy="40" r="1.75" className="fill-blue-400/40" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#global-web3-network-mesh)" />
          </svg>
        </div>

        {/* Fully Mobile-Responsive Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col relative z-10 bg-transparent">
          {children}
        </main>

        {/* Minimal Footer */}
        <footer className="relative z-10 border-t border-slate-200/80 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Chaindesk Africa. All rights reserved.</p>
            <p>Enterprise Web3 &amp; Distributed Ledger Technology Advisory</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
