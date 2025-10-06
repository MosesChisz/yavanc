import React, { useState, useEffect } from "react";
import { ChevronRight, Star, ShoppingBag, Heart } from "lucide-react";
import cake01 from "../../../assets/images/bp2.jpg";
import bun01 from "../../../assets/images/bp.jpg";
import dot01 from "../../../assets/images/bp1.jpg";
import muf01 from "../../../assets/images/x-ray.jpg";
import { useNavigate } from "react-router-dom";
const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Chocolate Fudge Cake",
      description: "Rich, moist chocolate cake with creamy fudge frosting",
      price: "R25.00",
      originalPrice: "R30.00",
      image: cake01,
      rating: 4.9,
      reviews: 128,
      badge: "Best Product",
      category: "Cakes",
    },
    {
      id: 2,
      name: "Glazed Doughnuts",
      description: "Classic glazed doughnuts, soft and sweet perfection",
      price: "R2.50",
      originalPrice: null,
      image: bun01,
      rating: 4.8,
      reviews: 95,
      badge: "Products",
      category: "Doughnuts",
    },
    {
      id: 3,
      name: "Blueberry Muffins",
      description: "Fluffy muffins bursting with fresh blueberries",
      price: "R3.75",
      originalPrice: "R4.25",
      image: dot01,
      rating: 4.7,
      reviews: 73,
      badge: "Local Products",
      category: "Muffins",
    },
    {
      id: 4,
      name: "Cinnamon Buns",
      description: "Warm, gooey cinnamon rolls with cream cheese glaze",
      price: "R4.50",
      originalPrice: null,
      image: muf01,
      rating: 4.9,
      reviews: 156,
      badge: "Products",
      category: "Buns",
    },
    {
      id: 5,
      name: "Red Velvet Cupcakes",
      description: "Velvety smooth cupcakes with cream cheese frosting",
      price: "R18.00",
      originalPrice: "R22.00",
      image: muf01,
      rating: 4.8,
      reviews: 89,
      badge: "Premium Products",
      category: "Cupcakes",
    },
  ];

  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div
      className="py-12 bg-gradient-to-b from-green-50 to-green-50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1 bg-[#0ca0f5f8] text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
            <Star className="w-3 h-3 fill-current" />
            Featured Products
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-blue-400 mb-3">
            Our Best Products
          </h2>
          <p className="text-lg text-blue-400 max-w-2xl mx-auto">
            Discover Zimbabwe's favorite treats, crafted with love and the
            finest ingredients
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Products Grid */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / itemsPerView
                }%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`flex-shrink-0 px-1 md:px-2 ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group hover:-translate-y-1">
                    {/* Product Image - FIXED */}
                    <div className="relative bg-gradient-to-br from-pink-100 to-blue-100 aspect-square flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Badge */}
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-green-300 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </div>

                      {/* Favorite Button */}
                      <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-all duration-300">
                        <Heart className="w-4 h-4" />
                      </button>

                      {/* Quick Add Button */}
                      <button className="absolute bottom-3 right-3 bg-blue-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-400 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-3 md:p-4">
                      <div className="mb-1">
                        <span className="text-xs text-blue-400 font-medium">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-blue-500 mb-1 group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-amber-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-lg md:text-xl font-bold text-blue-400">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm md:text-base text-gray-400 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>

                        <button
                          className="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-3 md:px-4 py-1.5 rounded-full font-semibold text-xs md:text-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                          onClick={() => navigate("/shop")}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-110"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-8">
          <button
            className="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            onClick={() => navigate("/shop")}
          >
            <span className="flex items-center gap-1">
              View All Products
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
