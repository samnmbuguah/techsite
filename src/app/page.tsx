'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });

      videoRef.current.addEventListener('error', (e) => {
        console.error('Error loading video:', e);
      });
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden flex flex-col justify-center items-center h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 text-center">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Transform Your Business with AI-Powered Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                We specialize in creating custom software solutions that leverage the power of AI to automate your business processes and drive growth.
              </p>
              <div className="mt-10 flex items-center gap-x-6 justify-center">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Request Demo
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-white">
                  View Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Software Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From web development to AI integration, we provide end-to-end solutions that help your business thrive in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link href={feature.href} className="text-sm font-semibold leading-6 text-primary">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
            <br />
            Get started with Akilinova today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Request Demo
            </Link>
            <Link href="/portfolio" className="text-sm font-semibold leading-6 text-white">
              View Our Work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Custom Web Development',
    description: 'Build responsive, modern websites tailored to your business needs with the latest technologies and best practices.',
    href: '/services/web-development',
  },
  {
    name: 'AI Integration',
    description: 'Leverage the power of artificial intelligence to automate processes and enhance user experiences.',
    href: '/services/ai-integration',
  },
  {
    name: 'Mobile Applications',
    description: 'Create native and cross-platform mobile apps that provide seamless experiences across all devices.',
    href: '/services/mobile-apps',
  },
]
