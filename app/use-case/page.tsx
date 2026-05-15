import Link from 'next/link'
import { useCases } from '@/content/use-cases'

export const metadata = {
  title: 'How To Use Client Intelligence — Use Cases',
  description: 'Learn how to scale consulting, protect client data, encode your methodology, and deliver consistent results with Client Intelligence.',
}

export default function UseCasePage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs text-gold-accessible uppercase tracking-[0.2em] mb-4">Use Cases</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink mb-6 leading-tight">
          What You Can Do With Client Intelligence
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          From scaling your practice to protecting client data — here's how consultants and agencies are putting Client Intelligence to work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/use-case/${uc.slug}`}
              className="bg-white border border-border rounded-2xl p-6 hover:border-gold/50 hover:shadow-sm transition-all group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors">
                {uc.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{uc.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
