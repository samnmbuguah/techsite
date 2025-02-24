import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    name: 'E-commerce Platform',
    description: 'A modern e-commerce platform with AI-powered product recommendations and chatbot support.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'TensorFlow.js'],
    image: '/images/portfolio/ecommerce.jpg',
  },
  {
    name: 'Healthcare Management System',
    description: 'An integrated healthcare management system with AI-driven patient diagnosis assistance.',
    tech: ['React', 'Python', 'PostgreSQL', 'TensorFlow'],
    image: '/images/portfolio/healthcare.jpg',
  },
  {
    name: 'Real Estate Platform',
    description: 'A real estate platform with AI-powered property valuation and virtual tours.',
    tech: ['Vue.js', 'Django', 'PostgreSQL', 'Computer Vision'],
    image: '/images/portfolio/real-estate.jpg',
  },
  {
    name: 'Supply Chain Management',
    description: 'An intelligent supply chain management system with predictive analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
    image: '/images/portfolio/supply-chain.jpg',
  },
]

export default function Portfolio() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore some of our recent projects where we've helped businesses transform their operations with custom software solutions and AI integration.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="mr-2 inline-flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{project.description}</p>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Let's discuss how we can help transform your business with custom software solutions and AI integration.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more about our services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 