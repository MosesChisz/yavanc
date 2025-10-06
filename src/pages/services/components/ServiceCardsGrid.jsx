import React from 'react';
import { Clock, Users, Cake, Truck, Star, Heart, Calendar } from 'lucide-react';

const ServiceCardsGrid = () => {
  const services = [
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Custom Cake Design",
      description: "Bespoke cakes tailored to your special occasion with personalized designs and flavors",
      price: "From $25",
      duration: "3-5 days",
      features: ["Free consultation", "Tasting session", "Delivery included", "3D designs available"],
      popular: true,
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Catering",
      description: "Complete baking solutions for weddings, corporate events, and parties",
      price: "From $100",
      duration: "1 week notice",
      features: ["Menu planning", "On-site setup", "Staff service", "Custom packaging"],
      popular: false,
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Daily Fresh Delivery",
      description: "Freshly baked goods delivered to your doorstep across Harare",
      price: "Free over $50",
      duration: "2-4 hours",
      features: ["Temperature control", "Real-time tracking", "Same day delivery", "Early morning slots"],
      popular: true,
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Subscription Box",
      description: "Weekly or monthly curated selection of our finest baked goods",
      price: "From $40/week",
      duration: "Ongoing",
      features: ["Customizable selection", "Free delivery", "Priority access", "Special discounts"],
      popular: false,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Baking Classes",
      description: "Learn traditional Zimbabwean baking techniques from our master bakers",
      price: "From $30/person",
      duration: "2-3 hours",
      features: ["Small groups", "All ingredients", "Take-home treats", "Recipe cards"],
      popular: true,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Corporate Gifting",
      description: "Elegant baked gift boxes for clients, employees, and business partners",
      price: "From $15/box",
      duration: "2 days",
      features: ["Brand customization", "Bulk discounts", "Nationwide shipping", "Luxury packaging"],
      popular: false,
      color: "from-rose-400 to-red-500",
      bgColor: "bg-rose-50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A7F3D0]/20 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Our Premium Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#8B4513] mb-4">
            Sweet Solutions for
            <span className="block text-[#EA580C]">Every Occasion</span>
          </h2>
          <p className="text-lg text-[#8B4513]/70 max-w-3xl mx-auto">
            From daily fresh deliveries to grand event catering, we offer comprehensive baking services 
            that cater to all your sweet needs with Zimbabwean warmth and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  MOST POPULAR
                </div>
              )}

              <div className={`${service.bgColor} rounded-2xl p-6 lg:p-8 h-full border-2 border-transparent group-hover:border-white group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl w-fit mb-6 text-white shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#8B4513] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#8B4513]/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-[#EA580C]">{service.price}</div>
                  <div className="flex items-center gap-1 text-[#8B4513]/70 text-sm">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#8B4513]/70">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-[#8B4513] to-[#7C3A0F] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#FDF6E3] to-amber-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#8B4513] mb-4">
              Need Something Special?
            </h3>
            <p className="text-[#8B4513]/70 mb-6 max-w-2xl mx-auto">
              We love challenges! If you don't see exactly what you're looking for, 
              we'll create a custom solution just for you.
            </p>
            <button className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-200">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsGrid;