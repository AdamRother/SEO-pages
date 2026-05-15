import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { categories } from '@/content/categories'
import PSEOHero from '@/components/pseo/PSEOHero'
import FeatureGrid from '@/components/pseo/FeatureGrid'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/FAQSection'
import CTABlock from '@/components/CTABlock'
import Breadcrumbs from '@/components/Breadcrumbs'

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return {}
  return {
    title: category.h1,
    description: category.metaDescription,
  }
}

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const BASE_URL = 'https://clientintelligence.com'
  const pageUrl = `${BASE_URL}/category/${category.slug}`

  return (
    <>
      <PSEOSchema
        name={category.h1}
        description={category.metaDescription}
        url={pageUrl}
        faqs={category.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'Categories', url: `${BASE_URL}/category` },
          { name: category.label, url: pageUrl },
        ]}
      />
      <main>
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Categories', href: '/category' },
            { label: category.label, href: `/category/${category.slug}` },
          ]} />
        </div>

        <PSEOHero
          eyebrow="Category Definition"
          h1={category.h1}
          subheadline={category.metaDescription}
          ctaPrimary="Start Free Trial"
          ctaSecondary="Read the Definition"
          ctaSecondaryHref="#definition"
        />

        <section id="definition" className="max-w-3xl mx-auto px-6 py-16">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: category.prose }}
          />
        </section>

        <FeatureGrid
          headline="Related Capabilities in Client Intelligence"
          items={category.relatedFeatures}
        />

        <FAQSection faqs={category.faqs} />

        <CTABlock
          headline="Experience Intelligence as a Service"
          subtext="Client Intelligence is the platform built for the IaaS model. Per-client memory, encoded methodology, isolated workspaces. Starter from $97/mo."
          cta="Start Free Trial →"
        />
      </main>
    </>
  )
}
