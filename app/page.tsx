import Link from 'next/link'

export const metadata = {
  title: 'Client Intelligence — Intelligence as a Service',
  description: 'Centralize your proprietary frameworks and apply them to every client through isolated per-client AI workspaces.',
}

const hubs = [
  { href: '/for', label: 'For Your Persona', description: 'Find the page built for your specific role — fractional executives, consultants, coaches, agencies.' },
  { href: '/vs', label: 'Comparisons', description: 'See how Client Intelligence compares to ChatGPT, Claude Projects, Notion AI, and more.' },
  { href: '/use-case', label: 'Use Cases', description: 'How to scale without hiring, train AI on your framework, protect client data, and more.' },
  { href: '/pain', label: 'Pain Points', description: 'The specific problems Client Intelligence solves — from founder bottlenecks to inconsistent delivery.' },
  { href: '/feature', label: 'Features', description: 'Per-client memory, isolated workspaces, Brain Dump mode, and the Intelligence assistant.' },
  { href: '/industry', label: 'By Industry', description: 'Marketing agencies, consulting firms, coaching businesses, and more.' },
  { href: '/alternatives', label: 'Alternatives', description: 'Looking for an alternative to ChatGPT, Notion AI, or generic AI tools for client work?' },
  { href: '/category', label: 'What Is IaaS?', description: 'Understand Intelligence as a Service — the new model for scaling service businesses with AI.' },
]

export default function HomePage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.2em] mb-4">
          Intelligence as a Service
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-tight tracking-tight text-balance mb-6">
          Your methodology. Every client. At scale.
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Centralize your proprietary frameworks and apply them to every client through isolated per-client AI workspaces. Built for agencies, consultants, coaches, and fractional executives.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="https://clientintelligence.ai" target="_blank" rel="noopener noreferrer" className="bg-ink text-cream rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            Start Free Trial →
          </a>
          <Link href="/for" className="border border-border rounded-full px-6 py-3 text-sm font-medium text-ink hover:bg-border/30 transition-colors">
            Find Your Persona →
          </Link>
        </div>
        <p className="text-muted text-xs mt-5">No long-term contracts. Your IP stays yours.</p>
      </section>

      {/* Hub grid */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold text-ink mb-8 text-center tracking-tight">Explore Client Intelligence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hubs.map((hub) => (
            <Link key={hub.href} href={hub.href} className="bg-white rounded-2xl border border-border p-5 hover:shadow-md transition-shadow group">
              <h3 className="text-base font-semibold text-ink group-hover:text-gold transition-colors mb-2">{hub.label}</h3>
              <p className="text-muted text-xs leading-relaxed">{hub.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
