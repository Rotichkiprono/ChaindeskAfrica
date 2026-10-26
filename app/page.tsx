import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Landmark, FileCode } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
              Enterprise Advisory & Engineering
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Institutional Web3 & Distributed Ledger Solutions for Africa.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Chaindesk Africa delivers institutional-grade consulting, smart contract architecture,
              and DLT implementation for enterprises, financial institutions, and public sector organizations.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Core Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Rigorous, production-ready engineering designed for compliant enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-slate-200 bg-white">
              <ShieldCheck className="h-6 w-6 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Smart Contract Security</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprehensive security audits, formal verification, and vulnerability assessments for EVM and Rust-based protocols.
              </p>
            </div>

            <div className="p-6 border border-slate-200 bg-white">
              <Cpu className="h-6 w-6 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Enterprise DLT Architecture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Design and deployment of permissioned ledgers, Layer-2 networks, and high-throughput transaction pipelines.
              </p>
            </div>

            <div className="p-6 border border-slate-200 bg-white">
              <Landmark className="h-6 w-6 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Asset Tokenization</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Compliant structuring and technical implementation for real-world asset (RWA) tokenization and digital securities.
              </p>
            </div>

            <div className="p-6 border border-slate-200 bg-white">
              <FileCode className="h-6 w-6 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Regulatory & Compliance Tech</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Integration of AML/KYC modules, on-chain reporting, and jurisdiction-compliant transaction monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Callout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 p-8 sm:p-12 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Accelerate your organization&apos;s digital ledger initiative
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Partner with seasoned engineers and advisors who understand the operational realities of African markets and global distributed systems.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Contact Our Advisors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
