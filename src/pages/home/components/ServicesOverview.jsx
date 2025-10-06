import React from 'react';
import { ArrowRight, Clock, Truck, Heart, Users, Gift, ChefHat } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Custom Cakes",
      description: "Personalized cakes for weddings, birthdays, and special occasions",
      icon: <Heart className="w-6 h-6" />,
      bgColor: "from-pink-400 to-rose-500",
      hoverColor: "hover:from-pink-500 hover:to-rose-600",
      features: ["Wedding Cakes", "Birthday Cakes", "Custom Designs"],
      price: "From $30"
    },
    {
      id: 2,
      title: "Fresh Daily Bakes",
      description: "Fresh bread, pastries, and treats baked every morning",
      icon: <ChefHat className="w-6 h-6" />,
      bgColor: "from-amber-400 to-orange-500",
      hoverColor: "hover:from-amber-500 hover:to-orange-600",
      features: ["Fresh Bread", "Pastries", "Daily Specials"],
      price: "From $2"
    },
    {
      id: 3,
      title: "Party Catering",
      description: "Complete dessert catering for events and corporate functions",
      icon: <Users className="w-6 h-6" />,
      bgColor: "from-purple-400 to-indigo-500",
      hoverColor: "hover:from-purple-500 hover:to-indigo-600",
      features: ["Event Catering", "Corporate Orders", "Bulk Discounts"],
      price: "From $100"
    },
    {
      id: 4,
      title: "Gift Packages",
      description: "Beautiful gift boxes filled with our finest sweet treats",
      icon: <Gift className="w-6 h-6" />,
      bgColor: "from-emerald-400 to-teal-500",
      hoverColor: "hover:from-emerald-500 hover:to-teal-600",
      features: ["Gift Boxes", "Corporate Gifts", "Holiday Specials"],
      price: "From $15"
    },
    {
      id: 5,
      title: "Same-Day Delivery",
      description: "Fast delivery service across Harare and surrounding areas",
      icon: <Truck className="w-6 h-6" />,
      bgColor: "from-blue-400 to-cyan-500",
      hoverColor: "hover:from-blue-500 hover:to-cyan-600",
      features: ["Harare Delivery", "Same Day", "Free Over $25"],
      price: "From $3"
    },
    {
      id: 6,
      title: "Rush Orders",
      description: "Need it today? We've got you covered with our express service",
      icon: <Clock className="w-6 h-6" />,
      bgColor: "from-red-400 to-pink-500",
      hoverColor: "hover:from-red-500 hover:to-pink-600",
      features: ["2-Hour Service", "Emergency Orders", "Premium Support"],
      price: "From $5"
    }
  ];

  return (
    <div className="py-12 lg:py-16 bg-gradient-to-b from-white via-amber-50/30 to-orange-50/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <ChefHat className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
            Sweet Services
            <span className="block text-orange-600 text-2xl lg:text-3xl mt-1">
              Made Just for You
            </span>
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto leading-relaxed">
            From custom wedding cakes to daily fresh bakes, we offer comprehensive confectionery services 
            across Zimbabwe with quality you can taste and service you can trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-br ${service.bgColor} ${service.hoverColor} p-4 lg:p-6 text-white relative overflow-hidden transition-all duration-300`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-4 translate-x-4"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-2 -translate-x-2"></div>
                
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl w-fit mb-3 group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-white/90 text-xs lg:text-sm">{service.description}</p>
                </div>
              </div>

              {/* Service Body */}
              <div className="p-4 lg:p-6">
                <div className="space-y-3">
                  {/* Features */}
                  <div className="space-y-1">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-amber-800">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                        <span className="text-xs lg:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-amber-100">
                    <div className="text-amber-900">
                      <span className="text-base lg:text-lg font-bold">{service.price}</span>
                    </div>
                    <button className="group/btn bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-semibold text-xs lg:text-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-2xl p-6 lg:p-8 text-center text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 -translate-x-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 translate-x-16"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-white/30 rounded-full"></div>

          <div className="relative z-10">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Need a Custom Service?
            </h3>
            <p className="text-white/90 text-base lg:text-lg mb-6 max-w-2xl mx-auto">
              Have something special in mind? We love creating unique confectionery experiences. 
              Let's discuss your sweet dreams!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-amber-600 px-6 py-3 rounded-full font-bold text-base hover:bg-amber-50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
                Get Custom Quote
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-base border-2 border-white/30 hover:bg-white/30 hover:-translate-y-0.5 transition-all duration-300">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;