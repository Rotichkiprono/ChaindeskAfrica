import type { Metadata } from "next";
import { Mail, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Leadership | Chaindesk Africa",
  description:
    "Meet our lead Web3 and cybersecurity engineers architecting Africa's decentralized infrastructure.",
  openGraph: {
    title: "Technical Leadership | Chaindesk Africa",
    description:
      "Meet our lead Web3 and cybersecurity engineers architecting Africa's decentralized infrastructure.",
    url: "/team",
  },
  twitter: {
    title: "Technical Leadership | Chaindesk Africa",
    description:
      "Meet our lead Web3 and cybersecurity engineers architecting Africa's decentralized infrastructure.",
  },
};

export default function TeamPage() {
  const team = [
    {
      name: "Felix Kiprono",
      title: "Lead Web3 & Cybersecurity Engineer",
      stack: ["Hedera", "Supabase", "Flutter", "Security Architecture"],
      email: "felix@chaindesk.africa",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Don Mutai",
      title: "DLT & Smart Contract Engineer",
      stack: ["Blockchain Architecture", "Web3 Integration"],
      email: "don@chaindesk.africa",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="py-12 md:py-20 lg:py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-6 md:pb-8 mb-8 md:mb-16">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">
            Core Engineering &amp; Advisory
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Team
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-xl">
            The protocol engineers and cybersecurity specialists driving Chaindesk Africa&apos;s institutional deployments.
          </p>
        </div>

        {/* 2-Member Team Grid: Stacks vertically on mobile (grid-cols-1) and side-by-side on desktop (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Large, pristine grayscale image placeholder with rounded-2xl */}
                <div className="bg-slate-200/80 aspect-square w-full rounded-2xl overflow-hidden relative border border-slate-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-slate-300/60 flex items-center justify-center text-slate-500 font-bold text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                {/* Name */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 tracking-tight">
                  {member.name}
                </h2>

                {/* Exact Title */}
                <p className="text-slate-500 text-sm md:text-base mt-1.5 font-medium">
                  {member.title}
                </p>

                {/* Pill-shaped tags showing stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {member.stack.map((tag, sIndex) => (
                    <span
                      key={sIndex}
                      className="text-xs font-medium px-3 py-1 bg-slate-50 text-slate-700 rounded-full border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimal LinkedIn and Email Icons in muted gray turning charcoal on hover */}
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-slate-100 text-slate-400">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center -ml-2 text-slate-400 hover:text-slate-900 transition-colors duration-200"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors duration-200"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
