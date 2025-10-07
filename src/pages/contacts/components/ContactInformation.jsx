// import React from 'react';
// import { Phone, Mail, MapPin, Clock, Star, Cake, Heart, Truck } from 'lucide-react';

// const ContactInformation = () => {
//   const contactCards = [
//     {
//       icon: Phone,
//       title: 'Call Us Directly',
//       description: 'Speak with our baking experts',
//       details: [
//         { type: 'Order & Inquiries', number: '+263 77 123 4567', badge: 'Main Line' },
//         { type: 'Wedding Cakes', number: '+263 78 987 6543', badge: 'Specialized' },
//         { type: 'Emergency Orders', number: '+263 71 555 1234', badge: '24/7' }
//       ],
//       gradient: 'from-[#F59E0B] to-[#EA580C]',
//       button: { text: 'Call Now', href: 'tel:+263771234567' }
//     },
//     {
//       icon: Mail,
//       title: 'Email Us',
//       description: 'Perfect for detailed custom orders',
//       details: [
//         { type: 'General Orders', email: 'orders@sweetdelights.co.zw' },
//         { type: 'Wedding Specials', email: 'weddings@sweetdelights.co.zw' },
//         { type: 'Custom Designs', email: 'design@sweetdelights.co.zw' }
//       ],
//       gradient: 'from-[#F8BBD9] to-[#EC4899]',
//       button: { text: 'Send Email', href: 'mailto:orders@sweetdelights.co.zw' }
//     },
//     {
//       icon: MapPin,
//       title: 'Visit Our Bakery',
//       description: 'Stop by for a tasting session',
//       details: [
//         { line: '123 Baker Street,' },
//         { line: 'Avondale,' },
//         { line: 'Harare, Zimbabwe' }
//       ],
//       gradient: 'from-[#8B4513] to-[#7C3A0F]',
//       button: { text: 'Get Directions', href: 'https://maps.google.com/?q=Harare,Zimbabwe' }
//     }
//   ];

//   return (
//     <section className="py-12 lg:py-16 bg-gradient-to-br from-[#FDF6E3] to-amber-50 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-full mb-4">
//             <Cake className="h-8 w-8 text-white" />
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-3">
//             Sweet Ways to Reach Us
//           </h2>
//           <p className="text-[#8B4513]/70 text-lg max-w-2xl mx-auto">
//             Choose your preferred way to get in touch. We're here to make your cake dreams come true!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
//           {contactCards.map((card, index) => (
//             <div key={index} className="group relative">
//               <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
//                 <div className={`bg-gradient-to-r ${card.gradient} p-6 text-white`}>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-white/20 rounded-xl p-3">
//                       <card.icon className="h-7 w-7" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold">{card.title}</h3>
//                       <p className="text-white/90 text-sm mt-1">{card.description}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="space-y-3">
//                     {card.details.map((detail, idx) => (
//                       <div key={idx} className="flex items-center justify-between py-2 border-b border-amber-100 last:border-b-0">
//                         <div className="flex-1">
//                           <p className="font-semibold text-[#8B4513] text-sm">
//                             {detail.type || detail.line}
//                           </p>
//                           <p className="text-[#EA580C] font-medium text-sm">
//                             {detail.number || detail.email || ''}
//                           </p>
//                         </div>
//                         {detail.badge && (
//                           <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm">
//                             {detail.badge}
//                           </span>
//                         )}
//                       </div>
//                     ))}
//                   </div>

//                   <a
//                     href={card.button.href}
//                     className="mt-6 w-full bg-gradient-to-r from-[#8B4513] to-[#7C3A0F] hover:from-[#7C3A0F] hover:to-[#8B4513] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm hover:shadow-lg"
//                   >
//                     <span>{card.button.text}</span>
//                     <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
//                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>

//                 {/* Background Decorations */}
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
//                 <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
//               </div>

//               {/* Floating Badge */}
//               <div className="absolute -top-3 -right-3">
//                 <div className="bg-[#A7F3D0] text-[#8B4513] px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
//                   <Star className="w-3 h-3 fill-current" />
//                   Fast Response
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Service Features */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100">
//             <div className="w-12 h-12 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-full flex items-center justify-center mx-auto mb-3">
//               <Clock className="h-6 w-6 text-white" />
//             </div>
//             <h4 className="font-bold text-[#8B4513] text-lg mb-2">Response Time</h4>
//             <p className="text-sm text-[#8B4513]/70">Phone calls: Within 15 minutes</p>
//             <p className="text-sm text-[#8B4513]/70">Emails: Within 2 hours</p>
//           </div>

