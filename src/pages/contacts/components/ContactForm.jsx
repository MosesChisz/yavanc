// import { useState, useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { 
//   Cake, 
//   User, 
//   Mail, 
//   Phone, 
//   Calendar,
//   MessageCircle,
//   Star,
//   Heart,
//   Truck
// } from "lucide-react";

// const ContactForm = () => {
//   const location = useLocation();
//   const contactRef = useRef(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     occasion: "",
//     date: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   useEffect(() => {
//     if (location.hash === "#contact-form" && contactRef.current) {
//       contactRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   }, [location]);

//   const occasions = [
//     "Birthday Celebration",
//     "Wedding Cake",
//     "Anniversary",
//     "Baby Shower",
//     "Graduation Party",
//     "Corporate Event",
//     "Christmas Celebration",
//     "Easter Gathering",
//     "Just Because",
//     "Other Special Occasion"
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Create WhatsApp message
//     const whatsappMessage = `Hello Sweet Delights Team! 🎂

// I'm interested in ordering a beautiful cake for my special occasion!

// *Customer Details:*
// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📞 Phone: ${formData.phone}

// *Occasion Details:*
// 🎉 ${formData.occasion}
// 📅 ${formData.date || "Date to be confirmed"}

// *Special Requests:*
// ${formData.message}

// I'd love to discuss design options, flavors, and get a quote. Please let me know what information you need from me.

// Looking forward to creating something sweet together!

// Best regards,
// ${formData.name}`;

//     // WhatsApp number
//     const whatsappNumber = "263774718350";
    
//     // Encode the message for URL
//     const encodedMessage = encodeURIComponent(whatsappMessage);
    
//     // Create WhatsApp URL
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

//     // Simulate form processing delay
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     // Open WhatsApp
//     window.open(whatsappUrl, '_blank');

//     // Show success message
//     alert(
//       "Your cake inquiry has been prepared for WhatsApp! Please send the message to complete your order request. Our cake experts will get back to you within 1 hour with design options and pricing."
//     );
    
//     // Reset form
//     setFormData({ name: "", email: "", phone: "", occasion: "", date: "", message: "" });
//     setIsSubmitting(false);
//   };

//   return (
//     <section className="py-12 lg:py-16 bg-gradient-to-br from-[#FDF6E3] to-amber-50 px-4 sm:px-6 lg:px-8" id="contact-form" ref={contactRef}>
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-full mb-6 shadow-lg">
//             <Cake className="h-10 w-10 text-white" />
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B4513] mb-4">
//             Order Your Dream Cake
//           </h2>
//           <p className="text-[#8B4513]/70 text-lg max-w-2xl mx-auto">
//             Fill out the form below and we'll send your cake inquiry via WhatsApp. Our baking experts will contact you within{" "}
//             <span className="font-semibold text-[#EA580C]">1 hour</span> with design options!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           {/* Form Side */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200">
//               <div className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] p-6 text-white">
//                 <h3 className="text-2xl font-bold flex items-center gap-3">
//                   <MessageCircle className="h-6 w-6" />
//                   Cake Order Inquiry
//                 </h3>
//                 <p className="text-amber-100 mt-2 text-sm">
//                   We'll help you create the perfect cake for your special moment!
//                 </p>
//               </div>

//               <div className="p-6 lg:p-8">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Name Field */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-[#8B4513] mb-2">
//                         Your Name *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <User className="h-5 w-5 text-amber-500" />
//                         </div>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           className="pl-10 w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all duration-200 bg-amber-50/50 text-[#8B4513] placeholder-amber-400"
//                           placeholder="Enter your full name"
//                         />
//                       </div>
//                     </div>

//                     {/* Email Field */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-[#8B4513] mb-2">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Mail className="h-5 w-5 text-amber-500" />
//                         </div>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="pl-10 w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all duration-200 bg-amber-50/50 text-[#8B4513] placeholder-amber-400"
//                           placeholder="your@email.com"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Phone Field */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-[#8B4513] mb-2">
//                         Phone Number *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Phone className="h-5 w-5 text-amber-500" />
//                         </div>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           className="pl-10 w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all duration-200 bg-amber-50/50 text-[#8B4513] placeholder-amber-400"
//                           placeholder="+263 77 123 4567"
//                         />
//                       </div>
//                     </div>

