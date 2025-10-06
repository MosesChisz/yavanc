import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, Clock, Cake } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = {
    ordering: {
      title: "Ordering Process",
      icon: "📝",
      questions: [
        {
          question: "How far in advance should I place my order?",
          answer: "We recommend ordering at least 48 hours in advance for standard cakes. For wedding cakes and large orders, please allow 2-6 weeks. However, we do accept same-day orders for simple designs when available."
        },
        {
          question: "Do you require a deposit for orders?",
          answer: "Yes, we require a 50% deposit for orders over $100 and full payment for wedding cakes. The deposit secures your order date and covers initial ingredients and planning."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can modify your order up to 48 hours before delivery. Cancellations made more than 72 hours in advance receive a full refund. Within 72 hours, the deposit is non-refundable as we've already started preparation."
        }
      ]
    },
    delivery: {
      title: "Delivery & Pickup",
      icon: "🚚",
      questions: [
        {
          question: "What areas in Zimbabwe do you deliver to?",
          answer: "We deliver throughout Harare Metropolitan area with free delivery for orders over $50. We also deliver to major cities like Bulawayo, Mutare, Gweru, and surrounding areas with varying delivery fees. Rural deliveries are available by special arrangement."
        },
        {
          question: "What are your delivery hours?",
          answer: "We deliver daily from 8:00 AM to 8:00 PM. Early morning deliveries (6:00-8:00 AM) are available for an additional $5 fee. Sunday deliveries are available for special occasions."
        },
        {
          question: "Can I pick up my order from your bakery?",
          answer: "Yes! Pickup is available from our Harare bakery at 123 Baker Street. Our pickup hours are Monday-Saturday 7:00 AM - 7:00 PM. Please bring your order confirmation when picking up."
        }
      ]
    },
    products: {
      title: "Products & Ingredients",
      icon: "🍰",
      questions: [
        {
          question: "Do you use halal ingredients?",
          answer: "Yes, all our ingredients are halal-certified. We maintain separate preparation areas for different dietary requirements. Please inform us of any specific dietary needs when ordering."
        },
        {
          question: "Can you accommodate dietary restrictions?",
          answer: "Absolutely! We offer gluten-free, dairy-free, vegan, and sugar-free options. Please notify us of any allergies or restrictions when ordering. Additional charges may apply for specialty ingredients."
        },
        {
          question: "How long do your cakes stay fresh?",
          answer: "Our cakes are best consumed within 3 days of delivery. Store in a cool, dry place. Refrigerate if containing fresh cream or dairy. Freezing is recommended for longer storage up to 3 months."
        }
      ]
    },
    special: {
      title: "Special Orders",
      icon: "🎨",
      questions: [
        {
          question: "Do you make wedding cakes?",
          answer: "Yes! Wedding cakes are our specialty. We offer free consultations, tasting sessions, and delivery setup. We require 3-6 months notice for wedding cakes to ensure perfect planning and execution."
        },
        {
          question: "Can you recreate a cake design from a photo?",
          answer: "We'd love to! Send us your inspiration photos and we'll create a custom quote. While we can't guarantee exact replication due to copyright, we'll capture the essence and style you're looking for."
        },
        {
          question: "Do you offer cake tasting sessions?",
          answer: "Yes, we offer complimentary tasting sessions for wedding cakes and orders over $200. For smaller orders, we offer a tasting box for $15 that can be applied to your final order."
        }
      ]
    }
  };

  const urgentQuestions = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "Need immediate assistance?",
      action: "Call +263 77 123 4567",
      description: "Available 7 days a week, 7 AM - 9 PM"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Prefer email?",
      action: "hello@sweetdelights.co.zw",
      description: "We respond within 2 hours during business hours"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Urgent order?",
      action: "Same-day delivery available",
      description: "Order before 12 PM for same-day delivery"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FDF6E3] to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8BBD9]/20 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Cake className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#8B4513] mb-4">
            Your Questions
            <span className="block text-[#EA580C]">Answered</span>
          </h2>
          <p className="text-lg text-[#8B4513]/70 max-w-3xl mx-auto">
            Find quick answers to common questions about ordering, delivery, and our products. 
            Can't find what you're looking for? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {Object.entries(faqCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    const element = document.getElementById(key);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left p-4 bg-white rounded-xl border border-amber-100 hover:border-[#EA580C] hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#8B4513] group-hover:text-[#EA580C] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#8B4513]/60">{category.questions.length} questions</p>
                    </div>
                  </div>
                </button>
              ))}

              {/* Quick Help */}
              <div className="bg-gradient-to-r from-[#8B4513] to-[#7C3A0F] rounded-xl p-4 text-white">
                <h4 className="font-bold mb-3">Quick Help</h4>
                <div className="space-y-3">
                  {urgentQuestions.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="text-amber-200 mt-0.5 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.text}</p>
                        <p className="text-amber-200 text-xs font-bold">{item.action}</p>
                        <p className="text-amber-100/80 text-xs">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {Object.entries(faqCategories).map(([key, category]) => (
                <div key={key} id={key} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#8B4513]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, index) => {
                      const isOpen = openItems.includes(`${key}-${index}`);
                      return (
                        <div key={index} className="bg-white rounded-xl border border-amber-100 overflow-hidden">
                          <button
                            onClick={() => toggleItem(`${key}-${index}`)}
                            className="w-full text-left p-6 flex items-center justify-between hover:bg-amber-50 transition-colors duration-200"
                          >
                            <span className="font-semibold text-[#8B4513] pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-[#EA580C] flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#EA580C] flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <div className="border-t border-amber-100 pt-4">
                                <p className="text-[#8B4513]/80 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-2xl p-8 text-center text-white mt-12">
              <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                Our customer service team is here to help you with any questions about our products, 
                delivery, or custom orders. We're just a call or message away!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#EA580C] px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors duration-200">
                  Call Us Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors duration-200">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;