import Link from 'next/link'

export const metadata = {
  title: 'Client Intelligence — Intelligence as a Service',
  description: 'Centralize your proprietary frameworks and apply them to every client through isolated per-client AI workspaces.',
}

const hubs = [
  { href: '/for', label: 'Who It\'s For', description: 'Built for fractional executives, consultants, coaches, and agency owners managing multiple clients.' },
  { href: '/vs', label: 'Why CI', description: 'See how Client Intelligence compares to ChatGPT, Claude Projects, Notion AI, and more.' },
  { href: '/use-case', label: 'How It\'s Used', description: 'Scale without hiring, train AI on your framework, protect client data, and deliver consistently.' },
  { href: '/pain', label: 'Solve a Problem', description: 'The real frustrations of running a multi-client practice — and exactly how CI fixes them.' },
  { href: '/feature', label: 'The Platform', description: 'Per-client memory, isolated Workspaces, Brain Dump mode, and the Intelligence layer.' },
  { href: '/industry', label: 'Your Industry', description: 'Marketing agencies, consulting firms, coaching businesses, financial advisors, and more.' },
  { href: '/alternatives', label: 'Switching From', description: 'Moving away from ChatGPT, Notion AI, or stitched-together AI tools? Here\'s what\'s different.' },
  { href: '/category', label: 'What Is IaaS?', description: 'Intelligence as a Service — the new model for scaling service businesses with AI.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="landing-hero-bg pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-6">
              Intelligence as a Service
            </p>
            <h1 className="warm-gradient-heading font-sans font-semibold text-[40px] sm:text-[56px] lg:text-[72px] tracking-[-0.04em] leading-[1.0] mb-6 text-balance">
              Your methodology. Every client. At scale.
            </h1>
            <p className="mx-auto max-w-[560px] text-[18px] text-faint leading-[1.7] mb-10">
              Centralize your proprietary frameworks and apply them to every client through isolated per-client AI workspaces. Built for agencies, consultants, coaches, and fractional executives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
              <a
                href="https://clientintelligence.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl px-8 text-[15px] font-semibold bg-gold text-ink transition-colors duration-brand ease-brand hover:bg-gold-hover w-full sm:w-auto justify-center"
              >
                Learn More
              </a>
            </div>
            <p className="text-xs text-faint">No long-term contracts. Your IP stays yours.</p>
          </div>
        </div>
      </section>

      {/* Hub grid */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold">Explore Client Intelligence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="group block bg-white rounded-card border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand"
              >
                <h3 className="text-base font-semibold text-ink group-hover:text-gold-accessible transition-colors duration-brand ease-brand mb-2">
                  {hub.label}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{hub.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
