'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, Suspense } from 'react'

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  const linkClass = (href: string) => `
    text-foreground hover:text-primary transition font-medium
    ${isActive(href) ? 'text-primary border-b-2 border-primary pb-1' : ''}
  `

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              +
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline">alpo-DH</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass('/')}>
              الرئيسية
            </Link>
            <Link href="/blogs" className={linkClass('/blogs')}>
              المقالات
            </Link>
            <Link href="/about" className={linkClass('/about')}>
              عن الموقع
            </Link>
            <Link href="/contact" className={linkClass('/contact')}>
              تواصل معنا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link href="/" className={`block py-2 ${linkClass('/')}`}>
              الرئيسية
            </Link>
            <Link href="/blogs" className={`block py-2 ${linkClass('/blogs')}`}>
              المقالات
            </Link>
            <Link href="/about" className={`block py-2 ${linkClass('/about')}`}>
              عن الموقع
            </Link>
            <Link href="/contact" className={`block py-2 ${linkClass('/contact')}`}>
              تواصل معنا
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-16 bg-white border-b border-border" />}>
      <NavbarContent />
    </Suspense>
  )
}
