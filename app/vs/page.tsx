import Link from 'next/link'
import { competitors } from '@/content/competitors'

export const metadata = {
  title: 'Client Intelligence vs. Alternatives — Comparisons',
  description: 'See how Client Intelligence compares to ChatGPT, Notion AI, HubSpot, and other tools — feature by feature, for multi-client service delivery.',
}

export default function VsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs text-gold-accessible uppercase tracking-[0.2em] mb-4">Comparisons</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink mb-6 leading-tight">
          Client Intelligence vs. Everything Else
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Not all AI tools are built for multi-client professional service delivery. See what sets Client Intelligence apart.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitors.map((comp) => (
            <Link
              key={comp.slug}
              href={`/vs/${comp.slug}`}
              className="bg-white border border-border rounded-2xl p-6 hover:border-gold/50 hover:shadow-sm transition-all group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors">
                vs. {comp.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{comp.ourAdvantage}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
