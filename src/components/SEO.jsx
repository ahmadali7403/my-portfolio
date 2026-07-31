import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../data/site'

export default function SEO({
  title,
  description,
  path = '',
  keywords = 'Ahmad Ali, Frontend Developer, React, Portfolio, Web Developer',
  type = 'website',
}) {
  const url = `${siteConfig.siteUrl}${path}`
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.role}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteConfig.name} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
