// import React, { useState, useEffect } from "react";
// import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import bun02 from "../../../assets/images/bun02.jpg";
// const Hero = () => {
//   const navigate = useNavigate();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [loadedImages, setLoadedImages] = useState({});
//   const [imageErrors, setImageErrors] = useState({});

//   const heroImages = [
//     {
//       url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
//       alt: "Delicious chocolate cake with berries",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=80",
//       alt: "Fresh baked donuts with colorful glazing",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=80",
//       alt: "Delicious cupcakes with cream frosting",
//     },
//     {
//       url: bun02,
//       alt: "Fresh baked bread and pastries",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80",
//       alt: "Delicious muffins with blueberries",
//     },
//   ];

//   useEffect(() => {
//     heroImages.forEach((image, index) => {
//       const img = new Image();
//       img.src = image.url;
//       img.onload = () => {
//         setLoadedImages((prev) => ({ ...prev, [index]: true }));
//       };
//       img.onerror = () => {
//         setImageErrors((prev) => ({ ...prev, [index]: true }));
//       };
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [heroImages.length]);

//   const handleImageError = (index) => {
//     setImageErrors((prev) => ({ ...prev, [index]: true }));
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen flex items-center overflow-hidden">
//       {/* Decorative circles */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-20 h-20 bg-amber-600 rounded-full"></div>
//         <div className="absolute top-24 right-20 w-16 h-16 bg-pink-400 rounded-full"></div>
//         <div className="absolute bottom-20 left-28 w-14 h-14 bg-orange-500 rounded-full"></div>
//         <div className="absolute bottom-10 right-10 w-20 h-20 bg-emerald-400 rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-3 lg:px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-6 items-center">
//           {/* Left Content */}
//           <div className="text-center lg:text-left space-y-4">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
//               <Star className="w-4 h-4 text-amber-500 fill-current" />
//               <span className="text-amber-800 font-medium text-xs">
//                 Zimbabwe's Favorite Bakery
//               </span>
//             </div>

//             {/* Heading */}
//             <div className="space-y-2">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 leading-snug">
//                 Sweet
//                 <span className="block text-orange-600">Delights</span>
//                 <span className="block text-pink-600 text-2xl sm:text-3xl lg:text-4xl">
//                   Await You
//                 </span>
//               </h1>
//               <p className="text-sm sm:text-base text-amber-800 leading-relaxed max-w-md mx-auto lg:mx-0">
//                 From freshly baked cakes to golden doughnuts, we craft every
//                 treat with love and the finest ingredients.
//               </p>
//             </div>

//             {/* Features */}
//             <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
//               <div className="flex items-center gap-1 text-amber-700 text-sm">
//                 <Clock className="w-4 h-4 text-amber-600" />
//                 <span>Fresh Daily</span>
//               </div>
//               <div className="flex items-center gap-1 text-amber-700 text-sm">
//                 <MapPin className="w-4 h-4 text-amber-600" />
//                 <span>Local Ingredients</span>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
//               <button
//                 className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300"
//                 onClick={() => navigate("/shop")}
//               >
//                 <span className="flex items-center gap-1 justify-center">
//                   Order Now
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>
//               <button
//                 className="bg-white/90 backdrop-blur-sm text-amber-800 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg border border-amber-200 hover:border-amber-300 transition-all duration-300"
//                 onClick={() => navigate("/contact")}
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           {/* Right Content - Images */}
//           <div className="relative mt-6 lg:mt-0">
//             <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
//               <div className="relative aspect-square overflow-hidden">
//                 {heroImages.map((image, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                       index === currentImageIndex ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     {!imageErrors[index] ? (
//                       <img
//                         src={image.url}
//                         alt={image.alt}
//                         className={`w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700 ${
//                           loadedImages[index] ? "opacity-100" : "opacity-0"
//                         }`}
//                         onError={() => handleImageError(index)}
//                         loading="lazy"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
//                         <div className="text-center text-amber-800">
//                           <div className="text-2xl sm:text-4xl mb-2">🧁</div>
//                           <p className="text-base sm:text-lg font-bold">
//                             {image.alt}
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
//                   </div>
//                 ))}

//                 {/* Placeholder */}
//                 {Object.keys(loadedImages).length === 0 &&
//                   Object.keys(imageErrors).length === 0 && (
//                     <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
//                       <div className="text-center text-amber-800">
//                         <div className="text-2xl sm:text-4xl mb-2">🧁</div>
//                         <p className="text-base sm:text-lg font-bold">
//                           Delicious Cakes
//                         </p>
//                         <p className="text-xs sm:text-sm">& Sweet Treats</p>
//                       </div>
//                     </div>
//                   )}
//               </div>

