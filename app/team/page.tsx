export default function TeamPage() {
  const members = [
    {
      name: "Rotich Kiprono",
      role: "Managing Director & Principal Consultant",
      bio: "Over a decade of experience advising institutional clients on distributed ledger adoption, digital currency frameworks, and enterprise technology strategy across Pan-African markets.",
      credentials: "MSc Computer Science, Ex-Fintech Infrastructure Lead",
    },
    {
      name: "Dr. Amina Osei",
      role: "Head of Cryptographic Engineering",
      bio: "Specializes in zero-knowledge proof applications, applied cryptography, and consensus mechanism modeling for high-scale permissioned networks.",
      credentials: "PhD Applied Cryptography, IEEE Distributed Systems Fellow",
    },
    {
      name: "David Adeleke",
      role: "Lead Security Auditor",
      bio: "Veteran smart contract auditor having secured over $800M in cumulative Total Value Locked (TVL) across EVM and Rust protocols.",
      credentials: "OSCP, Certified Ethereum Security Professional",
    },
    {
      name: "Faith Mwangi",
      role: "Director of Regulatory Strategy & Compliance",
      bio: "Directs institutional engagement with financial regulators, central banks, and capital markets authorities on digital asset frameworks and sandbox programs.",
      credentials: "LLM International Financial Law, ACAMS Certified",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Leadership & Expertise
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Our Advisory Team
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Our multidisciplinary team unites cryptography researchers, protocol engineers,
            and regulatory practitioners committed to institutional-grade decentralization.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="border border-slate-200 p-8 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">
                    ROLE // {member.role.toUpperCase()}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 mb-4">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
