"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { Landmark, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'


const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
// Using usePathname from next/navigation to get the current path
  const pathname = usePathname();


    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Project', href: '/project' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ]

     const isActive = (href: string) => pathname === href;

return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Landmark className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">BuildTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.href) 
                    ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                    : 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-blue-600 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href) ? 'text-blue-600 bg-blue-50 rounded-md' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header
