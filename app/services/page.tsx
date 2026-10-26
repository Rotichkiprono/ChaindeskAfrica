import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Enterprise DLT Architecture & Implementation",
      description:
        "End-to-end engineering of private, consortium, and public blockchain infrastructures tailored to enterprise throughput, privacy, and compliance requirements.",
      features: [
        "Private and consortium ledger deployment (Hyperledger, Substrate, Polygon CDK)",
        "Zero-knowledge proof integration for sensitive enterprise data",
        "Legacy enterprise systems and ERP integration (SAP, Oracle)",
        "High-performance cross-chain and cross-network bridges",
      ],
    },
    {
      title: "Smart Contract Audits & Security Verification",
      description:
        "Comprehensive code audits, formal verification, and automated static analysis to safeguard protocol logic and high-value digital asset reserves.",
      features: [
        "Static and dynamic vulnerability analysis (Slither, Mythril, Certora)",
        "Line-by-line manual logic verification and economic exploit simulations",
        "EVM, Solana/Rust, and Move ecosystem compatibility",
        "Detailed remediation roadmaps and executive disclosure reports",
      ],
    },
    {
      title: "Real-World Asset (RWA) Tokenization",
      description:
        "Technical structuring and fractionalization workflows for commodities, real estate, carbon credits, and fixed-income debt securities in African markets.",
      features: [
        "ERC-3643, ERC-1400, and compliant permissioned token standards",
        "Identity-gated transfer restrictions tied to accredited investor credentials",
        "Automated yield distribution and cap table management",
        "On-chain oracle integration for real-time asset valuation",
      ],
    },
    {
      title: "Institutional Digital Asset Infrastructure",
      description:
        "Robust, redundant infrastructure for multi-party computation (MPC) key custody, validator operations, and programmatic liquidity routing.",
      features: [
        "Institutional custody workflows (Fireblocks, BitGo, MPC vault architectures)",
        "Enterprise validator and staking node deployment across African datacenters",
        "Liquidity settlement pipes and treasury automation",
        "Disaster recovery and business continuity frameworks",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            What We Do
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Consulting & Engineering Services
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            From preliminary feasibility studies to full-scale protocol rollout, we provide
            the engineering discipline and regulatory awareness required for mission-critical deployments.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-slate-200 p-8 sm:p-10 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <span className="text-xs font-mono text-slate-400 block mb-2">
                      0{index + 1} // SERVICE
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                    >
                      Inquire about this service
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="lg:col-span-7 bg-slate-50 p-6 border border-slate-100">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                      Key Deliverables & Specifications
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-slate-900 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
