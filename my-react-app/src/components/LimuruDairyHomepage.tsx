import { useState } from 'react';
import { Phone, Mail,CheckCircle, Milk, MapPin, SmilePlus, Menu, X } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import { Link } from "react-router-dom";
export default function LimuruDairyHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Stores', href: '/stores' },
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-visible">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="Limuru Fresh Dairy" className="h-16" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-green-600 transition font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-900 hover:text-green-600 transition"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <ul className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)} // close menu on click
                    className="block text-gray-900 hover:text-green-600 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-cyan-500">Limuru Dairy Farmers</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-green-500 relative inline-block">
              Co-Operative Society
              <svg
                className="absolute -bottom-2 right-0 w-24 h-6"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M 0 15 Q 50 0, 100 15" stroke="#22c55e" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Indulge in the creamy richness and natural 
            <br></br>smoothness of our dairy products, crafted 
            <br></br>with care for unmatched freshness.
          </p>
          <div className="flex flex-col items-left space-y-3 mb-12">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500" size={24} />
              <span className="text-lg text-gray-700">0713-874647614</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-red-500" size={24} />
              <span className="text-lg text-gray-700">limurudairy@gmail.com</span>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-900 rounded-3xl px-6 py-6 md:px-12 md:py-12 inline-block w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-left">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="text-green-500" size={24} />
                  <p className="text-2xl font-bold text-white">10,000+</p>
                </div>
                <p className="text-sm text-gray-300">Local Farmers Supported</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Milk className="text-white" size={24} />
                  <p className="text-2xl font-bold text-white">50,000+</p>
                </div>
                <p className="text-sm text-gray-300">Litres Processed Daily</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="text-red-500" size={24} />
                  <p className="text-2xl font-bold text-white">30+</p>
                </div>
                <p className="text-sm text-gray-300">Distribution Points</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <SmilePlus className="text-yellow-500" size={24} />
                  <p className="text-2xl font-bold text-white">100,000+</p>
                </div>
                <p className="text-sm text-gray-300">Happy Consumers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm mb-4 flex items-center">
              <span className="text-yellow-600 mr-2">↳</span> About Us
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              <span className="text-white">From </span>
              <span className="bg-yellow-600 text-black px-4 py-1 rounded-full inline-block">Farm</span>
              <br />
              <span className="text-white">to Your Table</span>
            </h2>
          </div>
          
          <div className="space-y-0 mb-12">
            <div className="border-t border-gray-700 py-6 grid md:grid-cols-2 gap-4">
              <p className="text-gray-400">Only fresh, additive-free ingredients used.</p>
              <h3 className="text-2xl md:text-3xl font-semibold">Pure, Natural Ingredients</h3>
            </div>
            
            <div className="border-t border-gray-700 py-6 grid md:grid-cols-2 gap-4">
              <p className="text-gray-400">Traditional methods, modern quality standards.</p>
              <h3 className="text-2xl md:text-3xl font-semibold">Crafted with Care</h3>
            </div>
            
            <div className="border-t border-gray-700 py-6 grid md:grid-cols-2 gap-4">
              <p className="text-gray-400">We support farmers and environment.</p>
              <h3 className="text-2xl md:text-3xl font-semibold">Community and Sustainability</h3>
            </div>
            <div className="border-t border-gray-700"></div>
          </div>
          
          {/* <div>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 transition inline-flex items-center">
              Read More
              <span className="ml-3 text-xl">→</span>
            </button>
          </div> */}
          <div className="flex flex-col items-center">
              
              <span
                className="
                  text-7xl
                  mb-4
                  animate-[megaGlowDown_1.6s_ease-in-out_infinite]
                "
                style={{ animationName: "megaGlowDown" }}
              >
                👇
              </span>

              {/* READ MORE BUTTON CENTERED */}
              <Link to="/about">
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 transition inline-flex items-center">
                      View more
                    </button>
                    </Link>
             
              {/* KEYFRAMES */}
              <style>{`
                @keyframes megaGlowDown {
                  0% {
                    opacity: 0.4;
                    transform: translateY(0);
                    filter:
                      drop-shadow(0 0 6px #fff)
                      drop-shadow(0 0 14px #ffe066)
                      drop-shadow(0 0 26px #ffd43b)
                      drop-shadow(0 0 40px #facc15);
                  }
                  50% {
                    opacity: 1;
                    transform: translateY(18px); /* Bigger downward bounce */
                    filter:
                      drop-shadow(0 0 12px #fff)
                      drop-shadow(0 0 26px #ffe066)
                      drop-shadow(0 0 50px #ffd43b)
                      drop-shadow(0 0 90px #facc15)
                      drop-shadow(0 0 140px #facc15);
                  }
                  100% {
                    opacity: 0.4;
                    transform: translateY(0);
                    filter:
                      drop-shadow(0 0 6px #fff)
                      drop-shadow(0 0 14px #ffe066)
                      drop-shadow(0 0 26px #ffd43b)
                      drop-shadow(0 0 40px #facc15);
                  }
                }
              `}</style>
            </div>


          </div>
      </section>

      {/* Services Section */}
          <section id="products" className="bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Header */}
              <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-12 md:mb-16 gap-6 md:gap-16">
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                    Take a Look<br />at What
                  </h2>
                  <div className="w-24 sm:w-32 h-1 bg-gray-300 mt-2 mx-auto md:mx-0"></div>
                </div>

                <div className="flex-shrink-0">
                  <div className="bg-yellow-500 rounded-full w-24 sm:w-32 h-24 sm:h-32 flex items-center justify-center">
                    <span className="text-black font-bold text-sm sm:text-base">PRODUCTS</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                    We Proudly<br />Offer
                  </h2>
                  <div className="w-24 sm:w-32 h-1 bg-gray-300 mt-2 mx-auto md:ml-auto"></div>
                </div>
              </div>

              {/* Product 1 - Milk */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-20">
                <div className="md:w-1/2">
                  <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                    <img src="/img1.png" alt="Shelf-Stable Milk" className="max-h-full w-auto object-contain" />
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Shelf-Stable, Farm-Fresh Taste</h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-6">
                    Naturally fresh, longer-lasting—enjoy rich, farm-fresh milk that stays delicious for days.
                  </p>
                  <Link to="/products">
                    <button className="border-2 border-black px-6 sm:px-8 py-2 sm:py-3 hover:bg-black hover:text-white transition font-medium">
                      View more
                    </button>
                  </Link>
                </div>
              </div>

              {/* Product 2 - Yogurt */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                    <img src="/img2.png" alt="Yogurt" className="max-h-full w-auto object-contain" />
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Wholesome Yoghurt You'll Love</h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-6">
                    Smooth, creamy yoghurt made from fresh local milk—naturally delicious every time.
                  </p>
                  <Link to="/products">
                    <button className="border-2 border-black px-6 sm:px-8 py-2 sm:py-3 hover:bg-black hover:text-white transition font-medium">
                      View more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
              {/* Footer */}
              <footer id="stores" className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-4 gap-8 mb-8">
                       {/* Quick Links */}
                  <div>
                      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="#home" className="hover:text-green-500 transition">Home</a></li>
                        <li><a href="#products" className="hover:text-green-500 transition">Products</a></li>
                        <li><a href="#about" className="hover:text-green-500 transition">About Us</a></li>
                        <li><a href="#stores" className="hover:text-green-500 transition">Stores</a></li>
                      </ul>
                    </div>
                    {/* About */}
                    <div>
                      {/* Social Links */}
                      <div className="flex space-x-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                          <Facebook size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                          <Twitter size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                          <Instagram size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Footer Bottom */}
                  <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 Limuru Dairy Farmers Co-Operative Society. All rights reserved.</p>
                  </div>
                </div>
              </footer>

                  </div>
                );
              }

