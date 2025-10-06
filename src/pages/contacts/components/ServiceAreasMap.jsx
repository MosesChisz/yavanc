// import React from 'react';
// import { MapPin, Truck, Phone, Cake, Star, Clock } from 'lucide-react';

// const ServiceAreasMap = () => {
//   const serviceAreas = [
//     'Harare CBD',
//     'Borrowdale',
//     'Avondale',
//     'Mount Pleasant',
//     'Highlands',
//     'Glen Lorne',
//     'Chitungwiza',
//     'Epworth',
//     'Norton',
//     'Ruwa'
//   ];

//   const deliveryZones = [
//     { zone: 'Zone 1 (Free Delivery)', areas: ['Harare CBD', 'Avondale', 'Mount Pleasant'], minOrder: '$50', time: '2-4 hours' },
//     { zone: 'Zone 2 ($5 Delivery)', areas: ['Borrowdale', 'Highlands', 'Glen Lorne'], minOrder: '$30', time: '3-5 hours' },
//     { zone: 'Zone 3 ($10 Delivery)', areas: ['Chitungwiza', 'Epworth', 'Norton', 'Ruwa'], minOrder: '$50', time: '4-6 hours' }
//   ];

//   return (
//     <section className="py-12 lg:py-16 bg-gradient-to-br from-[#FDF6E3] to-amber-50 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-[#8B4513]/10 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             <Truck className="w-4 h-4" />
//             Delivery Areas
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-3">
//             We Deliver Sweetness Across
//             <span className="block text-[#EA580C]">Harare & Beyond</span>
//           </h2>
//           <p className="text-[#8B4513]/70 text-lg max-w-2xl mx-auto">
//             Fresh cakes and treats delivered to your doorstep across Harare metropolitan area
//           </p>
//           <div className="flex items-center justify-center mt-4 text-[#8B4513]/60 text-sm">
//             <MapPin className="h-4 w-4 mr-2" />
//             <span>17 Park St, Harare, Zimbabwe</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* Interactive Google Map */}
//           <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-200">
//             <div className="mb-4">
//               <h3 className="text-xl font-bold text-[#8B4513] mb-2 flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-[#EA580C]" />
//                 Visit Our Bakery
//               </h3>
//               <p className="text-[#8B4513]/70 text-sm">Come see where the magic happens! Visit us for cake tastings and consultations.</p>
//             </div>
            
//             <div className="relative rounded-xl overflow-hidden shadow-lg">
//               <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1975662455243!2d31.0417933751751!3d-17.829371083135044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4fb4f79c3c5%3A0x2824047fce46798c!2s17%20Park%20St%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sza!4v1758882793811!5m2!1sen!2sza"
//                 width="100%"
//                 height="300"
//                 style={{border:0}}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="w-full h-64 lg:h-80 rounded-lg"
//                 title="Sweet Delights Bakery Location"
//               />
              
