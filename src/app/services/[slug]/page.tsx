import { notFound } from 'next/navigation'
import Link from 'next/link'

const services = {
  'business-systems': {
    title: 'Business Management Systems',
    description: 'Comprehensive business management solutions including POS, CRM, and ERP systems tailored to your needs.',
    content: `Our Business Management Systems are designed to streamline your operations and boost efficiency. We provide integrated solutions that combine Point of Sale (POS), inventory management, and financial tracking to give you complete control over your business processes.

    Our systems are built with scalability in mind, allowing your business to grow without outgrowing your software. We focus on creating intuitive interfaces that reduce the learning curve for your team while providing powerful features that drive business growth.`,
    features: [
      {
        title: 'Point of Sale (POS) Systems',
        description: 'Modern, user-friendly POS systems that handle transactions, inventory, and customer data seamlessly.',
      },
      {
        title: 'Inventory Management',
        description: 'Real-time tracking and automated reordering to optimize your stock levels and reduce costs.',
      },
      {
        title: 'Sales & Order Management',
        description: 'Comprehensive tools to manage sales cycles, track orders, and analyze performance metrics.',
      },
      {
        title: 'Financial Management',
        description: 'Integrated accounting and financial reporting to keep your business finances organized and compliant.',
      },
      {
        title: 'Employee Management',
        description: 'Tools for scheduling, performance tracking, and payroll management to optimize workforce efficiency.',
      },
      {
        title: 'Real-time Analytics',
        description: 'Advanced reporting and analytics to make data-driven decisions for your business growth.',
      },
    ],
  },
  'crm': {
    title: 'CRM Solutions',
    description: 'Customer Relationship Management systems to streamline your customer interactions and boost sales.',
    content: `Our CRM solutions help businesses build stronger relationships with their customers. We create customized CRM systems that integrate with your existing workflows, making it easier to track customer interactions, manage sales pipelines, and improve customer satisfaction.

    Our CRM platforms are designed to be flexible and scalable, adapting to your business needs as you grow. We emphasize user-friendly interfaces while maintaining powerful features that drive sales and customer engagement.`,
    features: [
      {
        title: 'Contact Management',
        description: 'Centralized database for customer information with easy access and updates.',
      },
      {
        title: 'Lead Tracking',
        description: 'Comprehensive tools to capture, nurture, and convert leads into customers.',
      },
      {
        title: 'Sales Pipeline Management',
        description: 'Visual pipeline tracking and sales forecasting to optimize your sales process.',
      },
      {
        title: 'Email Marketing Integration',
        description: 'Seamless integration with email marketing tools for targeted campaigns.',
      },
      {
        title: 'Customer Support Tools',
        description: 'Integrated support ticket system and customer communication tools.',
      },
      {
        title: 'Performance Analytics',
        description: 'Detailed reporting on sales, customer engagement, and team performance.',
      },
    ],
  },
  'erp': {
    title: 'ERP Systems',
    description: 'Enterprise Resource Planning solutions to integrate and manage all aspects of your business operations.',
    content: `Our ERP systems provide comprehensive solutions for managing your entire business operation. We develop integrated platforms that connect all aspects of your business, from finance and HR to supply chain and project management.

    Our ERP solutions are built to be scalable and adaptable, growing with your business while maintaining efficiency and data integrity. We focus on creating systems that streamline processes and provide valuable insights for better decision-making.`,
    features: [
      {
        title: 'Financial Management',
        description: 'Comprehensive financial tools for accounting, budgeting, and financial reporting.',
      },
      {
        title: 'Supply Chain Management',
        description: 'End-to-end supply chain tracking and optimization tools.',
      },
      {
        title: 'HR Management',
        description: 'Complete HR suite for employee management, payroll, and performance tracking.',
      },
      {
        title: 'Project Management',
        description: 'Tools for planning, tracking, and managing projects across your organization.',
      },
      {
        title: 'Business Intelligence',
        description: 'Advanced analytics and reporting for data-driven decision making.',
      },
      {
        title: 'Automated Workflows',
        description: 'Process automation tools to increase efficiency and reduce errors.',
      },
    ],
  },
  'web-development': {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    content: `Our web development services focus on creating modern, responsive websites and web applications that deliver exceptional user experiences. We use cutting-edge technologies and follow best practices to ensure your web presence is both impressive and effective.

    From simple corporate websites to complex web applications, we deliver solutions that are fast, secure, and scalable. Our development process emphasizes clean code, optimal performance, and search engine optimization.`,
    features: [
      {
        title: 'Responsive Design',
        description: 'Mobile-first designs that work seamlessly across all devices and screen sizes.',
      },
      {
        title: 'E-commerce Solutions',
        description: 'Custom online stores with secure payment processing and inventory management.',
      },
      {
        title: 'Content Management Systems',
        description: 'User-friendly CMS solutions for easy content updates and management.',
      },
      {
        title: 'Progressive Web Apps',
        description: 'Modern web applications that offer native app-like experiences.',
      },
      {
        title: 'API Integration',
        description: 'Seamless integration with third-party services and APIs.',
      },
      {
        title: 'Performance Optimization',
        description: 'Speed optimization and performance tuning for better user experience.',
      },
    ],
  },
  'ai-integration': {
    title: 'AI Integration',
    description: 'Leverage artificial intelligence to automate processes and enhance user experiences.',
    content: `Our AI integration services help businesses harness the power of artificial intelligence to improve efficiency and create innovative solutions. We develop custom AI solutions that automate processes, provide insights, and enhance user experiences.

    From chatbots to predictive analytics, we implement AI technologies that drive business growth and innovation. Our solutions are designed to be practical, scalable, and deliver measurable results.`,
    features: [
      {
        title: 'Chatbots & Virtual Assistants',
        description: 'Intelligent conversational interfaces for customer support and engagement.',
      },
      {
        title: 'Natural Language Processing',
        description: 'Text analysis and processing for automated understanding and response.',
      },
      {
        title: 'Machine Learning Integration',
        description: 'Custom ML models for prediction and pattern recognition.',
      },
      {
        title: 'Automated Decision Making',
        description: 'AI-powered systems for intelligent business decision support.',
      },
      {
        title: 'Predictive Analytics',
        description: 'Advanced analytics for forecasting and trend analysis.',
      },
      {
        title: 'Computer Vision Solutions',
        description: 'Image and video analysis for automated visual processing.',
      },
    ],
  },
  'mobile-apps': {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    content: `Our mobile app development services deliver high-quality applications for both iOS and Android platforms. We create engaging, user-friendly apps that provide value to your users while maintaining high performance and reliability.

    Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we deliver mobile applications that meet your business objectives and exceed user expectations.`,
    features: [
      {
        title: 'iOS Development',
        description: 'Native iOS apps with smooth performance and polished UX.',
      },
      {
        title: 'Android Development',
        description: 'Custom Android applications optimized for diverse devices.',
      },
      {
        title: 'Cross-platform Solutions',
        description: 'Efficient development for multiple platforms using modern frameworks.',
      },
      {
        title: 'App Store Optimization',
        description: 'Strategic optimization for better visibility in app stores.',
      },
      {
        title: 'Push Notifications',
        description: 'Engagement features to keep users informed and active.',
      },
      {
        title: 'Offline Functionality',
        description: 'Robust offline capabilities for uninterrupted user experience.',
      },
    ],
  },
  'custom-software': {
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    content: `Our custom software development services provide tailored solutions that address your unique business challenges. We work closely with you to understand your requirements and create software that streamlines your operations and drives growth.

    From automation tools to enterprise applications, we develop robust, scalable software solutions that give your business a competitive edge. Our focus is on delivering high-quality, maintainable code that provides long-term value.`,
    features: [
      {
        title: 'Business Process Automation',
        description: 'Custom automation solutions to streamline workflows and reduce manual tasks.',
      },
      {
        title: 'Enterprise Solutions',
        description: 'Scalable applications for large-scale business operations.',
      },
      {
        title: 'Cloud Integration',
        description: 'Cloud-native solutions with robust security and scalability.',
      },
      {
        title: 'Legacy System Migration',
        description: 'Modernization of existing systems with minimal disruption.',
      },
      {
        title: 'Database Design',
        description: 'Optimized database architecture for efficient data management.',
      },
      {
        title: 'API Development',
        description: 'Custom APIs for system integration and data exchange.',
      },
    ],
  },
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-primary"
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

        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="prose prose-lg prose-primary mx-auto">
            {service.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mt-6 text-lg leading-8 text-gray-600">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Key Features</h2>
            <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature.title} className="border-l-4 border-primary pl-6">
                  <dt className="text-lg font-semibold text-gray-900">{feature.title}</dt>
                  <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact us about {service.title}
            </Link>
            <Link
              href="/services"
              className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 