//           <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100">
//             <div className="w-12 h-12 bg-gradient-to-r from-[#F8BBD9] to-[#EC4899] rounded-full flex items-center justify-center mx-auto mb-3">
//               <Heart className="h-6 w-6 text-white" />
//             </div>
//             <h4 className="font-bold text-[#8B4513] text-lg mb-2">Quality Guarantee</h4>
//             <p className="text-sm text-[#8B4513]/70">100% fresh ingredients</p>
//             <p className="text-sm text-[#8B4513]/70">Satisfaction guaranteed</p>
//           </div>

//           <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100">
//             <div className="w-12 h-12 bg-gradient-to-r from-[#A7F3D0] to-[#10B981] rounded-full flex items-center justify-center mx-auto mb-3">
//               <Truck className="h-6 w-6 text-white" />
//             </div>
//             <h4 className="font-bold text-[#8B4513] text-lg mb-2">Free Delivery</h4>
//             <p className="text-sm text-[#8B4513]/70">Harare orders over $50</p>
//             <p className="text-sm text-[#8B4513]/70">Temperature controlled</p>
//           </div>
//         </div>

//         {/* Quick Note */}
//         <div className="mt-8 text-center">
//           <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 inline-block">
//             <p className="text-[#8B4513] font-semibold flex items-center justify-center gap-2">
//               <Star className="w-4 h-4 text-[#EA580C] fill-current" />
//               Pro tip: Call us for same-day orders before 12 PM!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInformation;

import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Shield, HeartPulse, Package } from 'lucide-react';

const ContactInformation = () => {
  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our medical product specialists',
      details: [
        { type: 'General Inquiries', number: '+27 63 150 1184', badge: 'Main Line' },
        { type: 'Product Support', number: '+27 63 150 1184', badge: 'Support' },
        { type: 'Emergency Orders', number: '+27 63 150 1184', badge: '24/7' }
      ],
      gradient: 'from-[#0284C7] to-[#0369A1]',
      button: { text: 'Call Now', href: 'tel:+27631501184' }
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Perfect for orders, quotations, and product details',
      details: [
        { type: 'General Info', email: 'info@medlab.co.za' },
        { type: 'Product Orders', email: 'orders@medlab.co.za' },
        { type: 'Technical Support', email: 'support@medlab.co.za' }
      ],
      gradient: 'from-[#38BDF8] to-[#0EA5E9]',
      button: { text: 'Send Email', href: 'mailto:info@medlab.co.za' }
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Find our head office and distribution center',
      details: [
        { line: '2 Viner Road, Elma Park,' },
        { line: 'CBD,' },
        { line: ' Edenvale, South Africa' }
      ],
      gradient: 'from-[#22C55E] to-[#15803D]',
      button: { text: 'Get Directions', href: 'https://maps.app.goo.gl/7KEjVdfdpk9niakPA' }
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F0FDF4] to-[#ECFEFF] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0284C7] to-[#0369A1] rounded-full mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-3">
            Get in Touch
          </h2>
          <p className="text-[#0369A1]/70 text-lg max-w-2xl mx-auto">
            Reach out to us for medical products, technical support, or distribution inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {contactCards.map((card, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${card.gradient} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-xl p-3">
                      <card.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                      <p className="text-white/90 text-sm mt-1">{card.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {card.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div className="flex-1">
                          <p className="font-semibold text-[#0369A1] text-sm">
                            {detail.type || detail.line}
                          </p>
                          <p className="text-[#0284C7] font-medium text-sm">
                            {detail.number || detail.email || ''}
                          </p>
                        </div>
                        {detail.badge && (
                          <span className="bg-[#0284C7]/20 text-[#0369A1] text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm">
                            {detail.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <a
                    href={card.button.href}
                    className="mt-6 w-full bg-gradient-to-r from-[#0369A1] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0369A1] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm hover:shadow-lg"
                  >
                    <span>{card.button.text}</span>
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-[#A7F3D0] text-[#0369A1] px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Reliable Support
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0284C7] to-[#0369A1] rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-[#0369A1] text-lg mb-2">Fast Response</h4>
            <p className="text-sm text-[#0369A1]/70">Calls: Within 15 minutes</p>
            <p className="text-sm text-[#0369A1]/70">Emails: Within 2 hours</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-[#22C55E] to-[#15803D] rounded-full flex items-center justify-center mx-auto mb-3">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-[#0369A1] text-lg mb-2">Quality Assurance</h4>
            <p className="text-sm text-[#0369A1]/70">Certified medical products</p>
            <p className="text-sm text-[#0369A1]/70">Regulatory compliant</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-[#0369A1] text-lg mb-2">Nationwide Delivery</h4>
            <p className="text-sm text-[#0369A1]/70">Safe & reliable logistics</p>
            <p className="text-sm text-[#0369A1]/70">Harare same-day dispatch</p>
          </div>
        </div>

        {/* Quick Note */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 inline-block">
            <p className="text-[#0369A1] font-semibold flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-[#0284C7] fill-current" />
              Pro tip: For urgent medical product needs, call us directly for immediate assistance!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;