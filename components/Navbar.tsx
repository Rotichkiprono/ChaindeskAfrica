"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Sleek Typography Logo with Custom Geometric Mark */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center tracking-tight transition-opacity hover:opacity-85"
            aria-label="Chaindesk Africa Home"
          >
            <Image
              src="/chaindesk_icon.png"
              alt="Chaindesk Mark"
              width={24}
              height={24}
              className="mr-2.5 h-6 w-auto object-contain"
              priority
            />
            <span className="font-bold text-slate-900 text-base sm:text-lg">
              CHAINDESK
            </span>
            <span className="font-light text-slate-500 text-base sm:text-lg ml-1.5 tracking-wider">
              AFRICA
            </span>
          </Link>
        </div>

        {/* Desktop View (md:flex): Navigation Links with modern underline scale effect */}
        <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
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

        {/* Mobile View (md:hidden): Hamburger / Close Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 stroke-[1.75]" />
            ) : (
              <Menu className="h-6 w-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-slate-900/20 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Dropdown Menu Container */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xl transition-all duration-300 ease-out transform ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-500 hover:text-slate-900 flex items-center space-x-1"
            >
              <span>Close</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-semibold transition-all ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-800 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-4 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-sm"
            >
              Initiate a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
