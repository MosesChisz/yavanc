import React from 'react';
import { Star, Cake, Truck, Clock, Heart } from 'lucide-react';

const ServicesHero = () => {
  const features = [
    {
      icon: <Cake className="w-6 h-6" />,
      text: "100+ Cake Designs"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      text: "Free Harare Delivery"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "24/7 Order Support"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Made with Love"
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#FDF6E3] to-amber-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🎂</div>
        <div className="absolute top-1/4 right-20 text-5xl">🍰</div>
        <div className="absolute bottom-20 left-20 text-6xl">🧁</div>
        <div className="absolute bottom-10 right-10 text-5xl">🥮</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#8B4513]/10 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              Sweet Experiences Since 2009
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#8B4513] mb-6 leading-tight">
              Beyond Baking,
              <span className="block text-[#EA580C]">Creating Memories</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#8B4513]/80 leading-relaxed mb-8 max-w-2xl">
              From everyday treats to once-in-a-lifetime celebrations, we pour our heart into every creation. 
              Experience the Sweet Delights difference with our comprehensive baking services tailored for Zimbabwean tastes.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-amber-100">
                  <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] p-2 rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-[#8B4513] text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                <Cake className="w-5 h-5" />
                Order Now
              </button>
              <button className="bg-white text-[#8B4513] border-2 border-amber-200 px-8 py-4 rounded-full font-bold text-lg hover:border-[#EA580C] hover:bg-amber-50 transition-all duration-200">
                Call: +263 77 123 4567
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-6">👑</div>
                <h3 className="text-2xl font-bold mb-2">Premium Service</h3>
                <p className="text-amber-100">Zimbabwe's #1 Bakery</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-2xl border border-amber-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#EA580C]">15+</div>
                <div className="text-xs text-[#8B4513]">Years Experience</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#8B4513] text-white p-4 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-xs opacity-90">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;