//               <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-[#EA580C] rounded-full animate-pulse"></div>
//                   <div>
//                     <div className="text-sm font-bold text-[#8B4513]">Sweet Delights Bakery</div>
//                     <div className="text-xs text-[#8B4513]/70">17 Park St, Harare</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Phone className="h-4 w-4 text-[#EA580C]" />
//                   <span className="text-[#8B4513] font-semibold text-sm">Quick Directions</span>
//                 </div>
//                 <a 
//                   href="https://maps.google.com/?q=17+Park+St,+Harare,+Zimbabwe"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200"
//                 >
//                   Get Directions
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Delivery Information */}
//           <div className="space-y-6">
//             {/* Delivery Zones */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-200">
//               <div className="flex items-start gap-3 mb-4">
//                 <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-xl p-3">
//                   <Truck className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-[#8B4513] mb-1">Delivery Zones & Pricing</h3>
//                   <p className="text-[#8B4513]/70 text-sm">We deliver fresh cakes across Harare with temperature-controlled vehicles</p>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {deliveryZones.map((zone, index) => (
//                   <div key={index} className="border-l-4 border-amber-400 pl-4 py-2">
//                     <div className="flex justify-between items-start mb-1">
//                       <h4 className="font-semibold text-[#8B4513] text-sm">{zone.zone}</h4>
//                       <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-bold">
//                         {zone.minOrder} min
//                       </span>
//                     </div>
//                     <div className="text-[#8B4513]/70 text-xs mb-2">
//                       {zone.areas.join(', ')}
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-[#EA580C] font-semibold">
//                       <Clock className="w-3 h-3" />
//                       {zone.time} delivery
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Areas */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-200">
//               <div className="flex items-center gap-2 mb-4">
//                 <MapPin className="h-5 w-5 text-[#EA580C]" />
//                 <h3 className="text-lg font-bold text-[#8B4513]">Areas We Serve</h3>
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 {serviceAreas.map((area, index) => (
//                   <div key={index} className="flex items-center gap-2 p-2 hover:bg-amber-50 rounded-lg transition-colors">
//                     <div className="w-2 h-2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-full"></div>
//                     <span className="text-[#8B4513] font-medium text-sm">{area}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Delivery Promise */}
//             <div className="bg-gradient-to-r from-[#8B4513] to-[#7C3A0F] rounded-2xl p-5 text-white shadow-lg">
//               <div className="flex items-center gap-3 mb-3">
//                 <Star className="h-5 w-5 text-amber-300" />
//                 <h4 className="font-bold text-lg">Our Delivery Promise</h4>
//               </div>
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
//                   <span>Temperature-controlled delivery vehicles</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
//                   <span>Careful handling to preserve cake decorations</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
//                   <span>Text notifications with delivery updates</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
//                   <span>Same-day delivery for orders before 12 PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-12 text-center">
//           <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-amber-200">
//             <div className="flex justify-center mb-4">
//               <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] p-3 rounded-full">
//                 <Cake className="h-8 w-8 text-white" />
//               </div>
//             </div>
//             <h3 className="text-2xl lg:text-3xl font-bold text-[#8B4513] mb-3">
//               Ready to Order Your Perfect Cake?
//             </h3>
//             <p className="text-[#8B4513]/70 mb-6 max-w-2xl mx-auto text-lg">
//               Whether you're in our core delivery area or nearby, we'll make sure your cake arrives fresh and beautiful.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="tel:+263771234567"
//                 className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
//               >
//                 <Phone className="w-4 h-4" />
//                 Call to Order
//               </a>
//               <a 
//                 href="#contact-form"
//                 className="bg-white text-[#8B4513] border-2 border-amber-300 px-8 py-3 rounded-full font-bold hover:bg-amber-50 hover:border-[#EA580C] transition-all duration-200"
//               >
//                 Get Cake Quote
//               </a>
//             </div>
//             <p className="text-[#8B4513]/60 text-sm mt-4">
//               Not sure about your area? Call us! We might be able to make special arrangements.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceAreasMap;

import React from 'react';
import { MapPin, Truck, Phone, Stethoscope, Star, Clock } from 'lucide-react';

const ServiceAreasMap = () => {
  const serviceAreas = [
    'Johannesburg CBD',
    'Sandton',
    'Randburg',
    'Rosebank',
    'Midrand',
    'Soweto',
    'Pretoria',
    'Centurion',
    'Kempton Park',
    'Bedfordview'
  ];

  const deliveryZones = [
    { zone: 'Zone 1 (Free Delivery)', areas: ['Johannesburg CBD', 'Rosebank', 'Sandton'], minOrder: 'R500', time: '2-4 hours' },
    { zone: 'Zone 2 (R50 Delivery)', areas: ['Randburg', 'Midrand', 'Bedfordview'], minOrder: 'R300', time: '3-5 hours' },
    { zone: 'Zone 3 (R100 Delivery)', areas: ['Pretoria', 'Centurion', 'Soweto', 'Kempton Park'], minOrder: 'R500', time: '4-6 hours' }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Truck className="w-4 h-4" />
            Delivery Areas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Reliable Medical Supplies Delivery
            <span className="block text-indigo-600">Across Gauteng & Beyond</span>
          </h2>
          <p className="text-blue-800/70 text-lg max-w-2xl mx-auto">
            Essential medical products delivered safely and on time to hospitals, labs, and clinics across Gauteng.
          </p>
          <div className="flex items-center justify-center mt-4 text-blue-700/70 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>2 Viner Road, Elma Park, Edenvale, South Africa</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Interactive Google Map */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-200">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                Visit Our Office
              </h3>
              <p className="text-blue-800/70 text-sm">Come meet our specialists and explore our full range of healthcare products.</p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.302948632847!2d28.0473!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950bf21e23%3A0xa9e!2sJohannesburg%20CBD!5e0!3m2!1sen!2sza!4v1696600000000"
                width="100%"
                height="300"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 lg:h-80 rounded-lg"
                title="Medical Supplies Location"
              />
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-bold text-blue-900">Yavanc Supplies</div>
                    <div className="text-xs text-blue-700/70">2 Viner Road, Elma Park, Edenvale</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-indigo-600" />
                  <span className="text-blue-900 font-semibold text-sm">Quick Directions</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=123+Health+Ave,+Johannesburg,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-6">
            {/* Delivery Zones */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-3">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Delivery Zones & Pricing</h3>
                  <p className="text-blue-800/70 text-sm">We deliver critical medical supplies with strict quality and safety standards.</p>
                </div>
              </div>

              <div className="space-y-4">
                {deliveryZones.map((zone, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-blue-900 text-sm">{zone.zone}</h4>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                        {zone.minOrder} min
                      </span>
                    </div>
                    <div className="text-blue-800/70 text-xs mb-2">
                      {zone.areas.join(', ')}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-indigo-600 font-semibold">
                      <Clock className="w-3 h-3" />
                      {zone.time} delivery
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-bold text-blue-900">Areas We Serve</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                    <span className="text-blue-900 font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Promise */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-2xl p-5 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Star className="h-5 w-5 text-yellow-300" />
                <h4 className="font-bold text-lg">Our Delivery Promise</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Temperature-controlled supply chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Secure packaging for all medical products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Real-time tracking & SMS updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Same-day delivery for urgent orders before 12 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-blue-200">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-3">
              Need Medical Supplies Urgently?
            </h3>
            <p className="text-blue-800/70 mb-6 max-w-2xl mx-auto text-lg">
              Whether you're in our core delivery area or nearby, we’ll ensure your medical products arrive safely and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+27111234567"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call to Order
              </a>
              <a 
                href="#contact-form"
                className="bg-white text-blue-900 border-2 border-blue-300 px-8 py-3 rounded-full font-bold hover:bg-blue-50 hover:border-indigo-600 transition-all duration-200"
              >
                Request Quote
              </a>
            </div>
            <p className="text-blue-700/60 text-sm mt-4">
              Not sure about your area? Call us! We may be able to make special arrangements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMap;
