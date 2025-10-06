import React from 'react';
import { MapPin, Truck, Heart, Users, Star } from 'lucide-react';

const LocationHighlight = () => {
  const serviceAreas = [
      {
        region: "Gauteng",
        areas: ["Johannesburg", "Pretoria", "Sandton", "Soweto", "Midrand"],
        delivery: "Free delivery"
      },
      {
        region: "Western Cape",
        areas: ["Cape Town", "Stellenbosch", "Paarl", "George", "Mossel Bay"],
        delivery: "Standard delivery"
      },
      {
        region: "KwaZulu-Natal",
        areas: ["Durban", "Pietermaritzburg", "Umhlanga", "Richards Bay", "Ballito"],
        delivery: "Standard delivery"
      },
      {
        region: "Eastern Cape",
        areas: ["Port Elizabeth (Gqeberha)", "East London", "Mthatha", "Grahamstown", "Queenstown"],
        delivery: "Special arrangement"
      },
      {
        region: "Other Provinces",
        areas: ["Bloemfontein", "Kimberley", "Polokwane", "Nelspruit", "Rustenburg"],
        delivery: "Special arrangement"
      }
  ];

  const achievements = [
    { icon: "🏆", value: "15+", label: "Years Serving" },
    { icon: "🚚", value: "50k+", label: "Deliveries Made" },
    { icon: "⭐", value: "4.9/5", label: "Customer Rating" },
    { icon: "❤️", value: "98%", label: "Repeat Customers" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#e3fdf5] to-[#e3fdf5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">sa</div>
        <div className="absolute top-40 right-20 text-4xl">🍰</div>
        <div className="absolute bottom-20 left-20 text-5xl">🥖</div>
        <div className="absolute bottom-10 right-10 text-6xl">🇿🇼</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0ca0f5f8]/10 text-[#0ca0f5f8] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 fill-current" />
            Proudly Serving
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0fee6c] mb-4">
            Serving Every Corner of
            <span className="block text-[#0ca0f5f8]">Our Beautiful Nation</span>
          </h2>
          <p className="text-lg text-[#0c79f5f8]/70 max-w-3xl mx-auto">
            From the busiest hospitals in Johannesburg to clinics across South Africa, we deliver high-quality laboratory products you can trust. 
            Precision-tested, reliable, and delivered with care.✅
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl p-8 aspect-square relative overflow-hidden">
              {/* Zimbabwe Map Outline */}
              <div className="absolute inset-8 bg-[#e3fdf5] rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🗺️</div>
                  <p className="text-[#0ca0f5f8] font-semibold">South Africa</p>
                  <p className="text-[#0ca0f5f8]/70 text-sm">Since 2009</p>
                </div>
              </div>

              {/* Floating Service Points */}
              <div className="absolute top-1/4 left-1/4 animate-pulse">
                <div className="bg-[#0ca0f5f8] text-white p-2 rounded-full shadow-lg">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-semibold text-[#0ca0f5f8] shadow whitespace-nowrap">
                  SA Hub
                </div>
              </div>

              <div className="absolute top-1/3 right-1/3 animate-pulse" style={{animationDelay: '1s'}}>
                <div className="bg-[#0ca0f5f8] text-white p-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-1/3 left-1/3 animate-pulse" style={{animationDelay: '2s'}}>
                <div className="bg-[#0ca0f5f8] text-white p-2 rounded-full shadow-lg">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-lg border border-blue-100">
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <div className="text-xl font-bold text-[#0ca0f5f8]">{achievement.value}</div>
                  <div className="text-xs text-[#0ca0f5f8]/70">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Service Areas */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e3fdf5]">
              <h3 className="text-2xl font-bold text-[#0ca0f5f8] mb-6 flex items-center gap-2">
                <Truck className="w-6 h-6 text-[#0ca0f5f8]" />
                Our Service Coverage
              </h3>
              
              <div className="space-y-6">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="border-l-4 border-[#0ca0f5f8] pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#0ca0f5f8]">{area.region}</h4>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {area.delivery}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.areas.map((areaName, areaIndex) => (
                        <span key={areaIndex} className="bg-[#e3fdf5] text-[#0ca0f5f8] px-2 py-1 rounded text-xs">
                          {areaName}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Promise */}
            <div className="bg-gradient-to-r from-[#0ca0f5f8] to-[#0c71f5f8] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">Our Delivery Promise</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Fast delivery of essential lab products directly to your facility within 2–4 hours.✅
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Temperature-controlled vehicles for perfect delivery
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Free delivery in Gauteng for orders over R500
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Special arrangements for nationwide
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="bg-[#0ca0f5f8] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0ca0f5f8] transition-colors duration-200 shadow-lg">
                Check Delivery to Your Area
              </button>
              <p className="text-sm text-[#0ca0f5f8]/70 mt-2">
                Call us: +27 63 150 1184 • Available 7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlight;