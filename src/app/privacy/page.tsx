'use client';

import Link from 'next/link';
import { FadeIn, SlideIn } from '@/app/components/animations';

export default function Privacy() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SlideIn>
                    <div className="mb-8">
                        <Link
                            href="/"
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
                            Back to Home
                        </Link>
                    </div>
                </SlideIn>

                <FadeIn>
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                            Privacy Policy
                        </h1>

                        <div className="prose prose-lg prose-primary">
                            <p className="text-gray-600 mb-6">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                                <p className="text-gray-600">
                                    We collect information that you provide directly to us, including when you fill out forms, communicate with us, or use our services. This may include your name, email address, phone number, and any other information you choose to provide.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                                <p className="text-gray-600">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 mt-4 text-gray-600">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Communicate with you about our services</li>
                                    <li>Respond to your requests and inquiries</li>
                                    <li>Monitor and analyze trends and usage</li>
                                    <li>Protect against fraud and unauthorized access</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                                <p className="text-gray-600">
                                    We do not share your personal information with third parties except as described in this privacy policy or with your consent.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Security</h2>
                                <p className="text-gray-600">
                                    We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
                                <p className="text-gray-600">
                                    If you have any questions about this Privacy Policy, please contact us at{' '}
                                    <a href="mailto:info@akilinova.tech" className="text-primary hover:text-primary-dark">
                                        info@akilinova.tech
                                    </a>
                                    .
                                </p>
                            </section>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
} 