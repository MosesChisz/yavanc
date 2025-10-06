// import React from 'react';
// import { Instagram, Facebook, Cake, Star, Award } from 'lucide-react';
// import chef01 from "../../../assets/images/chef01.jpg";
// import chef02 from "../../../assets/images/chef02.jpg";
// import chef03 from "../../../assets/images/chef03.jpg";
// import chef04 from "../../../assets/images/chef04.jpg";
// import chef05 from "../../../assets/images/chef05.jpg";

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Sarah M",
//       role: "Head Baker & Founder",
//       experience: "20+ years",
//       specialty: "Wedding Cakes",
//       image: chef01,
//       description: "Sarah's grandmother taught her traditional baking techniques that have been passed down for generations.",
//       social: ["instagram", "facebook"]
//     },
//     {
//       name: "Tendai C",
//       role: "Pastry Chef",
//       experience: "12+ years",
//       specialty: "Artisan Breads",
//       image: chef02,
//       description: "Tendai brings French pastry techniques combined with local Zimbabwean flavors.",
//       social: ["instagram"]
//     },
//     {
//       name: "Grace N",
//       role: "Cake Decorator",
//       experience: "8+ years",
//       specialty: "Custom Designs",
//       image: chef03,
//       description: "Grace turns simple cakes into works of art with her incredible attention to detail.",
//       social: ["instagram", "facebook"]
//     },
//     {
//       name: "David M",
//       role: "Operations Manager",
//       experience: "6+ years",
//       specialty: "Customer Service",
//       image: chef04,
//       description: "David ensures every order is perfect and every customer leaves happy.",
//       social: ["facebook"]
//     }
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#F8BBD9]/20 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             <Award className="w-4 h-4" />
//             Meet Our Family
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#8B4513] mb-4">
//             The Hearts Behind
//             <span className="block text-[#EA580C]">The Oven</span>
//           </h2>
//           <p className="text-lg text-[#8B4513]/70 max-w-2xl mx-auto">
//             Our team of passionate bakers and confectionery artists dedicated to creating 
//             sweet memories for your special moments.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {teamMembers.map((member, index) => (
//             <div 
//               key={index} 
//               className="group text-center bg-gradient-to-br from-amber-50/80 to-pink-50/80 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100/50 hover:border-amber-200/70"
//             >
//               <div className="relative mb-6">
//                 <div className="relative bg-gradient-to-br from-amber-100 to-pink-100 rounded-2xl aspect-square flex items-center justify-center mx-auto max-w-[200px] border-2 border-white shadow-md overflow-hidden">
//                   {/* Team Member Image */}
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
                  
//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-[#8B4513] rounded-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center p-4">
//                     <div className="text-white text-center">
//                       <p className="text-sm mb-3">{member.description}</p>
//                       <div className="flex justify-center gap-3">
//                         {member.social.includes('instagram') && (
//                           <Instagram className="w-5 h-5 hover:text-[#F8BBD9] cursor-pointer transition-colors" />
//                         )}
//                         {member.social.includes('facebook') && (
//                           <Facebook className="w-5 h-5 hover:text-[#F8BBD9] cursor-pointer transition-colors" />
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Experience Badge */}
//                 <div className="absolute -top-2 -right-2 bg-[#EA580C] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border-2 border-white z-10">
//                   {member.experience}
//                 </div>
//               </div>

//               <h3 className="text-xl font-bold text-[#8B4513] mb-2">{member.name}</h3>
//               <p className="text-[#EA580C] font-semibold mb-3">{member.role}</p>
              
//               <div className="flex items-center justify-center gap-1 text-sm text-[#8B4513]/70 bg-white/50 rounded-full py-1 px-3 border border-amber-100">
//                 <Cake className="w-4 h-4" />
//                 <span>Specialty: {member.specialty}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Team Stats */}
//         <div className="mt-16 bg-gradient-to-r from-[#FDF6E3] to-amber-50 rounded-2xl p-8 lg:p-12 border border-amber-100 shadow-lg">
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             <div className="bg-white/50 rounded-xl p-4 border border-amber-100/50">
//               <div className="text-3xl lg:text-4xl font-bold text-[#8B4513] mb-2">15+</div>
//               <p className="text-[#8B4513]/70 font-medium">Team Members</p>
//             </div>
//             <div className="bg-white/50 rounded-xl p-4 border border-amber-100/50">
//               <div className="text-3xl lg:text-4xl font-bold text-[#8B4513] mb-2">100+</div>
//               <p className="text-[#8B4513]/70 font-medium">Years Combined Experience</p>
//             </div>
//             <div className="bg-white/50 rounded-xl p-4 border border-amber-100/50">
//               <div className="text-3xl lg:text-4xl font-bold text-[#8B4513] mb-2">24/7</div>
//               <p className="text-[#8B4513]/70 font-medium">Baking Passion</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

