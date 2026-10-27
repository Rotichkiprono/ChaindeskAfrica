import { Cpu, Landmark, ShieldCheck, Workflow, CheckCircle2 } from "lucide-react";

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
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-24 sm:space-y-32">
        {/* Page Header */}
        <div className="border-b border-slate-200/80 pb-10">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Advisory &amp; Engineering
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Services &amp; Capabilities
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
            Enterprise distributed ledger advisory, systems architecture, and production deployments.
          </p>
        </div>

        {/* Section 1: Core Foundation */}
        <section aria-labelledby="foundation-heading">
          <h2 id="foundation-heading" className="sr-only">
            Core Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 border border-slate-200/80 bg-white/70 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Mission
              </span>
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
                To build secure, scalable, and transparent digital infrastructure for African enterprises.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Vision
              </span>
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
                A frictionless digital economy powered by robust decentralized ledgers.
              </p>
            </div>
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
                <div
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
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Portfolio Showcase (Meatsoko) */}
        <section aria-labelledby="case-study-heading">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Portfolio Showcase
            </span>
            <h2 id="case-study-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Meatsoko Tokenization Project
            </h2>
          </div>

          {/* Asymmetrical Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Side: Text Description & Scope */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-full">
                <span>Hedera Network</span>
                <span>•</span>
                <span>ERC-3643 Standard</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Institutional-grade security tokenization for African enterprise
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                Implementation of an ERC-3643 equity tokenization standard on the Hedera network,
                featuring automated corporate actions and seamless mobile app integration.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-slate-900 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span>On-chain accredited investor identity gating &amp; KYC verification</span>
                </div>
                <div className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-slate-900 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span>Automated dividend distributions routed directly to mobile smart wallets</span>
                </div>
                <div className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-slate-900 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span>Transparent consensus timestamps via Hedera Consensus Service</span>
                </div>
              </div>
            </div>

            {/* Right Side: Mockup Container with Two Overlapping Silhouette Frames */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-tr from-slate-100 to-blue-50/30 border border-slate-200/60 overflow-hidden flex items-center justify-center min-h-[500px]">
                {/* Background Phone Silhouette (Offset & Rotated) */}
                <div className="w-52 sm:w-60 aspect-[9/16] rounded-[2.5rem] p-3 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg transform -rotate-6 translate-x-6 sm:translate-x-8 translate-y-6 sm:translate-y-8 flex flex-col justify-between transition-transform duration-300 hover:-rotate-3">
                  {/* Phone Speaker Pill */}
                  <div className="mx-auto h-1.5 w-14 bg-slate-300 rounded-full mb-3" />

                  {/* Drop-in Screen Placeholder */}
                  <div className="flex-1 rounded-2xl bg-slate-50 border border-slate-200/70 p-4 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 text-[10px] text-slate-500 font-mono">
                        <span>HEDERA // CAP TABLE</span>
                        <span>0.0.482910</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-16 bg-slate-200 rounded" />
                        <div className="h-6 w-32 bg-slate-300 rounded" />
                        <div className="h-10 w-full bg-white border border-slate-200 rounded-lg p-2 flex items-center justify-between">
                          <div className="h-3 w-20 bg-slate-200 rounded" />
                          <div className="h-3 w-8 bg-slate-300 rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] text-center text-slate-400 font-mono">
                      [ Meatsoko App Asset Screen ]
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="mx-auto h-1 w-20 bg-slate-300 rounded-full mt-3" />
                </div>

                {/* Foreground Phone Silhouette (Elevated & Overlapping) */}
                <div className="relative z-10 w-52 sm:w-60 aspect-[9/16] rounded-[2.5rem] p-3 bg-white border border-slate-200/90 shadow-2xl shadow-slate-400/25 transform rotate-3 -translate-x-6 sm:-translate-x-8 -translate-y-4 sm:-translate-y-6 flex flex-col justify-between transition-transform duration-300 hover:rotate-1">
                  {/* Phone Speaker Pill */}
                  <div className="mx-auto h-1.5 w-14 bg-slate-300 rounded-full mb-3" />

                  {/* Drop-in Screen Placeholder */}
                  <div className="flex-1 rounded-2xl bg-white border border-slate-200 p-4 flex flex-col justify-between shadow-inner overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-[11px] font-bold text-slate-900 tracking-tight">
                          MEATSOKO
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded">
                          ERC-3643
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                          <span className="text-[9px] uppercase tracking-wider text-slate-500 block">
                            Tokenized Cap Table
                          </span>
                          <span className="text-base font-bold text-slate-900 block mt-0.5">
                            1,250,000 MTSK
                          </span>
                          <span className="text-[10px] text-slate-500">
                            Series A Preferred Shares
                          </span>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-slate-500 block">
                              Automated Yield
                            </span>
                            <span className="text-xs font-semibold text-slate-900">
                              Disbursed on Hedera
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-700 font-medium">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-center text-slate-400 font-mono pt-2">
                      [ Meatsoko App Wallet Screen ]
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="mx-auto h-1 w-20 bg-slate-300 rounded-full mt-3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
