import React from 'react';
import { Heart, Target, Clock, MapPin } from 'lucide-react';

const CompanyStory = () => {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-br from-[#e3f9fd] to-[#e3fdf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile First Layout - Stack on small screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image with Decoration */}
          <div className="relative order-2 lg:order-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-full">
              <div className="aspect-[4/5] bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <div className="text-center text-white p-6 lg:p-8">
                  <div className="text-4xl lg:text-6xl mb-3 lg:mb-4">🧪</div>
                  <p className="text-base lg:text-lg font-semibold">Our Humble Beginnings</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats - Responsive positioning */}
            <div className="absolute -bottom-4 lg:-bottom-6 -left-2 lg:-left-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-xl border border-teal-200 transform scale-75 lg:scale-100">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-teal-700 mb-1">10+</div>
                <div className="text-xs text-teal-500">Years of Innovation</div>
              </div>
            </div>
            
            <div className="absolute -top-4 lg:-top-6 -right-2 lg:-right-6 bg-cyan-600 text-white rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-xl transform scale-75 lg:scale-100">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold mb-1">5K+</div>
                <div className="text-xs opacity-90">Healthcare Clients Served</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-cyan-100/20 text-cyan-700 px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold mb-3 lg:mb-4">
                <Heart className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
                Our Journey in Labs
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-cyan-700 mb-4 lg:mb-6 leading-tight">
                Advancing Science
                <span className="block text-teal-500 text-2xl lg:text-5xl">Since 2015</span>
              </h2>
            </div>

            <div className="space-y-4 lg:space-y-6 text-cyan-700/90">
              <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-teal-500 flex-shrink-0" />
                  <h3 className="font-bold text-base lg:text-lg sm:hidden">Our Beginning</h3>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base lg:text-lg mb-2 hidden sm:block">Our Beginning</h3>
                  <p className="leading-relaxed text-sm lg:text-base">
                    What started as a small research lab in Johannesburg has grown into a leading supplier 
                    of high-quality lab products across South Africa. Our team combines expertise, precision, 
                    and dedication to support healthcare and scientific communities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <Target className="w-5 h-5 lg:w-6 lg:h-6 text-teal-500 flex-shrink-0" />
                  <h3 className="font-bold text-base lg:text-lg sm:hidden">Our Mission</h3>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base lg:text-lg mb-2 hidden sm:block">Our Mission</h3>
                  <p className="leading-relaxed text-sm lg:text-base">
                    To provide precise, safe, and innovative lab solutions that support scientific research 
                    and healthcare. Every product is designed to meet the highest quality standards, ensuring 
                    reliability and trust for our clients.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-teal-500 flex-shrink-0" />
                  <h3 className="font-bold text-base lg:text-lg sm:hidden">South African Roots</h3>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base lg:text-lg mb-2 hidden sm:block">South African Roots</h3>
                  <p className="leading-relaxed text-sm lg:text-base">
                    Proudly sourcing materials and products locally where possible, supporting South African 
                    communities and ensuring quality at every step. We deliver excellence from our labs 
                    directly to your hands.
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <div className="bg-teal-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base text-center">
                Expert-Led Research
              </div>
              <div className="bg-cyan-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base text-center">
                Reliable Lab Solutions
              </div>
            </div>
          </div>
        </div>

        {/* Additional Mobile-Only Features */}
        <div className="mt-8 lg:hidden">
          <div className="bg-white/70 rounded-2xl p-6 text-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-700 mb-1">10+</div>
                <div className="text-xs text-teal-500">Years of Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">5K+</div>
                <div className="text-xs text-teal-500">Healthcare Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
