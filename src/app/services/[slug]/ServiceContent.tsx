'use client';

import Link from 'next/link'
import { FadeIn, SlideIn, CardHover } from '@/app/components/animations'

interface ServiceContentProps {
  service: {
    title: string;
    description: string;
    content: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SlideIn>
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-primary transition-colors duration-200"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Services
            </Link>
          </div>
        </SlideIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {service.description}
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <FadeIn delay={0.3}>
            <div className="prose prose-lg prose-primary mx-auto">
              {service.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mt-6 text-lg leading-8 text-gray-600">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </FadeIn>

          <div className="mt-16">
            <FadeIn delay={0.4}>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Key Features</h2>
              <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <CardHover key={feature.title}>
                    <div className="border-l-4 border-primary pl-6 transition-all duration-200">
                      <dt className="text-lg font-semibold text-gray-900">{feature.title}</dt>
                      <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                    </div>
                  </CardHover>
                ))}
              </dl>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-16 flex justify-center space-x-4">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:scale-105"
              >
                Contact us about {service.title}
              </Link>
              <Link
                href="/services"
                className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
} 