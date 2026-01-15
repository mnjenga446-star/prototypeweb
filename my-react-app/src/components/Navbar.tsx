import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Stores', href: '#stores' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-3xl font-bold text-blue-600">LOGO</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-blue-600 text-lg font-semibold transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;