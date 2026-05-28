import Link from 'next/link'
import { personas } from '@/content/personas'

export const metadata = {
  title: 'Client Intelligence — Built For You',
  description: 'Client Intelligence is built for consultants, coaches, fractional executives, and agencies who serve multiple clients and need isolated AI workspaces and consistent framework delivery.',
}

export default function ForPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs text-gold-accessible uppercase tracking-[0.2em] mb-4">Intelligence as a Service</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
          Built For Your Practice
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Whether you're a fractional executive, agency owner, or solo consultant — Client Intelligence is designed for how you work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <Link
              key={persona.slug}
              href={`/for/${persona.slug}`}
              className="bg-white border border-border rounded-2xl p-6 hover:border-gold/50 hover:shadow-sm transition-all group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors">
                {persona.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{persona.outcome}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
