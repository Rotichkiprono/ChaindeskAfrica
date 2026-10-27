export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Contact
        </h1>

        {/* Header Direct Inquiry Notice */}
        <p className="text-base text-slate-600 mb-10">
          For direct inquiries, reach out at{" "}
          <a
            href="mailto:info@chaindeskafrica.com"
            className="text-slate-900 underline hover:text-slate-600 transition-colors"
          >
            info@chaindeskafrica.com
          </a>
          .
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full bg-white border border-slate-300 px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              className="w-full bg-white border border-slate-300 px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-white border border-slate-300 px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors resize-y"
            />
          </div>

          {/* Full-width Solid Dark Charcoal Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-medium py-3 px-4 text-sm hover:bg-slate-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
