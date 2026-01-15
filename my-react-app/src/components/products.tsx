import {  Twitter, Instagram, Linkedin } from 'lucide-react';
import Navbar from './Navbar';
export default function Products() {
 

  return (
    <div>
      <Navbar/>
      <section id="home" className="bg-white py-20">
          <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-black">
                Discover naturally made<br />
                dairy products, 
                <span className="rounded-full bg-blue-500 text-white px-4 py-1 mx-1">healthy</span>,
                <br></br> 
                <span className="rounded-full bg-green-500 text-white px-4 py-1 mx-1">always</span> 
                delicious
              </span>
              <br></br>
            </h1>
            <p className="text-lg md:text-xxl text-bold mb-8 text-gray-600 max-w-3xl mx-auto mt-18">
              Our dairy products are crafted with care using fresh<br />
              natural ingredients sourced from local farms. Every sip<br />
              and bite delivers wholesome nutrition and rich, delicious<br />
              flavor you can trust.
            </p>
          </div>
        </section>
          
            <section id="products" className="bg-white py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Product 1 - Milk */}
                     <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-20">
                    <div className="md:w-1/2">
                        <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                        <img src="/product1.png" alt="Shelf-Stable Milk" className="max-h-full w-auto object-contain" />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Limuru Fresh Milk
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg mb-6">
                        Wholesome,smooth milk packed<br></br>
                        fresh for dairy family nourishment
                        </p>
                        <div className="max-w-md mx-0 px-4 py-6">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                Raw Milk
                                </div>
                                <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                Milk Fat
                                </div>
                                <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                Preservations
                                </div>

                            </div>
                            </div>
                    </div>
                    </div>

                    {/* Product 2 - Yogurt */}
                     <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-20">
                    <div className="md:w-1/2">
                        <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                        <img src="/product2.png" alt="Yogurt" className="max-h-full w-auto object-contain" />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Relish Yoghurt Strawberry
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg mb-6">
                        Creamy, smooth yoghurt blended<br></br>with sweet,juicy strawberry flavor __ <br></br> pure delight in every spoonful
                        </p>
                        <div className="max-w-md mx-0 px-4 py-6">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                Raw Milk
                                </div>
                                <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                Culture
                                </div>
                                <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                Flavour
                                </div>
                                </div>
                                </div>
                        
                                  </div>
                                  </div>

                                  {/* Product 3  */}
                                  <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-20">
                                  <div className="md:w-1/2">
                                      <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                                      <img src="/product3.png" alt="Cheese" className="max-h-full w-auto object-contain" />
                                      </div>
                                  </div>
                                  <div className="md:w-1/2 text-center md:text-left">
                                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                      Relish Yoghurt Vanilla
                                      </h3>
                                      <p className="text-gray-600 text-base sm:text-lg mb-6">
                                      Creamy, smooth yoghurt blended<br></br>with sweet,juicy strawberry flavor __ <br></br> pure delight in every spoonful
                                      </p>
                                      <div className="max-w-md mx-0 px-4 py-6">
                                          <div className="grid grid-cols-3 gap-4 text-center">
                                              <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                              Raw Milk
                                              </div>
                                              <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                              Culture
                                              </div>
                                              <div className="bg-gray-100 rounded-xl py-3 font-medium text-sm shadow">
                                              Flavour
                                              </div>
                                              </div>
                                              </div>
                                  </div>
                                  </div>
                              </div>
                        </section>
                        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
                      <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center">
                            <img src="/logo2.png" alt="Limuru Fresh Dairy" className="h-20" />
                          </div>
                            
                          
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

