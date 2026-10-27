import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Chaindesk Africa",
  description:
    "Initiate a project or schedule a technical consultation with our DLT engineering team.",
  openGraph: {
    title: "Contact Us | Chaindesk Africa",
    description:
      "Initiate a project or schedule a technical consultation with our DLT engineering team.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Us | Chaindesk Africa",
    description:
      "Initiate a project or schedule a technical consultation with our DLT engineering team.",
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 lg:py-24 bg-transparent">
      {/* Container: Full width on mobile (w-full), constrained to readable width on desktop (max-w-2xl mx-auto) with px-4 md:px-8 lg:px-16 */}
      <div className="w-full max-w-2xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <header className="text-center mb-8 md:mb-10">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">
            Initiate Engagement
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-slate-600">
            For direct inquiries, reach out at{" "}
            <a
              href="mailto:info@chaindeskafrica.com"
              className="text-slate-900 font-medium underline hover:text-slate-600 transition-colors"
            >
              info@chaindeskafrica.com
            </a>
            .
          </p>
        </header>

        {/* Sleek, Centered White Card (Full width on mobile, comfortably padded) */}
        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">
            Project Inquiry Form
          </h2>
          <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 md:p-12">
            <form className="space-y-6 md:space-y-8">
              {/* Field: Name with min-h-[48px] */}
              <div className="group relative">
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full min-h-[48px] bg-transparent border-b border-slate-200 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left ease-out"
                />
              </div>

              {/* Field: Organization with min-h-[48px] */}
              <div className="group relative">
                <label
                  htmlFor="organization"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  placeholder="Enterprise or Protocol Name"
                  className="w-full min-h-[48px] bg-transparent border-b border-slate-200 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left ease-out"
                />
              </div>

              {/* Field: Message with ample touch target */}
              <div className="group relative">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project, timeline, and architectural requirements..."
                  className="w-full min-h-[120px] bg-transparent border-b border-slate-200 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left ease-out"
                />
              </div>

              {/* Full-width Perfectly Rounded Submit Button with min-h-[48px] */}
              <div className="pt-2">
                <button
                  type="submit"
                  aria-label="Send Message"
                  className="w-full min-h-[48px] rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 px-6 text-base tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/40 flex items-center justify-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
