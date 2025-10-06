// import React from 'react';
// import { Clock, Cake, Phone, Calendar, CheckCircle, Star, Truck, Heart } from 'lucide-react';

// const BusinessHours = () => {
//   const hours = [
//     { day: 'Monday - Friday', time: '7:00 AM - 7:00 PM', type: 'regular', note: 'Fresh baking all day' },
//     { day: 'Saturday', time: '8:00 AM - 6:00 PM', type: 'regular', note: 'Weekend specials available' },
//     { day: 'Sunday', time: '9:00 AM - 4:00 PM', type: 'regular', note: 'Pre-orders only' },
//     { day: 'Public Holidays', time: 'Special Hours Apply', type: 'holiday', note: 'Check our social media' }
//   ];

//   const getCurrentStatus = () => {
//     const now = new Date();
//     const day = now.getDay();
//     const hour = now.getHours();

//     // Sunday (0) hours: 9 AM - 4 PM
//     if (day === 0 && hour >= 9 && hour < 16) {
//       return { status: 'open', message: 'Currently Open - Pre-orders Only' };
//     }
//     // Monday-Friday (1-5) hours: 7 AM - 7 PM
//     if (day >= 1 && day <= 5 && hour >= 7 && hour < 19) {
//       return { status: 'open', message: 'Currently Open - Fresh Baking!' };
//     }
//     // Saturday (6) hours: 8 AM - 6 PM
//     if (day === 6 && hour >= 8 && hour < 18) {
//       return { status: 'open', message: 'Currently Open - Weekend Specials!' };
//     }
//     return { status: 'closed', message: 'Currently Closed - Online Orders Available' };
//   };

//   const currentStatus = getCurrentStatus();

//   const emergencyServices = [
//     { product: 'Blood Test Kits', availability: 'In stock', icon: '🩸' },
//     { product: 'COVID-19 Rapid Tests', availability: 'Fast delivery', icon: '🧪' },
//     { product: 'Microscopes & Lab Tools', availability: '2-3 days shipping', icon: '🔬' },
//     { product: 'Protective Gear (PPE)', availability: 'Available on order', icon: '🧤' }

//   ];

//   return (
//     <section className="py-12 lg:py-16 bg-gradient-to-br from-[#FDF6E3] to-[#e3fdf5] px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-[#0ca0f5f8]/10 text-[#0ca0f5f8] px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             <Clock className="w-4 h-4" />
//             Bakery Hours & Services
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-3">
//             Fresh Baking Schedule
//             <span className="block text-[#EA580C]">& Special Services</span>
//           </h2>
//           <p className="text-[#8B4513]/70 text-lg max-w-2xl mx-auto">
//             We're here to bake your sweet dreams into reality with flexible hours and special order options
//           </p>

