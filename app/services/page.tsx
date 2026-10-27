import type { Metadata } from "next";
import { Cpu, Landmark, ShieldCheck, Workflow, CheckCircle2 } from "lucide-react";
import MeatsokoCarousel from "@/components/MeatsokoCarousel";

export const metadata: Metadata = {
  title: "Web3 Services & DLT Architecture | Chaindesk Africa",
  description:
    "Enterprise blockchain integration, ERC-3643 tokenization, and smart contract auditing. View our Meatsoko Hedera integration.",
  openGraph: {
    title: "Web3 Services & DLT Architecture | Chaindesk Africa",
    description:
      "Enterprise blockchain integration, ERC-3643 tokenization, and smart contract auditing. View our Meatsoko Hedera integration.",
    url: "/services",
  },
  twitter: {
    title: "Web3 Services & DLT Architecture | Chaindesk Africa",
    description:
      "Enterprise blockchain integration, ERC-3643 tokenization, and smart contract auditing. View our Meatsoko Hedera integration.",
  },
};

export default function ServicesPage() {
  const bentoServices = [
    {
      title: "Custom DLT Architecture",
      icon: Cpu,
      description:
        "End-to-end engineering of private, consortium, and public blockchain infrastructures tailored to enterprise throughput, privacy, and compliance requirements.",
      tags: ["Hyperledger", "Polygon CDK", "Substrate", "Zero-Knowledge"],
    },
    {
      title: "Asset Tokenization",
      icon: Landmark,
      description:
        "Technical structuring and fractionalization workflows for commodities, real estate, carbon credits, and fixed-income debt securities in African markets.",
      tags: ["ERC-3643", "Compliant Security Tokens", "RWA Systems", "Automated Yield"],
    },
    {
      title: "Smart Contract Auditing",
      icon: ShieldCheck,
      description:
        "Comprehensive code audits, formal verification, and automated static analysis to safeguard protocol logic and high-value digital asset reserves.",
      tags: ["Formal Verification", "EVM & Rust Audits", "Logic Security", "Remediation"],
    },
    {
      title: "Web3 System Integration",
      icon: Workflow,
      description:
        "Frictionless bridging between core legacy enterprise systems, ERP databases (SAP, Oracle), institutional MPC custody, and decentralized networks.",
      tags: ["ERP Connectors", "MPC Custody APIs", "Node Infrastructure", "Event Pipelines"],
    },
  ];

  return (
    <div className="py-12 md:py-20 lg:py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 space-y-16 md:space-y-24 lg:space-y-32">
        {/* Page Header */}
        <header className="border-b border-slate-200/80 pb-10">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Advisory &amp; Engineering
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Services &amp; Capabilities
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
            Enterprise distributed ledger advisory, systems architecture, and production deployments.
          </p>
        </header>

        {/* Section 1: Core Foundation */}
        <section aria-labelledby="foundation-heading">
          <h2 id="foundation-heading" className="sr-only">
            Core Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 border border-slate-200/80 bg-white/70 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <article className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Mission
              </h3>
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
                To build secure, scalable, and transparent digital infrastructure for African enterprises.
              </p>
            </article>
            <article className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Vision
              </h3>
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
                A frictionless digital economy powered by robust decentralized ledgers.
              </p>
            </article>
          </div>
        </section>

        {/* Section 2: Bento Box Capabilities */}
        <section aria-labelledby="capabilities-heading">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">
              Core Offerings
            </p>
            <h2 id="capabilities-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bentoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="bg-white border border-slate-100 rounded-2xl p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6">
                      <Icon className="h-6 w-6 stroke-[1.75]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {service.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-xs font-medium px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Section 3: Portfolio Showcase (Meatsoko Tokenization Project) */}
        <section aria-labelledby="case-study-heading">
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Portfolio Showcase
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-800">
                Hedera Network
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-800">
                ERC-3643 Standard
              </span>
            </div>

            <h2 id="case-study-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Meatsoko Tokenization Project
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-6">
              Implementation of an ERC-3643 equity tokenization standard on the Hedera network,
              featuring automated corporate actions and seamless mobile app integration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
              <div className="flex items-start text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-slate-900 mr-2 flex-shrink-0 mt-0.5" />
                <span>On-chain accredited KYC identity gating</span>
              </div>
              <div className="flex items-start text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-slate-900 mr-2 flex-shrink-0 mt-0.5" />
                <span>M-Pesa fiat on-ramp to smart token balances</span>
              </div>
              <div className="flex items-start text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-slate-900 mr-2 flex-shrink-0 mt-0.5" />
                <span>Automated dividend disbursements on Hedera</span>
              </div>
            </div>
          </div>

          {/* Interactive Mobile Phone Carousel */}
          <div className="pt-2">
            <MeatsokoCarousel />
          </div>
        </section>
      </div>
    </div>
  );
}
