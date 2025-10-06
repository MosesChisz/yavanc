import React, { useState } from 'react';
import { MapPin, Truck, Clock, Phone, Check, X, Star, Shield } from 'lucide-react';

const DeliveryInformation = () => {
  const [selectedRegion, setSelectedRegion] = useState('harare');

  const deliveryAreas = {
    harare: {
      name: "Harare Metropolitan",
      coverage: ["Harare CBD", "Borrowdale", "Avondale", "Mbare", "Highfield", "Chitungwiza", "Epworth", "Glen View", "Kuwadzana", "Budiriro"],
      deliveryTime: "2-4 hours",
      cost: "Free for orders over $50 | $5 under $50",
      minOrder: "$15",
      features: ["Same-day delivery", "Temperature-controlled", "Real-time tracking", "Early morning slots"]
    },
    mashonaland: {
      name: "Mashonaland Provinces",
      coverage: ["Ruwa", "Norton", "Bindura", "Marondera", "Chinhoyi", "Kadoma", "Chegutu", "Shamva"],
      deliveryTime: "4-6 hours",
      cost: "$10 - $15 depending on location",
      minOrder: "$30",
      features: ["Next-day delivery", "Careful packaging", "SMS notifications", "Weekend delivery"]
    },
    majorCities: {
      name: "Other Major Cities",
      coverage: ["Bulawayo", "Mutare", "Gweru", "Kwekwe", "Masvingo", "Victoria Falls", "Kariba"],
      deliveryTime: "24-48 hours",
      cost: "$15 - $25 depending on location",
      minOrder: "$50",
      features: ["Advanced notice required", "Special packaging", "Courier service", "Tracking provided"]
    },
    rural: {
      name: "Rural Areas",
      coverage: ["All rural areas by special arrangement"],
      deliveryTime: "2-3 days",
      cost: "Custom quote based on location",
      minOrder: "$100",
      features: ["Special arrangement", "Weekly deliveries", "Bulk orders", "Pre-planning required"]
    }
  };

  const deliveryFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Temperature-controlled vehicles ensure your treats arrive perfect"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "95% of deliveries arrive within promised time window"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Live Updates",
      description: "SMS and call notifications about your delivery status"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Flexible Slots",
      description: "Choose delivery times that work for your schedule"
    }
  ];

  const currentArea = deliveryAreas[selectedRegion];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A7F3D0]/20 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Truck className="w-4 h-4" />
            Nationwide Delivery
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#8B4513] mb-4">
            Fresh to Your
            <span className="block text-[#EA580C]">Doorstep</span>
          </h2>
          <p className="text-lg text-[#8B4513]/70 max-w-3xl mx-auto">
            We deliver sweet happiness across Zimbabwe with care and precision. 
            Check your area below for delivery options and timing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Map & Region Selector */}
          <div>
            {/* Zimbabwe Map Visualization */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-8 aspect-square relative overflow-hidden mb-8">
              <div className="absolute inset-4 bg-white rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-[#8B4513] font-bold text-lg">Zimbabwe Delivery</p>
                  <p className="text-[#8B4513]/70">Covering Major Areas</p>
                </div>
              </div>

              {/* Interactive Points */}
              <button 
                onClick={() => setSelectedRegion('harare')}
                className={`absolute top-1/4 left-1/4 p-3 rounded-full transition-all duration-300 ${
                  selectedRegion === 'harare' 
                    ? 'bg-[#EA580C] text-white scale-110 shadow-2xl' 
                    : 'bg-white text-[#8B4513] shadow-lg'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </button>

              <button 
                onClick={() => setSelectedRegion('mashonaland')}
                className={`absolute top-1/3 right-1/3 p-3 rounded-full transition-all duration-300 ${
                  selectedRegion === 'mashonaland' 
                    ? 'bg-[#EA580C] text-white scale-110 shadow-2xl' 
                    : 'bg-white text-[#8B4513] shadow-lg'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </button>

              <button 
                onClick={() => setSelectedRegion('majorCities')}
                className={`absolute bottom-1/3 left-1/2 p-3 rounded-full transition-all duration-300 ${
                  selectedRegion === 'majorCities' 
                    ? 'bg-[#EA580C] text-white scale-110 shadow-2xl' 
                    : 'bg-white text-[#8B4513] shadow-lg'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery Features */}
            <div className="grid grid-cols-2 gap-4">
              {deliveryFeatures.map((feature, index) => (
                <div key={index} className="bg-[#FDF6E3] rounded-xl p-4 text-center">
                  <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] p-2 rounded-lg w-fit mx-auto mb-2 text-white">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-[#8B4513] text-sm mb-1">{feature.title}</h4>
                  <p className="text-[#8B4513]/70 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Delivery Details */}
          <div>
            {/* Region Selector */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
              {Object.entries(deliveryAreas).map(([key, area]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRegion(key)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedRegion === key
                      ? 'bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white shadow-lg'
                      : 'bg-amber-50 text-[#8B4513] hover:bg-amber-100'
                  }`}
                >
                  {area.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Delivery Details */}
            <div className="bg-gradient-to-br from-[#FDF6E3] to-amber-50 rounded-2xl p-6 lg:p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-2">
                <Truck className="w-6 h-6 text-[#EA580C]" />
                {currentArea.name}
              </h3>

              <div className="space-y-6">
                {/* Coverage Areas */}
                <div>
                  <h4 className="font-semibold text-[#8B4513] mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Areas Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentArea.coverage.map((area, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-[#8B4513] border border-amber-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#8B4513] mb-2">Delivery Time</h4>
                    <div className="flex items-center gap-2 text-[#EA580C] font-bold">
                      <Clock className="w-4 h-4" />
                      {currentArea.deliveryTime}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B4513] mb-2">Delivery Cost</h4>
                    <div className="text-[#8B4513] font-bold">{currentArea.cost}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B4513] mb-2">Minimum Order</h4>
                    <div className="text-[#8B4513] font-bold">{currentArea.minOrder}</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-[#8B4513] mb-3">Service Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentArea.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-[#8B4513]/70">
                        <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
                <p className="text-sm text-[#8B4513] mb-3">
                  Not sure about your area? Call us for delivery information:
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#EA580C] font-bold">
                    <Phone className="w-4 h-4" />
                    +263 77 123 4567
                  </div>
                  <button className="bg-[#8B4513] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7C3A0F] transition-colors">
                    Check My Area
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInformation;