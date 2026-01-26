'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl py-2 sm:py-3 md:py-4' : 'bg-transparent py-3 sm:py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="flex flex-row justify-between items-center gap-1 sm:gap-2 md:gap-4">
          {/* Logo */}
          <Link href="/" className="group relative flex-shrink-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white hover:text-[#6b9071] transition-all duration-300">
              S<span className="text-[#6b9071]">.</span>I
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6b9071] group-hover:w-full transition-all duration-300"></div>
          </Link>
          
          {/* Navigation Menu - Visible on all devices */}
          <div className="flex items-center gap-0.5 sm:gap-1 bg-white/5 backdrop-blur-md rounded-full p-0.5 sm:p-1 md:p-1.5 border border-white/10 overflow-x-auto scrollbar-hide flex-1 sm:flex-initial justify-center min-w-0">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path} 
                className={`relative px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full font-semibold text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  pathname === item.path
                    ? 'bg-[#6b9071] text-white shadow-lg shadow-[#6b9071]/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Let's Talk Button - Visible on all devices */}
          <Link 
            href="/contact"
            className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 bg-[#6b9071] text-white rounded-full font-bold text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#6b9071]/50 whitespace-nowrap flex-shrink-0"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
