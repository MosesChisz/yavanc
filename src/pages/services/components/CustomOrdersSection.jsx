import React from 'react';
import { Heart, Calendar, Star, Award, Clock, Users } from 'lucide-react';

const CustomOrdersSection = () => {
  const occasions = [
    {
      icon: "💍",
      title: "Wedding Cakes",
      description: "Stunning multi-tier cakes that become the centerpiece of your special day",
      startingPrice: "$150",
      features: ["Free tasting session", "Delivery & setup", "Cake stand included", "6-month planning"],
      timeline: "3-6 months advance"
    },
    {
      icon: "🎂",
      title: "Birthday Celebrations",
      description: "Personalized cakes that make birthdays unforgettable at any age",
      startingPrice: "$35",
      features: ["Theme designs", "Age-specific", "Photo printing", "Same-day available"],
      timeline: "1-2 weeks advance"
    },
    {
      icon: "🎓",
      title: "Graduation Parties",
      description: "Celebrate academic achievements with custom-designed treats",
      startingPrice: "$45",
      features: ["School colors", "Degree themes", "Bulk discounts", "Graduation caps"],
      timeline: "2-3 weeks advance"
    },
    {
      icon: "👶",
      title: "Baby Showers",
      description: "Adorable creations for welcoming new additions to the family",
      startingPrice: "$40",
      features: ["Gender reveal", "Baby themes", "Mini cupcakes", "Diaper cakes"],
      timeline: "2-4 weeks advance"
    },
    {
      icon: "💼",
      title: "Corporate Events",
      description: "Professional baked goods for business meetings and corporate celebrations",
      startingPrice: "$60",
      features: ["Logo printing", "Brand colors", "Bulk orders", "Setup service"],
      timeline: "1-3 weeks advance"
    },
    {
      icon: "🎄",
      title: "Seasonal Specials",
      description: "Holiday-themed treats for Christmas, Easter, and cultural celebrations",
      startingPrice: "$30",
      features: ["Traditional recipes", "Limited edition", "Gift packaging", "Cultural themes"],
      timeline: "1-2 weeks advance"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, theme, and preferences",
      icon: "💬"
    },
    {
      step: "02",
      title: "Design & Quote",
      description: "We create a custom design and provide detailed pricing",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Tasting Session",
      description: "Sample flavors and finalize details (for large orders)",
      icon: "👅"
    },
    {
      step: "04",
      title: "Creation & Delivery",
      description: "We bake, decorate, and deliver your masterpiece",
      icon: "🚚"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FDF6E3] to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8BBD9]/20 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Custom Creations
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#8B4513] mb-4">
            Your Vision,
            <span className="block text-[#EA580C]">Our Masterpiece</span>
          </h2>
          <p className="text-lg text-[#8B4513]/70 max-w-3xl mx-auto">
            Special occasions deserve extraordinary cakes. Let us bring your vision to life with 
            custom-designed creations that tell your unique story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Process */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#8B4513] mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-[#EA580C]" />
              Our Custom Order Process
            </h3>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-amber-100 flex-1 group-hover:bg-white/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <h4 className="font-bold text-[#8B4513] text-lg">{step.title}</h4>
                    </div>
                    <p className="text-[#8B4513]/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-2xl p-6 mt-8 shadow-lg border border-amber-100">
              <h4 className="font-bold text-[#8B4513] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#EA580C]" />
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-amber-50 rounded-lg">
                  <div className="font-bold text-[#EA580C]">48h</div>
                  <div className="text-[#8B4513]/70">Min. Notice</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-lg">
                  <div className="font-bold text-[#EA580C]">100+</div>
                  <div className="text-[#8B4513]/70">Designs</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-lg">
                  <div className="font-bold text-[#EA580C]">Free</div>
                  <div className="text-[#8B4513]/70">Consultation</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-lg">
                  <div className="font-bold text-[#EA580C]">4.9★</div>
                  <div className="text-[#8B4513]/70">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Occasions Grid */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#8B4513] mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8 text-[#EA580C]" />
              Popular Occasions
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {occasions.map((occasion, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-amber-100 hover:shadow-lg hover:border-[#EA580C] transition-all duration-300 group">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{occasion.icon}</span>
                    <div>
                      <h4 className="font-bold text-[#8B4513] text-lg">{occasion.title}</h4>
                      <div className="text-[#EA580C] font-semibold">From {occasion.startingPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-[#8B4513]/70 text-sm mb-4 leading-relaxed">
                    {occasion.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {occasion.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-[#8B4513]/70">
                        <Star className="w-3 h-3 text-[#EA580C] fill-current" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8B4513]/60">{occasion.timeline}</span>
                    <button className="text-[#EA580C] font-semibold hover:underline">
                      Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#8B4513] to-[#7C3A0F] rounded-2xl p-6 mt-8 text-center text-white">
              <h4 className="font-bold text-lg mb-2">Ready to Create Magic?</h4>
              <p className="text-amber-100 text-sm mb-4">Let's discuss your vision over a free consultation</p>
              <button className="bg-white text-[#8B4513] px-6 py-2 rounded-full font-bold hover:bg-amber-50 transition-colors duration-200">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrdersSection;