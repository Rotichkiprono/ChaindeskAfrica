import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-28 sm:py-36 lg:py-44 overflow-hidden text-center">
        {/* Minimal High-End Web3 Network Mesh SVG */}
        <svg
          className="absolute inset-0 h-full w-full stroke-slate-200/70 [mask-image:radial-gradient(ellipse_at_center,white_35%,transparent_80%)] pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="web3-network-mesh"
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
              {/* Network Node Vertices */}
              <circle cx="40" cy="40" r="2" className="fill-slate-300" />
              <circle cx="0" cy="0" r="1.5" className="fill-slate-300" />
              <circle cx="80" cy="0" r="1.5" className="fill-slate-300" />
              <circle cx="0" cy="80" r="1.5" className="fill-slate-300" />
              <circle cx="80" cy="80" r="1.5" className="fill-slate-300" />
              <circle cx="40" cy="0" r="1.5" className="fill-slate-300" />
              <circle cx="40" cy="80" r="1.5" className="fill-slate-300" />
              <circle cx="0" cy="40" r="1.5" className="fill-slate-300" />
              <circle cx="80" cy="40" r="1.5" className="fill-slate-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#web3-network-mesh)" />
        </svg>

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-slate-900 leading-[1.15]">
            Enterprise Web3 &amp; DLT Consultancy
          </h1>

          <p className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Architecting scalable blockchain infrastructure, tokenization systems, and smart contracts for institutional clients.
          </p>

          <div className="mt-10 sm:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300"
            >
              Initiate a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Advantage Section */}
      <section className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
              Strategic Value
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The Chaindesk Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Point 1: Institutional Security */}
            <div className="p-8 border border-slate-200/80 bg-slate-50/60 transition-colors hover:border-slate-300">
              <span className="text-xs font-mono text-slate-400 block mb-3">01 // ADVISORY</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Institutional Security
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Formal protocol verification, exhaustive multi-stage code auditing, and military-grade cryptographic key management.
              </p>
            </div>

            {/* Point 2: Seamless Web3 Integration */}
            <div className="p-8 border border-slate-200/80 bg-slate-50/60 transition-colors hover:border-slate-300">
              <span className="text-xs font-mono text-slate-400 block mb-3">02 // INTEGRATION</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Seamless Web3 Integration
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Turnkey interoperability between legacy core enterprise databases, ERP software, and decentralized ledgers.
              </p>
            </div>

            {/* Point 3: Scalable Architecture */}
            <div className="p-8 border border-slate-200/80 bg-slate-50/60 transition-colors hover:border-slate-300">
              <span className="text-xs font-mono text-slate-400 block mb-3">03 // INFRASTRUCTURE</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Scalable Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modular Layer-2 networks and high-throughput consensus engines built to sustain enterprise transaction volumes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
