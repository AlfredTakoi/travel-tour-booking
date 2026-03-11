"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 glass-nav border-b border-slate-200/50 transition-all duration-300 ${
        isScrolled ? "h-16 bg-white/95 shadow-lg" : "h-20 bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-blue-600 p-2 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-800">
              Stay<span className="text-blue-600">Ease</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-10 font-semibold text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors relative group">
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/tours" className="hover:text-blue-600 transition-colors relative group">
              Tours
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${pathname.startsWith('/tours') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/gallery" className="hover:text-blue-600 transition-colors relative group">
              Gallery
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${pathname === '/gallery' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors relative group">
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          <Link
            href="/tours"
            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 btn-pulse hidden md:block"
          >
            Book Now
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-8 space-y-6 animate-fade-in-up ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className="block w-full text-left text-lg font-bold">
          Home
        </Link>
        <Link href="/tours" className="block w-full text-left text-lg font-bold">
          Tours
        </Link>
        <Link href="/gallery" className="block w-full text-left text-lg font-bold">
          Gallery
        </Link>
        <Link href="/contact" className="block w-full text-left text-lg font-bold">
          Contact
        </Link>
        <Link
          href="/tours"
          className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