//                     {/* Date Field */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-[#8B4513] mb-2">
//                         Event Date
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Calendar className="h-5 w-5 text-amber-500" />
//                         </div>
//                         <input
//                           type="date"
//                           name="date"
//                           value={formData.date}
//                           onChange={handleChange}
//                           className="pl-10 w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all duration-200 bg-amber-50/50 text-[#8B4513]"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Occasion Field */}
//                   <div className="relative">
//                     <label className="block text-sm font-semibold text-[#8B4513] mb-2">
//                       What's the Occasion? *
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
//                         <Star className="h-5 w-5 text-amber-500" />
//                       </div>
//                       <select
//                         name="occasion"
//                         value={formData.occasion}
//                         onChange={handleChange}
//                         required
//                         className="pl-10 w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all duration-200 bg-amber-50/50 text-[#8B4513] appearance-none"
//                       >
//                         <option value="">Select an occasion</option>
//                         {occasions.map((occasion, index) => (
//                           <option key={index} value={occasion}>
//                             {occasion}
//                           </option>
//                         ))}
//                       </select>
//                       <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
//                         <svg
//                           className="h-4 w-4 text-amber-500"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Message Field */}
//                   <div className="relative">
//                     <label className="block text-sm font-semibold text-[#8B4513] mb-2">
//                       Your Cake Vision & Special Requests *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all duration-200 bg-amber-50/50 text-[#8B4513] placeholder-amber-400 resize-none"
//                       placeholder="Tell us about your dream cake! Include details like flavors, design ideas, number of guests, dietary requirements, etc."
//                     ></textarea>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 text-white ${
//                       isSubmitting
//                         ? "bg-gray-400 cursor-not-allowed"
//                         : "bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//                     }`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
//                         <span>Preparing Your Cake Inquiry...</span>
//                       </>
//                     ) : (
//                       <>
//                         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594z"/>
//                         </svg>
//                         <span>Send Cake Inquiry via WhatsApp</span>
//                       </>
//                     )}
//                   </button>

//                   <p className="text-center text-sm text-amber-600 pt-4 border-t border-amber-200">
//                     <svg
//                       className="inline w-4 h-4 mr-2 text-green-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     We'll never share your information. Your cake dreams are safe with us!
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Info Side */}
//           <div className="lg:col-span-2">
//             <div className="bg-gradient-to-br from-[#8B4513] to-[#7C3A0F] rounded-2xl shadow-xl text-white p-6 lg:p-8 h-full">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <Heart className="h-6 w-6 text-amber-300" />
//                 Why Choose Sweet Delights?
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   {
//                     icon: <Star className="h-5 w-5 text-amber-300" />,
//                     title: "15+ Years Excellence",
//                     text: "Over a decade of creating beautiful cakes for Zimbabwean celebrations"
//                   },
//                   {
//                     icon: <Cake className="h-5 w-5 text-amber-300" />,
//                     title: "Custom Designs",
//                     text: "Every cake is uniquely designed to match your vision and theme"
//                   },
//                   {
//                     icon: <Truck className="h-5 w-5 text-amber-300" />,
//                     title: "Free Delivery",
//                     text: "Free cake delivery in Harare for orders over $50"
//                   },
//                   {
//                     icon: <Heart className="h-5 w-5 text-amber-300" />,
//                     title: "Fresh Ingredients",
//                     text: "We use only the freshest local ingredients for superior taste"
//                   },
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-start gap-4">
//                     <div className="bg-white/20 rounded-full p-2 mt-1 flex-shrink-0">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
//                       <p className="text-amber-100 text-sm">{item.text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 pt-6 border-t border-amber-600">
//                 <h4 className="font-semibold text-lg mb-4">Quick Contact Options:</h4>
//                 <div className="space-y-3">
//                   <a
//                     href="tel:+263771234567"
//                     className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-xl transition-all duration-200 group"
//                   >
//                     <Phone className="h-5 w-5" />
//                     <div>
//                       <div className="font-semibold">Call Us Directly</div>
//                       <div className="text-amber-200 text-sm">+263 77 123 4567</div>
//                     </div>
//                   </a>
//                   <a
//                     href="https://wa.me/263771234567"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 px-4 py-3 rounded-xl transition-all duration-200 group"
//                   >
//                     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594z"/>
//                     </svg>
//                     <div>
//                       <div className="font-semibold">WhatsApp Direct</div>
//                       <div className="text-amber-200 text-sm">Fastest response</div>
//                     </div>
//                   </a>
//                 </div>
//               </div>

//               {/* Special Note */}
//               <div className="mt-6 bg-amber-500/20 rounded-xl p-4 border border-amber-400/30">
//                 <p className="text-amber-100 text-sm flex items-center gap-2">
//                   <Star className="h-4 w-4 fill-current" />
//                   <span><strong>Pro Tip:</strong> Order wedding cakes 3-6 months in advance for the best designs!</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  Package, 
  User, 
  Mail, 
  Phone, 
  ClipboardList,
  MessageCircle,
  Star,
  Heart,
  Truck
} from "lucide-react";

