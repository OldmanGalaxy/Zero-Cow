"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/our-team", label: "Our Team" },
    { href: "/impact", label: "Impact" },
    { href: "/accomplishments", label: "Accomplishments" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dgreen font-lilita z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
            <Link href="/"> 
              <img 
                className="h-10 w-auto hover:rotate-[360deg] transition-transform duration-1000 ease-in-out" 
                src="/images/logo.png" 
                alt="Logo" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-ygreen relative overflow-hidden group px-3 py-2 rounded-md font-medium text-2xl transition-all duration-300 ease-in-out
                  ${pathname === link.href ? "bg-lgreen text-dgreen" : ""}
                  hover:text-lgreen hover:bg-ygreen hover:scale-105 transform`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-ygreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cream hover:text-dgreen hover:bg-ygreen focus:outline-none focus:ring-2 focus:ring-lgreen transition-all duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 transform rotate-0 hover:rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transform rotate-0 hover:rotate-180 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dgreen shadow-lg rounded-b-lg border-t border-lgreen">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-2
                  ${
                    pathname === link.href 
                    ? "bg-lgreen text-dgreen" 
                    : "text-ygreen hover:bg-ygreen hover:text-dgreen"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
