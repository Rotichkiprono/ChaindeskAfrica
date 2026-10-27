import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 bg-transparent">
      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="relative flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 md:px-8 lg:px-16 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden text-center bg-transparent"
      >
        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-slate-900 leading-[1.15]"
          >
            Enterprise Web3 &amp; DLT Consultancy
          </h1>

          <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Architecting scalable blockchain infrastructure, tokenization systems, and smart contracts for institutional clients.
          </p>

          <div className="mt-8 md:mt-12 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300"
            >
              Initiate a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Advantage Section */}
      <section
        aria-labelledby="advantage-heading"
        className="border-t border-slate-200/80 bg-white/70 backdrop-blur-sm py-12 md:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
              Strategic Value
            </p>
            <h2
              id="advantage-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
            >
              The Chaindesk Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Point 1: Institutional Security */}
            <article className="p-6 md:p-8 border border-slate-200/80 bg-slate-50/60 transition-colors hover:border-slate-300 rounded-2xl md:rounded-none">
              <span className="text-xs font-mono text-slate-400 block mb-3">01 // ADVISORY</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Institutional Security
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Formal protocol verification, exhaustive multi-stage code auditing, and military-grade cryptographic key management.
              </p>
            </article>

            {/* Point 2: Seamless Web3 Integration */}
            <article className="p-6 md:p-8 border border-slate-200/80 bg-slate-50/60 transition-colors hover:border-slate-300 rounded-2xl md:rounded-none">
              <span className="text-xs font-mono text-slate-400 block mb-3">02 // INTEGRATION</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Seamless Web3 Integration
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Turnkey interoperability between legacy core enterprise databases, ERP software, and decentralized ledgers.
              </p>
            </article>

            {/* Point 3: Scalable Architecture */}
            <article className="p-6 md:p-8 border border-slate-200/80 bg-slate-50/60 transition-colors hover:border-slate-300 rounded-2xl md:rounded-none">
              <span className="text-xs font-mono text-slate-400 block mb-3">03 // INFRASTRUCTURE</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Scalable Architecture
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Modular Layer-2 networks and high-throughput consensus engines built to sustain enterprise transaction volumes.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
