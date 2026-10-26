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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-slate-900 antialiased`}>
        {/* Global Navbar */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors"
              >
                CHAINDESK AFRICA
              </Link>
            </div>
            <nav className="flex items-center space-x-6 sm:space-x-8 text-sm font-medium text-slate-600">
              <Link
                href="/"
                className="hover:text-slate-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-slate-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/team"
                className="hover:text-slate-900 transition-colors"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="hover:text-slate-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Chaindesk Africa. All rights reserved.</p>
            <p>Enterprise Web3 & Distributed Ledger Technology Advisory</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
