'use client';

import Link from 'next/link'
import { FadeIn, CardHover, ScaleIn } from '@/app/components/animations'

const services = [
  {
    name: 'Business Management Systems',
    description: 'Comprehensive business management solutions including POS, CRM, and ERP systems tailored to your needs.',
    features: [
      'Point of Sale (POS) Systems',
      'Inventory Management',
      'Sales & Order Management',
      'Financial Management',
      'Employee Management',
      'Real-time Analytics',
    ],
    href: '/services/business-systems',
  },
  {
    name: 'CRM Solutions',
    description: 'Customer Relationship Management systems to streamline your customer interactions and boost sales.',
    features: [
      'Contact Management',
      'Lead Tracking',
      'Sales Pipeline Management',
      'Email Marketing Integration',
      'Customer Support Tools',
      'Performance Analytics',
    ],
    href: '/services/crm',
  },
  {
    name: 'ERP Systems',
    description: 'Enterprise Resource Planning solutions to integrate and manage all aspects of your business operations.',
    features: [
      'Financial Management',
      'Supply Chain Management',
      'HR Management',
      'Project Management',
      'Business Intelligence',
      'Automated Workflows',
    ],
    href: '/services/erp',
  },
  {
    name: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Apps',
      'API Integration',
      'Performance Optimization',
    ],
    href: '/services/web-development',
  },
  {
    name: 'AI Integration',
    description: 'Leverage artificial intelligence to automate processes and enhance user experiences.',
    features: [
      'Chatbots & Virtual Assistants',
      'Natural Language Processing',
      'Machine Learning Integration',
      'Automated Decision Making',
      'Predictive Analytics',
      'Computer Vision Solutions',
    ],
    href: '/services/ai-integration',
  },
  {
    name: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
    href: '/services/mobile-apps',
  },
  {
    name: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    features: [
      'Business Process Automation',
      'Enterprise Solutions',
      'Cloud Integration',
      'Legacy System Migration',
      'Database Design',
      'API Development',
    ],
    href: '/services/custom-software',
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Software Solutions for Modern Businesses
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From business management systems to custom software development, we provide end-to-end solutions 
              that help businesses streamline operations and drive growth in the digital age.
            </p>
          </div>
        </FadeIn>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <CardHover key={service.name}>
                <FadeIn delay={index * 0.1}>
                  <div className="flex flex-col rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
                    <dt className="text-2xl font-semibold leading-7 text-gray-900">
                      {service.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col">
                      <p className="flex-auto text-base leading-7 text-gray-600">
                        {service.description}
                      </p>
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold leading-6 text-gray-900">Key Features</h4>
                        <ul className="mt-4 space-y-3">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start"
                            >
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-5 w-5 text-primary"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </div>
                              <p className="ml-3 text-sm leading-6 text-gray-600">{feature}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <Link
                          href={service.href}
                          className="inline-flex items-center text-sm font-semibold leading-6 text-primary hover:text-primary-dark"
                        >
                          Learn more <span aria-hidden="true" className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                      </div>
                    </dd>
                  </div>
                </FadeIn>
              </CardHover>
            ))}
          </dl>
        </div>

        {/* CTA Section */}
        <ScaleIn delay={0.3}>
          <div className="mx-auto mt-32 max-w-2xl text-center pb-24 sm:pb-32">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Discover how our AI-powered solutions can transform your operations and drive unprecedented growth. Start your journey today.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:scale-105"
              >
                Transform Your Business
              </Link>
            </div>
          </div>
        </ScaleIn>
      </div>
    </div>
  )
} 