//           <div className={`inline-flex items-center px-6 py-3 rounded-full font-bold text-sm shadow-lg mt-6 ${
//             currentStatus.status === 'open' 
//               ? 'bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white' 
//               : 'bg-[#8B4513] text-amber-100'
//           }`}>
//             <div className={`w-3 h-3 rounded-full mr-3 ${
//               currentStatus.status === 'open' ? 'bg-amber-200 animate-pulse' : 'bg-amber-400 animate-pulse'
//             }`}></div>
//             {currentStatus.message}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {/* Regular Hours Card */}
//           <div className="bg-white rounded-2xl shadow-xl border border-amber-200 overflow-hidden">
//             <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] p-6">
//               <div className="flex items-center text-white">
//                 <div className="bg-white/20 rounded-xl p-3 mr-4">
//                   <Cake className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">Regular Bakery Hours</h3>
//                   <p className="text-amber-100 text-sm">Fresh treats baked daily</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-6">
//               <div className="space-y-4">
//                 {hours.map((item, index) => (
//                   <div key={index} className={`flex justify-between items-center py-3 px-4 rounded-xl transition-all duration-200 ${
//                     item.type === 'holiday' 
//                       ? 'bg-amber-50 border-2 border-amber-200' 
//                       : 'bg-amber-50/50 hover:bg-amber-100/50'
//                   }`}>
//                     <div className="flex items-center">
//                       <Calendar className="h-4 w-4 text-amber-600 mr-3" />
//                       <div>
//                         <span className="font-semibold text-[#8B4513] text-sm">{item.day}</span>
//                         <p className="text-amber-600 text-xs">{item.note}</p>
//                       </div>
//                     </div>
//                     <span className={`font-bold text-sm ${
//                       item.type === 'holiday' ? 'text-[#EA580C]' : 'text-[#8B4513]'
//                     }`}>{item.time}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-[#8B4513] font-semibold text-sm">
//                       Same-day cake orders accepted until 12 PM
//                     </p>
//                     <p className="text-amber-700 text-xs mt-1">
//                       Fresh ingredients • Custom designs • Free consultation
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Special Services Card */}
//           <div className="bg-white rounded-2xl shadow-xl border border-amber-200 overflow-hidden">
//             <div className="bg-gradient-to-r from-[#8B4513] to-[#7C3A0F] p-6">
//               <div className="flex items-center text-white">
//                 <div className="bg-white/20 rounded-xl p-3 mr-4">
//                   <Star className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">Special Order Services</h3>
//                   <p className="text-amber-100 text-sm">For your extraordinary occasions</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-6">
//               <div className="space-y-4">
//                 {emergencyServices.map((service, index) => (
//                   <div key={index} className="flex justify-between items-center py-3 px-4 bg-amber-50 rounded-xl hover:bg-amber-100/50 transition-colors">
//                     <div className="flex items-center">
//                       <span className="text-2xl mr-3">{service.icon}</span>
//                       <div>
//                         <span className="font-semibold text-[#8B4513] text-sm">{service.product}</span>
//                       </div>
//                     </div>
//                     <span className="text-[#EA580C] font-bold text-xs bg-amber-100 px-2 py-1 rounded-full">
//                       {service.availability}
//                     </span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-6 p-4 bg-gradient-to-r from-[#FDF6E3] to-amber-100 rounded-xl border-2 border-amber-300">
//                 <div className="flex items-center mb-3">
//                   <Phone className="h-5 w-5 text-[#EA580C] mr-2" />
//                   <h4 className="font-bold text-[#8B4513] text-sm">Quick Order Hotline</h4>
//                 </div>
//                 <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white p-3 rounded-lg text-center mb-3">
//                   <p className="text-lg font-bold tracking-wide">+263 77 123 4567</p>
//                 </div>
//                 <div className="space-y-2 text-[#8B4513]/80 text-xs">
//                   <div className="flex items-center gap-2">
//                     <Truck className="h-3 w-3 text-green-600" />
//                     <span>Free delivery in Harare for orders over $50</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Heart className="h-3 w-3 text-pink-500" />
//                     <span>Free consultation for wedding cakes</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Star className="h-3 w-3 text-amber-500" />
//                     <span>Tasting sessions available</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Service Types */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <Cake className="h-8 w-8 text-white" />
//             </div>
//             <h3 className="font-bold text-[#8B4513] text-lg mb-2">Custom Cakes</h3>
//             <p className="text-[#8B4513]/70 text-sm">Personalized designs for every occasion with fresh ingredients</p>
//           </div>
          
//           <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="bg-gradient-to-r from-[#F8BBD9] to-[#EC4899] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <Truck className="h-8 w-8 text-white" />
//             </div>
//             <h3 className="font-bold text-[#8B4513] text-lg mb-2">Fast Delivery</h3>
//             <p className="text-[#8B4513]/70 text-sm">Temperature-controlled delivery across Harare metropolitan area</p>
//           </div>
          
//           <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="bg-gradient-to-r from-[#A7F3D0] to-[#10B981] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <Heart className="h-8 w-8 text-white" />
//             </div>
//             <h3 className="font-bold text-[#8B4513] text-lg mb-2">Event Catering</h3>
//             <p className="text-[#8B4513]/70 text-sm">Complete baking solutions for weddings, parties and corporate events</p>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="bg-gradient-to-r from-[#8B4513] to-[#7C3A0F] rounded-2xl p-8 text-center text-white shadow-2xl">
//           <h3 className="text-2xl lg:text-3xl font-bold mb-3">Ready to Order Something Sweet?</h3>
//           <p className="text-amber-100 mb-6 text-lg max-w-2xl mx-auto">
//             Whether it's a last-minute treat or a grand celebration cake, we're here to make it perfect
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a 
//               href="tel:+263771234567"
//               className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
//             >
//               <Phone className="w-5 h-5" />
//               Call to Order Now
//             </a>
//             <a 
//               href="#contact-form"
//               className="bg-white/20 backdrop-blur-sm text-white border-2 border-amber-300 px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all duration-200"
//             >
//               🎂 Online Cake Inquiry
//             </a>
//           </div>
//           <p className="text-amber-200 text-sm mt-4">
//             Same-day orders accepted until 12 PM • Free consultation for special occasions
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessHours;

import React from 'react';
import { Clock, FlaskConical, Phone, Calendar, CheckCircle, Star, Truck, Heart } from 'lucide-react';

