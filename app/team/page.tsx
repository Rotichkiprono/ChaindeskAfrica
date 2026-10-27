import { Mail, Linkedin } from "lucide-react";

export default function TeamPage() {
  const team = [
    {
      name: "Rotich Kiprono",
      title: "Software & DLT Engineer",
      email: "rotich@chaindesk.africa",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Amina Osei",
      title: "Smart Contract Security Auditor",
      email: "amina@chaindesk.africa",
      linkedin: "https://linkedin.com",
    },
    {
      name: "David Adeleke",
      title: "Distributed Systems Architect",
      email: "david@chaindesk.africa",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Faith Mwangi",
      title: "Regulatory & Compliance Lead",
      email: "faith@chaindesk.africa",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-8 mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Team
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col">
              {/* Grayscale square image placeholder */}
              <div className="bg-slate-200 aspect-square w-full" />

              {/* Member Name */}
              <h2 className="text-lg font-bold text-slate-900 mt-4">
                {member.name}
              </h2>

              {/* Title */}
              <p className="text-slate-500 text-sm mt-1">
                {member.title}
              </p>

              {/* Social / Contact Icons */}
              <div className="flex items-center space-x-3 mt-4 text-slate-400">
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-slate-900 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
