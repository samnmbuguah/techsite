'use client';

import Link from 'next/link'
import { FadeIn, ScaleIn, CardHover, FadeInStagger, FadeInStaggerItem } from '@/app/components/animations'

const stats = [
  { label: 'Years of experience', value: '5+' },
  { label: 'Projects completed', value: '100+' },
  { label: 'Team members', value: '20+' },
  { label: 'Client satisfaction', value: '98%' },
]

const values = [
  {
    name: 'Innovation',
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
  },
  {
    name: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to client service.',
  },
  {
    name: 'Collaboration',
    description: 'We work closely with our clients to ensure their vision becomes reality.',
  },
  {
    name: 'Integrity',
    description: 'We operate with complete transparency and always put our clients&apos; interests first.',
  },
]

const team = [
  {
    name: 'Derrick Ngari',
    role: 'Founder & Business Development',
    image: '/images/placeholder.png',
  },
  {
    name: 'Emmanuel Barasa',
    role: 'Founder & Software Development',
    image: '/images/placeholder.png',
  },
  {
    name: 'Samuel Mbugua',
    role: 'Software Engineer',
    image: '/images/placeholder.png',
  },
  {
    name: 'Brian Cheruiyot',
    role: 'Software Engineer',
    image: '/images/placeholder.png',
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Akilinova
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions and AI integration.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <FadeInStagger>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <FadeInStaggerItem key={stat.label}>
                <CardHover>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4 rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
                    <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                </CardHover>
              </FadeInStaggerItem>
            ))}
          </dl>
        </FadeInStagger>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </div>
        </FadeIn>
        <FadeInStagger>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <FadeInStaggerItem key={value.name}>
                <CardHover>
                  <div className="rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
                    <dt className="font-semibold text-gray-900">{value.name}</dt>
                    <dd className="mt-1 text-gray-600">{value.description}</dd>
                  </div>
                </CardHover>
              </FadeInStaggerItem>
            ))}
          </dl>
        </FadeInStagger>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the talented individuals who make our vision a reality.
            </p>
          </div>
        </FadeIn>
        <FadeInStagger>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {team.map((person) => (
              <FadeInStaggerItem key={person.name}>
                <CardHover>
                  <li className="text-center rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-[14/13] w-full rounded-2xl bg-gray-100 flex items-center justify-center">
                      <span className="text-4xl text-gray-400 transition-all duration-200 group-hover:scale-110">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  </li>
                </CardHover>
              </FadeInStaggerItem>
            ))}
          </ul>
        </FadeInStagger>
      </div>

      {/* CTA Section */}
      <ScaleIn delay={0.3}>
        <div className="mx-auto mt-32 max-w-2xl text-center pb-24 sm:pb-32">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Partner with Innovation Leaders
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join forces with our team of AI experts and innovators. Together, we&apos;ll create solutions that define the future of your industry.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:scale-105"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </ScaleIn>
    </div>
  )
} 