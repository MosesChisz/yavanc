import React from 'react';
import { Shield, Heart, Zap, Users, Leaf, Star } from 'lucide-react';

const ValuesMission = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Precision & Accuracy",
      description: "We ensure every lab product meets strict quality and accuracy standards.",
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50",
      features: ["Strict protocols", "Accurate results", "Reliable products"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Safety First",
      description: "Every product is tested thoroughly to guarantee safety for healthcare providers and patients.",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50",
      features: ["Quality testing", "Safe materials", "Regulatory compliance"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "We maintain consistent high standards across all lab products and services.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      features: ["Certified labs", "Reliable results", "Continuous monitoring"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community & Support",
      description: "We collaborate with local healthcare providers and communities to ensure access to essential products.",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50",
      features: ["Healthcare partnerships", "Local support", "Training initiatives"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously develop new products and improve existing ones using cutting-edge research.",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      features: ["R&D focus", "Modern techniques", "Innovative solutions"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "Our team strives for excellence in every aspect of product development and customer service.",
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50",
      features: ["Professional standards", "High-quality results", "Award-winning team"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#dbeeee] to-[#f0fdfa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A7F3D0]/20 text-[#065F46] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Our Core Values
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#065F46] mb-4">
            What Drives
            <span className="block text-[#10B981]">Our Lab Excellence</span>
          </h2>
          <p className="text-lg text-[#065F46]/70 max-w-3xl mx-auto">
            These core values guide our daily operations—from research and development to product delivery. They ensure our lab products meet the highest standards of quality, safety, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className={`${value.bgColor} rounded-2xl p-6 lg:p-8 h-full border-2 border-transparent group-hover:border-white group-hover:shadow-2xl transition-all duration-300`}>
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${value.color} p-3 rounded-xl w-fit mb-6 text-white shadow-lg`}>
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#065F46] mb-4">
                  {value.title}
                </h3>
                
                <p className="text-[#065F46]/80 leading-relaxed mb-6">
                  {value.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {value.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#065F46]/70">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-[#065F46] to-[#10B981] rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Our Mission
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed opacity-95">
              "To develop high-quality lab products with precision, safety, and innovation at the core. We aim to support healthcare providers and communities with reliable, cutting-edge medical solutions."
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-amber-200">
              <span className="text-2xl">🇿🇦</span>
              <span className="font-semibold">Proudly Serving South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesMission;