const BusinessHours = () => {
  const hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM', type: 'regular', note: 'Open for lab product purchases' },
    { day: 'Saturday', time: '9:00 AM - 4:00 PM', type: 'regular', note: 'Limited services available' },
    { day: 'Sunday', time: 'Closed', type: 'regular', note: 'Emergency supply hotline only' },
    { day: 'Public Holidays', time: 'Special Hours Apply', type: 'holiday', note: 'Check our social media' }
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    // Sunday (0) closed except hotline
    if (day === 0) {
      return { status: 'closed', message: 'Closed - Emergency hotline only' };
    }
    // Monday-Friday (1-5) hours: 8 AM - 6 PM
    if (day >= 1 && day <= 5 && hour >= 8 && hour < 18) {
      return { status: 'open', message: 'Currently Open - Supplying lab products' };
    }
    // Saturday (6) hours: 9 AM - 4 PM
    if (day === 6 && hour >= 9 && hour < 16) {
      return { status: 'open', message: 'Currently Open - Weekend supplies available' };
    }
    return { status: 'closed', message: 'Currently Closed - Emergency hotline available' };
  };

  const currentStatus = getCurrentStatus();

  const products = [
    { product: 'Blood Test Kits', availability: 'In stock', icon: '🩸' },
    { product: 'COVID-19 Rapid Tests', availability: 'Fast delivery', icon: '🧪' },
    { product: 'Microscopes & Lab Tools', availability: '2-3 days shipping', icon: '🔬' },
    { product: 'Protective Gear (PPE)', availability: 'Available on order', icon: '🧤' }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-[#FDF6E3] to-[#e3fdf5] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0ca0f5f8]/10 text-[#0ca0f5f8] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            Lab Hours & Product Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-3">
            Reliable Access
            <span className="block text-[#0CA0F5]">to Lab Essentials</span>
          </h2>
          <p className="text-[#1E3A8A]/70 text-lg max-w-2xl mx-auto">
            Your trusted partner for medical lab equipment and supplies, available when you need them.
          </p>

          <div className={`inline-flex items-center px-6 py-3 rounded-full font-bold text-sm shadow-lg mt-6 ${
            currentStatus.status === 'open' 
              ? 'bg-gradient-to-r from-[#0CA0F5] to-[#1E3A8A] text-white' 
              : 'bg-[#1E3A8A] text-blue-100'
          }`}>
            <div className={`w-3 h-3 rounded-full mr-3 ${
              currentStatus.status === 'open' ? 'bg-green-300 animate-pulse' : 'bg-red-400 animate-pulse'
            }`}></div>
            {currentStatus.message}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Regular Hours Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0CA0F5] to-[#1E3A8A] p-6">
              <div className="flex items-center text-white">
                <div className="bg-white/20 rounded-xl p-3 mr-4">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Regular Lab Hours</h3>
                  <p className="text-blue-100 text-sm">Supplying trusted lab essentials daily</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className={`flex justify-between items-center py-3 px-4 rounded-xl transition-all duration-200 ${
                    item.type === 'holiday' 
                      ? 'bg-blue-50 border-2 border-blue-200' 
                      : 'bg-blue-50/50 hover:bg-blue-100/50'
                  }`}>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-blue-600 mr-3" />
                      <div>
                        <span className="font-semibold text-[#1E3A8A] text-sm">{item.day}</span>
                        <p className="text-blue-600 text-xs">{item.note}</p>
                      </div>
                    </div>
                    <span className={`font-bold text-sm ${
                      item.type === 'holiday' ? 'text-[#0CA0F5]' : 'text-[#1E3A8A]'
                    }`}>{item.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#1E3A8A] font-semibold text-sm">
                      Same-day dispatch for select products before 12 PM
                    </p>
                    <p className="text-blue-700 text-xs mt-1">
                      Fast service • Trusted brands • Reliable delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0CA0F5] p-6">
              <div className="flex items-center text-white">
                <div className="bg-white/20 rounded-xl p-3 mr-4">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Featured Products</h3>
                  <p className="text-blue-100 text-sm">Available and ready to ship</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {products.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-blue-50 rounded-xl hover:bg-blue-100/50 transition-colors">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <span className="font-semibold text-[#1E3A8A] text-sm">{item.product}</span>
                      </div>
                    </div>
                    <span className="text-[#0CA0F5] font-bold text-xs bg-blue-100 px-2 py-1 rounded-full">
                      {item.availability}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-[#FDF6E3] to-blue-100 rounded-xl border-2 border-blue-300">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-[#0CA0F5] mr-2" />
                  <h4 className="font-bold text-[#1E3A8A] text-sm">Emergency Supply Hotline</h4>
                </div>
                <div className="bg-gradient-to-r from-[#0CA0F5] to-[#1E3A8A] text-white p-3 rounded-lg text-center mb-3">
                  <p className="text-lg font-bold tracking-wide">+27 63 150 1184</p>
                </div>
                <div className="space-y-2 text-[#1E3A8A]/80 text-xs">
                  <div className="flex items-center gap-2">
                    <Truck className="h-3 w-3 text-green-600" />
                    <span>Fast nationwide delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-3 w-3 text-pink-500" />
                    <span>Trusted by clinics & hospitals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-amber-500" />
                    <span>Certified quality products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0CA0F5] rounded-2xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">Need Lab Products Today?</h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            From urgent supplies to bulk orders, we’ve got you covered with reliable lab essentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+263779876543"
              className="bg-gradient-to-r from-[#0CA0F5] to-[#1E3A8A] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call for Supplies
            </a>
            <a 
              href="#contact-form"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-blue-300 px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all duration-200"
            >
              🧪 Online Product Inquiry
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Same-day dispatch available • Certified quality • Nationwide delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;