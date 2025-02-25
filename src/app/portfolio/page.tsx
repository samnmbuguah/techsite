'use client';

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, ScaleIn, CardHover, FadeInStagger, FadeInStaggerItem } from '@/app/components/animations';

interface Project {
  name: string;
  description: string;
  tech?: string[];
  image: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    name: 'E-commerce Platform',
    description: 'A modern e-commerce platform with AI-powered product recommendations and chatbot support.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'TensorFlow.js'],
    image: '/images/portfolio/ecommerce.jpg',
    tags: ['E-commerce', 'AI', 'Web Development'],
  },
  {
    name: 'Healthcare Management System',
    description: 'An integrated healthcare management system with AI-driven patient diagnosis assistance.',
    tech: ['React', 'Python', 'PostgreSQL', 'TensorFlow'],
    image: '/images/portfolio/healthcare.jpg',
    tags: ['Healthcare', 'Analytics', 'Security'],
  },
  {
    name: 'Real Estate Solutions',
    description: 'Smart real estate platform with AI-driven property valuation and market analysis.',
    image: '/images/portfolio/real-estate.jpg',
    tags: ['Real Estate', 'AI', 'Analytics'],
  },
  {
    name: 'Supply Chain System',
    description: 'Intelligent supply chain management system with predictive analytics and automation.',
    image: '/images/portfolio/supply-chain.jpg',
    tags: ['Supply Chain', 'Automation', 'Analytics'],
  },
]

export default function Portfolio() {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (projectName: string) => {
    setFailedImages((prev: { [key: string]: boolean }) => ({ ...prev, [projectName]: true }));
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how we&apos;ve helped businesses transform their operations with cutting-edge AI solutions and custom software development.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {projects.map((project) => (
              <CardHover key={project.name}>
                <FadeInStaggerItem>
                  <article className="flex flex-col items-start rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
                    <div className="relative w-full">
                      {failedImages[project.name] ? (
                        <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 flex items-center justify-center">
                          <span className="text-4xl text-gray-400">
                            {project.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      ) : (
                        <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={800}
                            height={450}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            onError={() => handleImageError(project.name)}
                          />
                        </div>
                      )}
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                          {project.name}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-gray-600">{project.description}</p>
                      </div>
                    </div>
                  </article>
                </FadeInStaggerItem>
              </CardHover>
            ))}
          </div>
        </FadeInStagger>

        {/* CTA Section */}
        <ScaleIn delay={0.3}>
          <div className="mx-auto mt-32 max-w-2xl text-center pb-24 sm:pb-32">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Create Your Success Story?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join our portfolio of successful transformations. Let&apos;s harness the power of AI to elevate your business to new heights.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:scale-105"
              >
                Let&apos;s Build Together
              </Link>
            </div>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
} 