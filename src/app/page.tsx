'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import { FadeIn, ScaleIn, CardHover } from '@/app/components/animations';

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
      <div className="relative isolate overflow-hidden flex flex-col justify-center items-center h-[calc(100vh-5rem)]">
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
            <FadeIn delay={0.5}>
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  Transform Your Business with AI-Powered Solutions
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                  We specialize in creating custom software solutions that leverage the power of AI to automate your business processes and drive growth.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-gradient-to-b from-primary/5 to-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Our Vision
                </h2>
                <p className="text-lg leading-8 text-gray-600">
                  To redefine problem-solving through innovation, pioneering smart solutions that transform industries and empower businesses to thrive in the digital era.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Our Mission
                </h2>
                <p className="text-lg leading-8 text-gray-600">
                  At AkiliNova, we apply innovation in every solution we create. We explore uncharted frontiers, harnessing cutting-edge technology to deliver smart, scalable, and impactful solutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Content Section with Features and CTA */}
      <div className="min-h-screen flex flex-col justify-between">
        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-12">
          <ScaleIn delay={0.2}>
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Software Solutions
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                From web development to AI integration, we provide end-to-end solutions that help your business thrive in the digital age.
              </p>
            </div>
          </ScaleIn>

          <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <CardHover key={feature.name}>
                  <FadeIn delay={0.2 + index * 0.1}>
                    <div key={feature.name} className="flex flex-col rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                        <p className="mt-6">
                          <Link
                            href={feature.href}
                            className="text-sm font-semibold leading-6 text-primary transition-all duration-200 hover:translate-x-1"
                          >
                            Learn more <span aria-hidden="true">→</span>
                          </Link>
                        </p>
                      </dd>
                    </div>
                  </FadeIn>
                </CardHover>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA Section */}
        <ScaleIn delay={0.3}>
          <div className="mx-auto mt-12 max-w-2xl text-center pb-16 sm:pb-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience the Power of AI Innovation
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Transform your business with our AI-powered software solutions. Let&apos;s build something extraordinary together.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:scale-105"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </ScaleIn>
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
