export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">
            Initiate Engagement
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Contact Us
          </h1>
          <p className="text-sm text-slate-600">
            For direct inquiries, reach out at{" "}
            <a
              href="mailto:info@chaindeskafrica.com"
              className="text-slate-900 font-medium underline hover:text-slate-600 transition-colors"
            >
              info@chaindeskafrica.com
            </a>
            .
          </p>
        </div>

        {/* Sleek, Centered White Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <form className="space-y-8">
            {/* Field: Name */}
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
                className="w-full bg-transparent border-b border-slate-200 pb-3 pt-1 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left ease-out"
              />
            </div>

            {/* Field: Organization */}
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
                className="w-full bg-transparent border-b border-slate-200 pb-3 pt-1 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left ease-out"
              />
            </div>

            {/* Field: Message */}
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
                className="w-full bg-transparent border-b border-slate-200 pb-3 pt-1 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left ease-out"
              />
            </div>

            {/* Full-width Perfectly Rounded Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 px-6 text-sm tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/40"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
