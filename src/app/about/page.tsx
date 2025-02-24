import Image from 'next/image'
import Link from 'next/link'

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
    description: 'We operate with complete transparency and always put our clients\' interests first.',
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
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Akilinova
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions and AI integration.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These core values guide everything we do and help us deliver exceptional results for our clients.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the talented individuals who make our vision a reality.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name} className="text-center">
              <div className="aspect-[14/13] w-full rounded-2xl bg-gray-100 flex items-center justify-center">
                <span className="text-4xl text-gray-400">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
        <div className="relative isolate overflow-hidden bg-secondary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how we can help you achieve your goals with our custom software solutions and AI integration.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-secondary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact us
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-white">
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 