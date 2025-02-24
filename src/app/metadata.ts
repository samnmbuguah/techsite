import type { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: {
    default: 'Akilinova - AI-Powered Security Solutions & Custom Software Development',
    template: '%s | Akilinova',
  },
  description: 'Transform your security and customer experience with cutting-edge AI technology. We specialize in real-time threat detection, smart surveillance, and custom software solutions.',
  keywords: [
    'AI security',
    'smart surveillance',
    'real-time monitoring',
    'threat detection',
    'security automation',
    'custom software',
    'AI integration',
    'Kenya',
    'Nairobi',
    'security solutions',
    'artificial intelligence',
    'business automation',
  ],
  authors: [{ name: 'Akilinova Team' }],
  creator: 'Akilinova',
  publisher: 'Akilinova',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://akilinova.tech',
    siteName: 'Akilinova',
    title: 'Akilinova - AI-Powered Security Solutions',
    description: 'Transform your security infrastructure with cutting-edge AI technology. Real-time threat detection, smart surveillance, and custom software solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akilinova - AI-Powered Security Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akilinova - AI-Powered Security Solutions',
    description: 'Transform your security with cutting-edge AI technology. Real-time threat detection and smart surveillance solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@akilinova',
    site: '@akilinova',
  },
  metadataBase: new URL('https://akilinova.tech'),
  verification: {
    google: 'G-ZS0RB64ME5',
  },
  category: 'technology',
  alternates: {
    canonical: 'https://akilinova.com',
  },
  other: {
    'theme-color': '#FF0000',
  },
}

export default defaultMetadata 