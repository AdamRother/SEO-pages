import Link from 'next/link'
import { alternatives } from '@/content/alternatives'

export const metadata = {
  title: 'Alternatives to Standard AI Tools — Client Intelligence',
  description: 'Looking for an alternative to shared AI tools, knowledge bases, or traditional consulting software? Client Intelligence is purpose-built for multi-client service delivery.',
}

export default function AlternativesPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs text-gold-accessible uppercase tracking-[0.2em] mb-4">Alternatives</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink mb-6 leading-tight">
          A Better Alternative For Your Practice
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          If your current tools don't support per-client isolation, encoded methodology, or persistent AI memory — there's a better way.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {alternatives.map((alt) => (
            <Link
              key={alt.slug}
              href={`/alternatives/${alt.slug}`}
              className="bg-white border border-border rounded-2xl p-6 hover:border-gold/50 hover:shadow-sm transition-all group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors">
                {alt.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{alt.whatWeDoInstead}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
