import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
import { personas } from '@/content/personas'
import { competitors } from '@/content/competitors'
import { alternatives } from '@/content/alternatives'
import { useCases } from '@/content/use-cases'
import { painPoints } from '@/content/pain-points'
import { features } from '@/content/features'
import { industries } from '@/content/industries'
import { categories } from '@/content/categories'

const BASE_URL = 'https://clientintelligence.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const hubs = [
    '/for',
    '/vs',
    '/alternatives',
    '/use-case',
    '/pain',
    '/feature',
    '/industry',
    '/category',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const personaPages = personas.map((p) => ({
    url: `${BASE_URL}/for/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const competitorPages = competitors.map((c) => ({
    url: `${BASE_URL}/vs/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const alternativePages = alternatives.map((a) => ({
    url: `${BASE_URL}/alternatives/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const useCasePages = useCases.map((uc) => ({
    url: `${BASE_URL}/use-case/${uc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const painPages = painPoints.map((p) => ({
    url: `${BASE_URL}/pain/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const featurePages = features.map((f) => ({
    url: `${BASE_URL}/feature/${f.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const industryPages = industries.map((i) => ({
    url: `${BASE_URL}/industry/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const categoryPages = categories.map((c) => ({
    url: `${BASE_URL}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...hubs,
    ...personaPages,
    ...competitorPages,
    ...alternativePages,
    ...useCasePages,
    ...painPages,
    ...featurePages,
    ...industryPages,
    ...categoryPages,
  ]
}
