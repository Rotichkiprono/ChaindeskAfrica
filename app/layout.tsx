import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chaindesk Africa | Enterprise Web3 & DLT Consultancy",
  description: "Enterprise Web3 and Distributed Ledger Technology advisory and consultancy.",
};

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}>
        {/* Floating Sticky Glassmorphism Header */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Left Side: Sleek Typography Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center tracking-tight transition-opacity hover:opacity-85"
                aria-label="Chaindesk Africa Home"
              >
                <span className="font-bold text-slate-900 text-base sm:text-lg">
                  CHAINDESK
                </span>
                <span className="font-light text-slate-500 text-base sm:text-lg ml-1.5 tracking-wider">
                  AFRICA
                </span>
              </Link>
            </div>

            {/* Right Side: Navigation Links with modern underline scale effect */}
            <nav className="flex items-center space-x-6 sm:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative py-1 text-sm font-medium text-slate-800 hover:text-slate-500 transition-colors duration-200"
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[1.5px] w-full bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left ease-out"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-slate-200/80 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Chaindesk Africa. All rights reserved.</p>
            <p>Enterprise Web3 &amp; Distributed Ledger Technology Advisory</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
