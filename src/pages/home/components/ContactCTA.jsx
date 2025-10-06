import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Zap,
  Heart,
} from "lucide-react";

const ContactCTA = () => {
  const contactMethods = [
    {
      id: 1,
      title: "WhatsApp Order",
      subtitle: "Quick & Easy",
      description: "Order directly via WhatsApp for fastest service",
      number: "+27 63 150 1184",
      action: "Chat Now",
      icon: <MessageCircle className="w-6 h-6" />,
      bgColor: "from-green-400 to-emerald-500",
      hoverColor: "hover:from-green-500 hover:to-emerald-600",
      badge: "Most Popular",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      title: "Call Direct",
      subtitle: "Speak to Us",
      description: "Call for custom orders and consultations",
      number: "+27 63 150 1184",
      action: "Call Now",
      icon: <Phone className="w-6 h-6" />,
      bgColor: "from-blue-400 to-cyan-500",
      hoverColor: "hover:from-blue-500 hover:to-cyan-600",
      badge: "Instant Response",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 3,
      title: "Email Us",
      subtitle: "Detailed Orders",
      description: "Perfect for complex custom cake requests",
      number: "orders@sweetdelights.co.zw",
      action: "Email Now",
      icon: <Mail className="w-6 h-6" />,
      bgColor: "from-purple-400 to-indigo-500",
      hoverColor: "hover:from-purple-500 hover:to-indigo-600",
      badge: "24h Response",
      badgeColor: "bg-purple-100 text-purple-800",
    },
  ];

  const quickInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Visit Our Bakery",
      info: "2 Viner Road, Elma Park, Edenvale",
      subInfo: "South Africa",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Opening Hours",
      info: "Mon-Sat: 6:00 AM - 8:00 PM",
      subInfo: "Sun: 8:00 AM - 6:00 PM",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: "Same Day Delivery",
      info: "Order before 2:00 PM",
      subInfo: "Harare & Surroundings",
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-gradient-to-b from-green-50 via-green-80 to-green-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-32 h-32 bg-pink-400 rounded-full"></div>
        <div className="absolute top-24 right-16 w-24 h-24 bg-amber-400 rounded-full"></div>
        <div className="absolute bottom-16 left-24 w-20 h-20 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-32 right-8 w-28 h-28 bg-rose-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-400 px-3 py-1 rounded-full font-medium mb-4 text-sm">
            <Heart className="w-3 h-3 fill-current" />
            Get In Touch
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-4">
            Let's Create Something
            <span className="block text-green-300 text-2xl lg:text-3xl mt-1">
              Sweet Together!
            </span>
          </h2>
          <p className="text-lg text-blue-400 max-w-2xl mx-auto leading-relaxed">
            Ready to place an order or have questions? We're here to help make
            your sweet dreams come true. Choose your preferred way to connect
            with us!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1 relative"
            >
              {/* Badge */}
              <div
                className={`absolute top-3 right-3 ${method.badgeColor} px-2 py-1 rounded-full text-xs font-semibold`}
              >
                {method.badge}
              </div>

              {/* Header */}
              <div
                className={`bg-gradient-to-br ${method.bgColor} ${method.hoverColor} p-4 lg:p-6 text-white relative overflow-hidden transition-all duration-300`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-4 translate-x-4"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-3 -translate-x-3"></div>

                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl w-fit mb-3 group-hover:scale-105 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                  <p className="text-white/90 font-medium text-sm">
                    {method.subtitle}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 lg:p-6">
                <p className="text-blue-500 mb-4 leading-relaxed text-sm">
                  {method.description}
                </p>

                <div className="mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p className="text-blue-500 font-bold text-base break-all">
                      {method.number}
                    </p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-300 to-blue-400 text-white py-3 rounded-full font-bold text-base hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1 group/btn">
                  {method.action}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {quickInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-center md:text-left"
              >
                <div className="bg-gradient-to-br from-blue-300 to-blue-400 text-white p-2 rounded-xl shadow-md flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-blue-500 mb-1 text-sm">
                    {info.title}
                  </h4>
                  <p className="text-blue-600 font-medium text-sm">
                    {info.info}
                  </p>
                  <p className="text-blue-500 text-xs">{info.subInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-300 rounded-2xl p-6 lg:p-8 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute top-12 right-6 w-6 h-6 bg-white rounded-full"></div>
            <div className="absolute bottom-6 left-12 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full w-fit mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Need It Today? We've Got You!
            </h3>
            <p className="text-white/90 text-base mb-6 max-w-xl mx-auto">
              Last-minute celebration? Don't worry! Call our emergency hotline
              for same-day rush orders. We're here to save your special moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-bold text-lg">
                  Emergency: +27 83 742 4056 PRODUCTS
                </span>
              </div>
              <button className="bg-white text-blue-400 px-6 py-2 rounded-full font-bold text-sm hover:bg-red-50 transition-colors duration-300">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-8">
          <p className="text-blue-500 text-base mb-3">
            Join over 50,000+ happy customers across Zimbabwe
          </p>
          <div className="flex justify-center items-center gap-1 text-blue-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">
                  ⭐
                </span>
              ))}
            </div>
            <span className="font-bold text-lg">4.9/5</span>
            <span className="text-blue-500 text-sm">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
