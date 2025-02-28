'use client';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname?.startsWith(href)
  }

  return (
    <>
      <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <div className="flex h-16 items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <div className="relative w-[250px] h-[150px] transition-transform duration-200 hover:scale-105">
                    <Image
                      src="/images/AkiliNovaLogo.svg"
                      alt="Akilinova Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                {/* Desktop menu - centered in remaining space */}
                <div className="hidden sm:flex flex-1 justify-center items-center">
                  <div className="flex items-center space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 text-lg font-medium transition-all duration-300 ${styles.menuItem} ${isCurrentPage(item.href)
                          ? 'text-primary scale-105'
                          : 'text-gray-900 hover:text-primary hover:scale-105'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6 transition-transform duration-200 rotate-90" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6 transition-transform duration-200" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile menu panel */}
            <Disclosure.Panel className="sm:hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={`block px-3 py-2 text-lg font-medium transition-all duration-300 ${styles.menuItem} ${isCurrentPage(item.href)
                      ? 'text-primary translate-x-2'
                      : 'text-gray-900 hover:text-primary hover:translate-x-2'
                      }`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
} 