const ContactForm = () => {
  const location = useLocation();
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (location.hash === "#contact-form" && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);

  const products = [
    "Laboratory Reagents",
    "Test Kits",
    "Protective Equipment (PPE)",
    "Medical Consumables",
    "Diagnostic Instruments",
    "Chemicals",
    "Other"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `Hello Lab Supplies Team 🧪

I'm interested in ordering medical/lab products.

*Customer Details:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}

*Product Request:*
📦 Product: ${formData.product}
🔢 Quantity: ${formData.quantity || "To be discussed"}

*Additional Notes:*
${formData.message}

Please provide availability, pricing, and delivery details.

Best regards,
${formData.name}`;

    // WhatsApp number
    const whatsappNumber = "27631501184";
    
    // Encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate form processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    alert(
      "Your medical product inquiry is ready on WhatsApp. Please send the message to confirm. Our team will respond within 1 hour."
    );
    
    setFormData({ name: "", email: "", phone: "", product: "", quantity: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-cyan-50 px-4 sm:px-6 lg:px-8" id="contact-form" ref={contactRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6 shadow-lg">
            <Package className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
            Request Medical Products
          </h2>
          <p className="text-blue-700/70 text-lg max-w-2xl mx-auto">
            Fill out the form and we’ll prepare your request on WhatsApp. Our product specialists will respond within{" "}
            <span className="font-semibold text-blue-600">1 hour</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  Product Inquiry
                </h3>
                <p className="text-cyan-100 mt-2 text-sm">
                  Let us know your requirements and we’ll assist promptly.
                </p>
              </div>

              <div className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-2">Your Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="pl-10 w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="pl-10 w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+27 71 234 5678"
                          className="pl-10 w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                        />
                      </div>
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-2">Quantity</label>
                      <div className="relative">
                        <ClipboardList className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g., 50 units"
                          className="pl-10 w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-800 mb-2">Select Product *</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                    >
                      <option value="">Choose a product</option>
                      {products.map((p, idx) => (
                        <option key={idx} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-800 mb-2">Additional Notes</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Add specifications or delivery instructions..."
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 text-white transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400"
                        : "bg-gradient-to-r from-green-500 to-green-700 hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? "Preparing Your Inquiry..." : "Send Inquiry via WhatsApp"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-xl text-white p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Heart className="h-6 w-6 text-cyan-300" />
                Why Choose Our Lab Products?
              </h3>
              <div className="space-y-6">
                {[
                  { icon: <Star className="h-5 w-5 text-cyan-300" />, title: "Trusted Quality", text: "Certified medical and laboratory supplies you can rely on." },
                  { icon: <Package className="h-5 w-5 text-cyan-300" />, title: "Wide Range", text: "From reagents to protective gear, we cover all your lab needs." },
                  { icon: <Truck className="h-5 w-5 text-cyan-300" />, title: "Nationwide Delivery", text: "Fast and secure delivery across South Africa." },
                  { icon: <Heart className="h-5 w-5 text-cyan-300" />, title: "Customer Care", text: "Dedicated team to support your product inquiries and orders." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-cyan-100 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-blue-700">
                <h4 className="font-semibold text-lg mb-4">Quick Contact Options:</h4>
                <a href="tel:+27712345678" className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-xl transition-all duration-200 mb-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Call Us Directly</div>
                    <div className="text-cyan-200 text-sm">+27 63 150 1184</div>
                  </div>
                </a>
                <a href="https://wa.me/27631501184" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-600/30 hover:bg-green-600/40 px-4 py-3 rounded-xl transition-all duration-200">
                  <MessageCircle className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">WhatsApp Direct</div>
                    <div className="text-cyan-200 text-sm">Fastest response</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;