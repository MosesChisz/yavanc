import React from 'react';

const ProductHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#FDF6E3] to-[#F8BBD9] py-16 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#A7F3D0] rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F59E0B] rounded-full translate-y-24 -translate-x-24 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-[#EA580C] text-white rounded-full text-sm font-semibold mb-4">
                Freshly Baked Daily
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
                Indulge in Zimbabwe's Finest <span className="text-[#EA580C]">Baked Delights</span>
              </h1>
              <p className="text-lg text-[#8B4513] opacity-90 max-w-lg">
                From traditional cakes to modern treats, our bakery brings you the finest confectionery crafted with love and the best local ingredients.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#EA580C] hover:bg-[#d14a08] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                View Specials
              </button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#8B4513] font-medium">Fresh Ingredients</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#A7F3D0] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8B4513]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#8B4513] font-medium">Local Recipes</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Product showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Product card 1 */}
              <div className="bg-white rounded-2xl p-4 shadow-xl transform rotate-3 hover:rotate-0 transition duration-500">
                <div className="h-40 bg-gradient-to-br from-[#F8BBD9] to-[#F59E0B] rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Cakes</span>
                </div>
                <h3 className="font-bold text-[#8B4513]">Special Occasion Cakes</h3>
                <p className="text-sm text-gray-600 mt-1">Custom designs for every celebration</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-[#EA580C]">From $25</span>
                  <button className="text-[#8B4513] hover:text-[#EA580C]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Product card 2 */}
              <div className="bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 hover:rotate-0 transition duration-500 mt-8">
                <div className="h-40 bg-gradient-to-br from-[#A7F3D0] to-[#F59E0B] rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Pastries</span>
                </div>
                <h3 className="font-bold text-[#8B4513]">Fresh Buns & Doughnuts</h3>
                <p className="text-sm text-gray-600 mt-1">Baked fresh every morning</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-[#EA580C]">From $3</span>
                  <button className="text-[#8B4513] hover:text-[#EA580C]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#8B4513] text-white py-2 px-4 rounded-full shadow-lg">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100% Zimbabwean Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;