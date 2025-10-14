import React from 'react';
import { Award, Users, Clock, Heart, ArrowRight, Star, MapPin } from 'lucide-react';
import muf01 from "../../../assets/images/doc.jpg";
import { useNavigate } from "react-router-dom";

const AboutUsPreview = () => {
  const navigate = useNavigate();
  const stats = [
    {
      number: "15+",
      label: "Years of Good Products",
      icon: <Clock className="w-4 h-4 lg:w-5 lg:h-5" />,
      color: "from-amber-400 to-orange-500"
    },
    {
      number: "50K+",
      label: "Happy Customers",
      icon: <Users className="w-4 h-4 lg:w-5 lg:h-5" />,
      color: "from-pink-400 to-rose-500"
    },
    {
      number: "200+",
      label: "Delivered Products",
      icon: <Award className="w-4 h-4 lg:w-5 lg:h-5" />,
      color: "from-purple-400 to-indigo-500"
    },
    {
      number: "100%",
      label: "Made with Love",
      icon: <Heart className="w-4 h-4 lg:w-5 lg:h-5" />,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const values = [
   {
    title: "Quality Products",
    description: "Certified and approved medical products for your safety and well-being",
    emoji: "💊"
  },
  {
    title: "Trusted Suppliers",
    description: "We partner with reliable and licensed suppliers across South Africa",
    emoji: "🤝"
  },
  {
    title: "Affordable Care",
    description: "Accessible healthcare solutions at prices that fit your budget",
    emoji: "💵"
  },
  {
    title: "Nationwide Delivery",
    description: "Fast and reliable delivery to your doorstep across South Africa",
    emoji: "🚚"
  },
  {
    title: "Patient Support",
    description: "Our team is here to guide you with product information and care advice",
    emoji: "❤️"
  }
  ];

  return (
    <div className="py-8 lg:py-16 bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-100 to-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
                <Heart className="w-3 h-3 fill-current" />
                About Yavanc Health Care
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-4 leading-tight">
                Yavanc Health
                <span className="block text-green-300">Memories Since</span>
                <span className="block text-green-300">2015</span>
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-4 text-blue-400">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                🚚 ❤️
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                From our dedicated facilities to your important work, we provide high-quality products, premium materials, 
                and a commitment to excellence you can rely on every time.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100 hover:bg-white/80 transition-all duration-300">
                  <div className="text-xl sm:text-2xl flex-shrink-0">{value.emoji}</div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-blue-500 mb-1 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-blue-400 text-xs sm:text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group bg-gradient-to-r from-blue-200 to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1"
                onClick={() => navigate("/about")}
              >
                <span>Our Full Story</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="bg-white text-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300" onClick={() => navigate("/about")}>
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 lg:p-6 shadow-xl">
              {/* Fixed Image Container */}
              <div className="aspect-square bg-gradient-to-br from-white to-amber-50 rounded-xl overflow-hidden mb-4">
                <img 
                  src={muf01} 
                  alt="Yavanc Health Care" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quote */}
              <div className="bg-white/80 backdrop-blur-sm p-3 lg:p-4 rounded-xl">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-blue-500 italic text-xs sm:text-sm lg:text-base leading-relaxed mb-2">
                  "Each morning, we’re motivated to create high-quality lab products that help 
                   professionals deliver better healthcare outcomes."
                </blockquote>
                <div className="text-xs text-blue-700">
                  <p className="font-semibold">- John Doe</p>
                  <p>CEO & Founder</p>
                </div>
              </div>

              {/* Floating Elements - Hidden on small screens */}
              <div className="hidden sm:block absolute -top-3 -right-3 bg-blue-400 text-white p-2 rounded-full shadow-lg animate-bounce">
                <span className="text-xl">⚕️</span>
              </div>
              <div className="hidden sm:block absolute -bottom-3 -left-3 bg-emerald-400 text-white p-2 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <span className="text-xl">👩‍🔬</span>
              </div>
            </div>

            {/* Background Decorations - Hidden on small screens */}
            <div className="hidden sm:block absolute -z-10 top-6 -right-6 w-24 h-24 bg-pink-200 rounded-full opacity-60"></div>
            <div className="hidden sm:block absolute -z-10 -bottom-6 -left-6 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-400 via-blue-400 to-green-300 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 bg-white rounded-full"></div>
              <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-6 sm:w-10 h-6 sm:h-10 bg-white rounded-full"></div>
              <div className="absolute bottom-6 sm:bottom-12 left-8 sm:left-16 w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-full"></div>
              <div className="absolute bottom-4 sm:bottom-8 right-6 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              {/* Stats Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                  Good Numbers That Tell Our Story
                </h3>
                <div className="flex items-center justify-center gap-1 text-white/90">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-base">Proudly serving since 2009</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`bg-gradient-to-br ${stat.color} p-2 sm:p-3 rounded-xl shadow-lg mb-2 sm:mb-3 w-fit mx-auto group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-white">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{stat.number}</div>
                      <div className="text-white/90 text-xs sm:text-sm font-medium leading-tight">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPreview;