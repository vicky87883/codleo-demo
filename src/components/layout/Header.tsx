'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, CONTACT_INFO } from '@/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownHover = (item: string) => {
    setActiveDropdown(item);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-md border-b-2 border-r-2 border-[#683bf2] relative">
      <div className="container mx-auto px-4 w-4/5">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#683bf2]">
            Codleo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#683bf2] transition-colors font-medium"
                >
                  {item.label}
                </Link>
                
                {item.children && item.children.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border-b-2 border-r-2 border-[#683bf2] rounded-br-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.children.map((child: { label: string; href: string }) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-4 py-2 text-gray-700 hover:text-[#683bf2] hover:bg-gray-50 transition-colors ${
                          activeDropdown === item.label ? 'border-l-4 border-[#683bf2]' : ''
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#683bf2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-gray-700 font-medium">{CONTACT_INFO.phone}</span>
            </div>
            <Link
              href="/contact"
              className="bg-[#683bf2] text-white px-6 py-2 rounded-lg hover:bg-[#5a2fd8] transition-colors font-medium"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-full bg-[#F1ECFF] hover:bg-[#E8E0FF] transition-colors"
          >
            <svg className="w-6 h-6 text-[#683bf2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[#683bf2] transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child: { label: string; href: string }) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1 text-gray-600 hover:text-[#683bf2] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-5 h-5 text-[#683bf2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-gray-700 font-medium">{CONTACT_INFO.phone}</span>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-[#683bf2] text-white px-6 py-2 rounded-lg hover:bg-[#5a2fd8] transition-colors font-medium text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
