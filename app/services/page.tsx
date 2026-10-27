import { Smartphone, CheckCircle, Shield, ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        {/* Page Title */}
        <div className="border-b border-slate-200 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Services &amp; Capabilities
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Enterprise distributed ledger advisory, systems architecture, and production deployments.
          </p>
        </div>

        {/* Section 1: Core Foundation */}
        <section aria-labelledby="foundation-heading">
          <h2 id="foundation-heading" className="sr-only">
            Core Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border border-slate-200 bg-slate-50/50">
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

        {/* Section 2: Capabilities */}
        <section aria-labelledby="capabilities-heading" className="border-b border-slate-200 pb-16">
          <h2 id="capabilities-heading" className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
            Core Services
          </h2>
          <ul className="space-y-4 text-base text-slate-700">
            <li className="flex items-center space-x-3">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900 flex-shrink-0" />
              <span>Custom DLT Architecture</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900 flex-shrink-0" />
              <span>Asset Tokenization</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900 flex-shrink-0" />
              <span>Smart Contract Auditing</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900 flex-shrink-0" />
              <span>Web3 System Integration</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Portfolio (Meatsoko) */}
        <section aria-labelledby="case-study-heading">
          <div className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Portfolio
            </div>
            <h2 id="case-study-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Case Study: Meatsoko Technologies
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
              Implementation of an ERC-3643 equity tokenization standard on the Hedera network,
              featuring automated corporate actions and seamless mobile app integration.
            </p>
          </div>

          {/* Mobile Screen Placeholders */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 pt-4">
            {/* Screen Placeholder 1: Tokenized Equity Overview */}
            <div className="w-64 aspect-[9/16] rounded-2xl border border-slate-200 bg-white shadow-md p-4 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Device Speaker Notch */}
                <div className="flex justify-center mb-4">
                  <div className="h-1 w-12 bg-slate-200 rounded-full" />
                </div>

                {/* App Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[11px] font-bold tracking-tight text-slate-900">
                    MEATSOKO
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                    Hedera
                  </span>
                </div>

                {/* Screen Content */}
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <span className="text-[10px] text-slate-500 block">Asset Standard</span>
                    <span className="text-xs font-semibold text-slate-900">ERC-3643 Permissioned</span>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <span className="text-[10px] text-slate-500 block">Tokenized Cap Table</span>
                    <span className="text-sm font-bold text-slate-900">1,250,000 MTSK</span>
                    <span className="text-[9px] text-slate-500 block mt-0.5">Series A Preferred Equity</span>
                  </div>

                  <div className="p-2.5 border border-slate-100 rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-3.5 w-3.5 text-slate-700" />
                      <span className="text-[10px] font-medium text-slate-800">Identity KYC</span>
                    </div>
                    <span className="text-[9px] text-slate-600 font-mono">Verified</span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Placeholder */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-slate-400">
                <div className="h-1.5 w-6 bg-slate-900 rounded-full" />
                <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
                <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
              </div>
            </div>

            {/* Screen Placeholder 2: Automated Corporate Actions */}
            <div className="w-64 aspect-[9/16] rounded-2xl border border-slate-200 bg-white shadow-md p-4 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Device Speaker Notch */}
                <div className="flex justify-center mb-4">
                  <div className="h-1 w-12 bg-slate-200 rounded-full" />
                </div>

                {/* App Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[11px] font-bold tracking-tight text-slate-900">
                    CORPORATE ACTIONS
                  </span>
                  <Smartphone className="h-3.5 w-3.5 text-slate-400" />
                </div>

                {/* Screen Content */}
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">Dividend Yield</span>
                      <ArrowUpRight className="h-3 w-3 text-slate-700" />
                    </div>
                    <span className="text-sm font-bold text-slate-900">Auto-Disbursed</span>
                    <span className="text-[9px] text-slate-500 block mt-0.5">Direct to Smart Wallet</span>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg space-y-1.5">
                    <span className="text-[10px] text-slate-500 block">Governance Ballot</span>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle className="h-3.5 w-3.5 text-slate-800" />
                      <span className="text-[10px] font-medium text-slate-800">Q3 Resolution Passed</span>
                    </div>
                  </div>

                  <div className="p-2.5 border border-slate-100 rounded-lg">
                    <span className="text-[10px] text-slate-500 block">Consensus Timestamp</span>
                    <span className="text-[9px] font-mono text-slate-700 block truncate">
                      hedera::0.0.482910@169837
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Placeholder */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-slate-400">
                <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
                <div className="h-1.5 w-6 bg-slate-900 rounded-full" />
                <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
