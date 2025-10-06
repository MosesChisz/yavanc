import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const TestimonialsSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
      {
        id: 1,
        name: "Lynnet Brown",
        role: "Patient",
        location: "Johannesburg, South Africa",
        rating: 5,
        text: "The pharmacy provided exactly what I needed for my treatment. The staff were knowledgeable, friendly, and made sure I understood my medication properly. Highly recommend!",
        image: "🧑🏾‍⚕️",
        occasion: "Prescription Fulfillment",
        date: "September 2024"
      },
      {
        id: 2,
        name: "Michael Cooper",
        role: "Corporate Client",
        location: "Cape Town, South Africa",
        rating: 5,
        text: "Our company relies on this supplier for medical supplies. Delivery is always on time, and the products are top quality. Professional and reliable service every time.",
        image: "👨🏾‍💼",
        occasion: "Corporate Health Supplies",
        date: "August 2024"
      },
      {
        id: 3,
        name: "Thabisa Ndlovu",
        role: "Parent",
        location: "Durban, South Africa",
        rating: 5,
        text: "The pediatric vitamins and supplements we ordered arrived quickly and were well-packaged. My children love them, and I feel confident about their quality.",
        image: "👩🏾‍🦱",
        occasion: "Children's Health",
        date: "July 2024"
      },
      {
        id: 4,
        name: "James Mokoena",
        role: "Regular Customer",
        location: "Pretoria, South Africa",
        rating: 5,
        text: "I regularly order my daily supplements here. The staff remember my preferences, and everything is always fresh and properly labeled. Excellent routine service!",
        image: "👨🏾",
        occasion: "Daily Supplements",
        date: "Ongoing"
      },
      {
        id: 5,
        name: "Grace Sibanda",
        role: "Senior Patient",
        location: "Bloemfontein, South Africa",
        rating: 5,
        text: "For my chronic condition, this pharmacy always provides the right medications on time. The personalized advice from the staff has been invaluable for my health management.",
        image: "🧓🏾",
        occasion: "Chronic Care Support",
        date: "June 2024"
      }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className="py-12 lg:py-16 bg-gradient-to-b from-green-50 to-green-100 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-8 w-24 h-24 bg-pink-400 rounded-full"></div>
        <div className="absolute top-32 right-16 w-20 h-20 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-24 left-24 w-16 h-16 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-16 right-8 w-20 h-20 bg-rose-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 to-blue-100 text-blue-500 px-3 py-1 rounded-full font-medium mb-4 text-sm">
            <Heart className="w-3 h-3 fill-current" />
            Customer Love
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-4">
            Sweet Words
            <span className="block text-green-300 text-2xl lg:text-3xl mt-1">
              From Happy Hearts
            </span>
          </h2>
          <p className="text-lg text-blue-400 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear what our customers across Zimbabwe 
            have to say about their sweet experiences with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-4 right-4 text-pink-100">
              <Quote className="w-16 h-16 lg:w-20 lg:h-20" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-blue-300 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-blue-500 font-medium text-center leading-relaxed mb-6 max-w-2xl mx-auto">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {/* Avatar */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-3 rounded-full text-3xl shadow-md">
                  {currentTestimonial.image}
                </div>

                {/* Details */}
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold text-blue-500">{currentTestimonial.name}</h4>
                  <p className="text-blue-400 font-medium text-sm">{currentTestimonial.role}</p>
                  <p className="text-blue-400 text-xs">{currentTestimonial.location}</p>
                </div>

                {/* Occasion Badge */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-100 px-3 py-1 rounded-full">
                  <p className="text-blue-500 font-semibold text-xs">{currentTestimonial.occasion}</p>
                  <p className="text-blue-400 text-xs">{currentTestimonial.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-white shadow-md p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-500 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white shadow-md p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-500 transition-all duration-300 group"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Customer Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-3 rounded-xl transition-all duration-300 text-center ${
                index === currentIndex
                  ? 'bg-gradient-to-br from-blue-100 to-blue-100 shadow-md scale-105'
                  : 'bg-white/60 hover:bg-white/80 hover:shadow-sm'
              }`}
            >
              <div className="text-2xl mb-1">{testimonial.image}</div>
              <p className="font-semibold text-blue-500 text-xs">{testimonial.name}</p>
              <p className="text-blue-500 text-xs">{testimonial.location}</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 text-blue-400 fill-current" />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-400 via-blue-500 to-green-300 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Ready to Create Your Great Memory?
            </h3>
            <p className="text-white/90 text-base mb-6 max-w-xl mx-auto">
              Join thousands of happy customers across South Africa and let us make your next celebration unforgettable.
            </p>
            <button className="bg-white text-blue-400 px-6 py-3 rounded-full font-bold text-base hover:bg-pink-50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg" onClick={() => navigate("/shop")}>
              Order Your Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;