import { Mail, MapPin, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Engage Our Consultancy
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Inquire about protocol audits, enterprise feasibility studies, or strategic advisory.
            All client communications can be conducted under mutual NDA.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      placeholder="Enterprise / Protocol Name"
                      className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Institutional Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@organization.com"
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Area of Engagement
                  </label>
                  <select
                    id="serviceType"
                    defaultValue=""
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
                  >
                    <option value="" disabled>
                      Select an area of focus...
                    </option>
                    <option value="audit">Smart Contract Security Audit</option>
                    <option value="dlt">Enterprise DLT Architecture & Implementation</option>
                    <option value="rwa">Real-World Asset (RWA) Tokenization</option>
                    <option value="custody">Institutional Custody & Validator Setup</option>
                    <option value="regulatory">Regulatory & Policy Advisory</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Project Scope & Objectives
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Provide relevant details regarding timeline, technology stack, and advisory needs..."
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                  >
                    Submit Advisory Request
                  </button>
                </div>
              </form>
            </div>

            {/* Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-slate-200 p-6 bg-white">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                  Direct Inquiries
                </h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 text-slate-900 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">General & Client Inquiries</p>
                      <p>contact@chaindesk.africa</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-4 w-4 text-slate-900 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Security Disclosures</p>
                      <p>security@chaindesk.africa</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-slate-900 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Pan-African Operations</p>
                      <p>Nairobi, Kenya • Remote & On-site Advisory across Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 p-6 bg-slate-50">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Confidentiality Commitment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We maintain strict confidentiality standards for all prospective client evaluations.
                  Formal Non-Disclosure Agreements (NDAs) are executed prior to code repository sharing
                  or architectural evaluations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
