import Link from 'next/link'
import { features } from '@/content/features'

export const metadata = {
  title: 'Client Intelligence Features — What\'s Inside',
  description: 'Per-client AI memory, isolated workspaces, Brain Dump Mode, Blueprint Execution Layer — explore every feature built for multi-client professional service delivery.',
}

export default function FeaturePage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs text-gold-accessible uppercase tracking-[0.2em] mb-4">Features</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink mb-6 leading-tight">
          Built for How You Actually Work
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Every feature in Client Intelligence is designed specifically for multi-client professional service delivery — not adapted from tools built for something else.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/feature/${feature.slug}`}
              className="bg-white border border-border rounded-2xl p-6 hover:border-gold/50 hover:shadow-sm transition-all group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors">
                {feature.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{feature.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
