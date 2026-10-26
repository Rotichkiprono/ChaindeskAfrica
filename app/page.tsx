import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-8.5rem)] px-6 py-32 sm:py-48 lg:py-56 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
      {/* Subtle, static isometric grid */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)] pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="isometric-grid"
            width="60"
            height="103.923"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0 L60 51.9615 L30 103.923 L0 51.9615 Z M0 0 L30 51.9615 L0 103.923 M60 0 L30 51.9615 L60 103.923 M0 51.9615 L60 51.9615"
              fill="none"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric-grid)" />
      </svg>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Enterprise Web3 &amp; DLT Consultancy
        </h1>

        <p className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          We architect and deploy scalable blockchain infrastructure, tokenization systems, and smart contracts for institutional clients.
        </p>

        <div className="mt-10 sm:mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
