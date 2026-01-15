import { Phone, Mail, Instagram, Linkedin, Twitter, Menu,X} from 'lucide-react';
import { useState } from 'react';

export default function LimuruDairyAbout() {
    const [menuOpen, setMenuOpen] = useState(false);
     
    
      const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About Us', href: '/about' },
        { name: 'Stores', href: '/stores' },
      ];
  return (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

                {/* Logo */}
                <div className="flex items-center">
                <img src="/logo.png" alt="Limuru Fresh Dairy" className="h-16" />
                </div>

                {/* Desktop Menu (Right Side) */}
                <nav className="hidden md:flex space-x-12">
                {navLinks.map(link => (
                    <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-900 hover:text-green-600 transition font-medium"
                    >
                    {link.name}
                    </a>
                ))}
                </nav>

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

            {/* Mobile Menu (Full Width) */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                <ul className="flex flex-col space-y-4 px-4 py-6">
                    {navLinks.map(link => (
                    <li key={link.name}>
                        <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-900 hover:text-green-600 font-medium"
                        >
                        {link.name}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </div>
        </header>


      {/* Hero Section - Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            LIMURU DAIRY <span className="text-green-500">STORY</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            From humble beginnings to 
            <br></br>trusted dairy, rooted in community <br></br>values.
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

          {/* Stats Bar */}
          <div className="bg-gray-900 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div>
              <div className="text-green-400 text-2xl font-bold mb-1">10,000+</div>
              <div className="text-sm text-gray-300">Local Farmers Supported</div>
            </div>
            <div>
              <div className="text-blue-400 text-2xl font-bold mb-1">50,000+</div>
              <div className="text-sm text-gray-300">Litres Processed Daily</div>
            </div>
            <div>
              <div className="text-red-400 text-2xl font-bold mb-1">30+</div>
              <div className="text-sm text-gray-300">Distribution Points</div>
            </div>
            <div>
              <div className="text-orange-400 text-2xl font-bold mb-1">400,000+</div>
              <div className="text-sm text-gray-300">Happy Consumers</div>
            </div>
          </div>
        </div>
      </section>

       {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white ">Limuru Dairy Visions</h2>
          </div>
          
          <div className="bg-gray-800 bg-opacity-60 rounded-2xl p-8 space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">To increase our farmers milk volume</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">To increase sales through value addition and product diversification</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">To transform the lives of our farmers, staff and community at large</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">To improve the quality of our products and services to fetch a better price</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">Limuru Dairy History</h2>
          </div>
          
          <div className="bg-gray-800 bg-opacity-60 rounded-2xl p-8">
            <div className="relative border-l-4 border-yellow-500 pl-8 space-y-6">
              <div>
                <p className="text-gray-200 leading-relaxed">
                  Limuru Dairy Farmers Co-operative Society was registered under the Co-operative Act on the 28th of April 1962. Operations started in March 1963, with just seven members.
                </p>
              </div>
              
              <div>
                <p className="text-gray-200 leading-relaxed">
                  In 1963 UNICEF supplied additional milk cans. In 1964 the management opened a store for the resale of farm inputs, feeds, and milk cans which the farmers were getting at exorbitant prices from private businessmen.
                </p>
              </div>
              
              <div>
                <p className="text-gray-200 leading-relaxed">
                  The society acquired its own farm land in the same year. In 1965 the society bought its first vehicle.
                </p>
              </div>
              
              <div>
                <p className="text-gray-200 leading-relaxed">
                  In 1966 construction work of the society's head office was started and was completed in November 1986. This is a four-story building (MAZIWA HOUSE). In 1967 the society, with the approval of the members and relevant government ministries started offering Artificial Insemination and Clinical services to members.
                </p>
              </div>
              
              <div>
                <p className="text-gray-200 leading-relaxed">
                  In 1997 Limuru Milk Processor began milk processing under the Limuru Fresh brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">GALLERY</h2>
          </div>

          
          
          <div className="relative max-w-2xl mx-auto">

            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg relative mr-20 z-10">
              <div className="aspect-[4/3] flex items-left justify-left">
                <p className="text-gray-500">leadership photo</p>
              </div>
            </div>
            
            
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-2xl relative -mt-20 ml-40 mr-0 z-20">
              <div className="aspect-[4/3] flex items-right justify-right">
                <p className="text-gray-600"> team photo</p>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <img src="/logo2.png" alt="Limuru Fresh Dairy" className="h-20" />
            </div>
              
            
          </div>
          
          <h2 className="text-3xl font-bold mb-8">OUR LOCATION</h2>
          
          <div className="space-y-2 mb-8">
            <p className="text-lg text-gray-300">MAZIWA HOUSE, 4TH FLOOR</p>
            <p className="text-gray-400">P.O. Box 8-00217, LIMURU</p>
            <p className="text-gray-300 mt-4">Cell: 0713-833814</p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* Footer Nav */}
          <nav className="flex justify-center gap-8 mb-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white">Products</a>
            <a href="#" className="text-gray-400 hover:text-white">About US</a>
            <a href="#" className="text-gray-400 hover:text-white">Stores</a>
          </nav>

          <p className="text-gray-500 text-sm">© 2024 Limuru Dairy. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}