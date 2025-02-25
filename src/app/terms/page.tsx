'use client';

import Link from 'next/link';
import { FadeIn, SlideIn } from '@/app/components/animations';

export default function Terms() {
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
                            Terms of Service
                        </h1>

                        <div className="prose prose-lg prose-primary">
                            <p className="text-gray-600 mb-6">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                                <p className="text-gray-600">
                                    By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                                <p className="text-gray-600">
                                    Permission is granted to temporarily access our services for personal, non-commercial use. This license does not include:
                                </p>
                                <ul className="list-disc pl-6 mt-4 text-gray-600">
                                    <li>Modifying or copying our materials</li>
                                    <li>Using materials for commercial purposes</li>
                                    <li>Attempting to reverse engineer any software</li>
                                    <li>Removing any copyright or proprietary notations</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Availability</h2>
                                <p className="text-gray-600">
                                    We strive to provide uninterrupted service but cannot guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation of Liability</h2>
                                <p className="text-gray-600">
                                    We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any related matters.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Information</h2>
                                <p className="text-gray-600">
                                    If you have any questions about these Terms of Service, please contact us at{' '}
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