//               {/* Indicators */}
//               <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
//                 {heroImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentImageIndex(index)}
//                     className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//                       index === currentImageIndex
//                         ? "bg-white scale-110 shadow-md"
//                         : "bg-white/50 hover:bg-white/75"
//                     }`}
//                   />
//                 ))}
//               </div>

//               {/* Floating elements */}
//               <div className="absolute -top-2 -right-2 bg-pink-400 text-white p-1.5 rounded-full shadow-md animate-bounce">
//                 <span className="text-base">🍰</span>
//               </div>
//               <div
//                 className="absolute -bottom-2 -left-2 bg-amber-400 text-white p-1.5 rounded-full shadow-md animate-bounce"
//                 style={{ animationDelay: "0.5s" }}
//               >
//                 <span className="text-base">🍩</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1200 120" fill="none" className="w-full h-6 sm:h-8">
//           <path
//             d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z"
//             fill="white"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1588776814546-4edb3f98e1c5?auto=format&fit=crop&w=1000&q=80",
      alt: "Advanced lab equipment in use for diagnostic testing",
    },
    {
      url: "https://images.unsplash.com/photo-1580281657521-3e88c1a1f72d?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern diagnostic equipment ensuring accurate results",
    },
    {
      url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80",
      alt: "Cutting-edge lab technology improving patient diagnostics",
    },
    {
      url: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
      alt: "Specialist conducting molecular diagnostics testing",
    },
    {
      url: "https://images.unsplash.com/photo-1579154204601-01588f351e85?auto=format&fit=crop&w=1000&q=80",
      alt: "Healthy lifestyle and wellness",
    },
  ];

  useEffect(() => {
    heroImages.forEach((image, index) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
      };
      img.onerror = () => {
        setImageErrors((prev) => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-green-100 min-h-screen flex items-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
        <div className="absolute top-24 right-20 w-16 h-16 bg-teal-400 rounded-full"></div>
        <div className="absolute bottom-20 left-28 w-14 h-14 bg-green-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-indigo-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-3 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
              <Star className="w-4 h-4 text-blue-500 fill-current" />
              <span className="text-blue-800 font-medium text-xs">
                Trusted Healthcare Services
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 leading-snug">
                Reliable Lab Products,
                <span className="block text-teal-400">Our Priority</span>
                <span className="block text-teal-400 text-2xl sm:text-3xl lg:text-4xl">
                  
                </span>
              </h1>
              <p className="text-sm sm:text-base text-blue-800 leading-relaxed max-w-md mx-auto lg:mx-0">
                High-quality lab solutions, modern equipment, and expert-tested products designed to 
                support accurate and safe scientific work.                
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-1 text-blue-700 text-sm">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-1 text-blue-700 text-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Accessible Nationwide</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                className="group bg-gradient-to-r bg-[#0ca0f5f8] bg-[#0ca0f5f8] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => navigate("/shop")}
              >
                <span className="flex items-center gap-1 justify-center">
                  Book Your Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                className="bg-white/90 backdrop-blur-sm text-blue-800 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg border border-blue-200 hover:border-blue-300 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {!imageErrors[index] ? (
                      <img
                        src={image.url}
                        alt={image.alt}
                        className={`w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700 ${
                          loadedImages[index] ? "opacity-100" : "opacity-0"
                        }`}
                        onError={() => handleImageError(index)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-300 flex items-center justify-center">
                        <div className="text-center text-blue-800">
                          <div className="text-2xl sm:text-4xl mb-2">🩺</div>
                          <p className="text-base sm:text-lg font-bold">
                            {image.alt}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Placeholder */}
                {Object.keys(loadedImages).length === 0 &&
                  Object.keys(imageErrors).length === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-300 flex items-center justify-center">
                      <div className="text-center text-blue-800">
                        <div className="text-2xl sm:text-4xl mb-2">🩺</div>
                        <p className="text-base sm:text-lg font-bold">
                          Healthcare With Heart
                        </p>
                        <p className="text-xs sm:text-sm">Trusted Professionals</p>
                      </div>
                    </div>
                  )}
              </div>

              {/* Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white scale-110 shadow-md"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 bg-teal-400 text-white p-1.5 rounded-full shadow-md animate-bounce">
                <span className="text-base">❤️</span>
              </div>
              <div
                className="absolute -bottom-2 -left-2 bg-green-400 text-white p-1.5 rounded-full shadow-md animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-base">💊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-6 sm:h-8">
          <path
            d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