import React from 'react';
import { Instagram, Facebook, Award } from 'lucide-react';
import scientist01 from "../../../assets/images/scientist01.jpg";
import scientist02 from "../../../assets/images/scientist02.jpg";
import scientist03 from "../../../assets/images/scientist03.jpg";
import scientist04 from "../../../assets/images/scientist04.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah M",
      role: "Head Scientist & Founder",
      experience: "20+ years",
      specialty: "Respiratory Products",
      image: scientist01,
      description: "Dr. Sarah leads research and development, ensuring top-quality respiratory products for healthcare facilities.",
      social: ["instagram", "facebook"]
    },
    {
      name: "Dr. Tendai C",
      role: "Urology Specialist",
      experience: "12+ years",
      specialty: "Catheters & Infusion Products",
      image: scientist02,
      description: "Tendai ensures precise formulation and testing of all urology-related lab products.",
      social: ["instagram"]
    },
    {
      name: "Grace N",
      role: "Lab Technician",
      experience: "8+ years",
      specialty: "Anesthesiology Equipment",
      image: scientist03,
      description: "Grace performs quality control tests and verifies that all anesthesiology devices meet safety standards.",
      social: ["instagram", "facebook"]
    },
    {
      name: "David M",
      role: "Operations Manager",
      experience: "6+ years",
      specialty: "Logistics & Delivery",
      image: scientist04,
      description: "David ensures timely delivery of lab products to hospitals and clinics across South Africa.",
      social: ["facebook"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#e3fdf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D1FAE5]/20 text-[#065F46] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Meet Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#065F46] mb-4">
            The Minds Behind
            <span className="block text-[#10B981]">Our Lab Products</span>
          </h2>
          <p className="text-lg text-[#065F46]/70 max-w-2xl mx-auto">
            Our team of dedicated scientists, technicians, and lab experts work tirelessly to deliver high-quality medical products to healthcare facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group text-center bg-gradient-to-br from-green-50/80 to-teal-50/80 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100/50 hover:border-green-200/70"
            >
              <div className="relative mb-6">
                <div className="relative bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl aspect-square flex items-center justify-center mx-auto max-w-[200px] border-2 border-white shadow-md overflow-hidden">
                  {/* Team Member Image */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#065F46] rounded-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <p className="text-sm mb-3">{member.description}</p>
                      <div className="flex justify-center gap-3">
                        {member.social.includes('instagram') && (
                          <Instagram className="w-5 h-5 hover:text-[#10B981] cursor-pointer transition-colors" />
                        )}
                        {member.social.includes('facebook') && (
                          <Facebook className="w-5 h-5 hover:text-[#10B981] cursor-pointer transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -top-2 -right-2 bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border-2 border-white z-10">
                  {member.experience}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#065F46] mb-2">{member.name}</h3>
              <p className="text-[#10B981] font-semibold mb-3">{member.role}</p>
              
              <div className="flex items-center justify-center gap-1 text-sm text-[#065F46]/70 bg-white/50 rounded-full py-1 px-3 border border-green-100">
                <span>Specialty: {member.specialty}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#ECFDF5] to-green-50 rounded-2xl p-8 lg:p-12 border border-green-100 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/50 rounded-xl p-4 border border-green-100/50">
              <div className="text-3xl lg:text-4xl font-bold text-[#065F46] mb-2">12+</div>
              <p className="text-[#065F46]/70 font-medium">Lab Experts</p>
            </div>
            <div className="bg-white/50 rounded-xl p-4 border border-green-100/50">
              <div className="text-3xl lg:text-4xl font-bold text-[#065F46] mb-2">150+</div>
              <p className="text-[#065F46]/70 font-medium">Years Combined Experience</p>
            </div>
            <div className="bg-white/50 rounded-xl p-4 border border-green-100/50">
              <div className="text-3xl lg:text-4xl font-bold text-[#065F46] mb-2">24/7</div>
              <p className="text-[#065F46]/70 font-medium">Product Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;