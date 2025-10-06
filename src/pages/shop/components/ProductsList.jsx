import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { productData, categories } from "./ProductData";

const ProductsList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productsListRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#products-list" && productsListRef.current) {
      productsListRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  }, [location]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const { addToCart } = useCart();

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(productData);
    } else {
      setFilteredProducts(productData.filter((p) => p.category === selectedCategory));
    }
    setVisibleProducts(8); // Reset visible products when category changes
  }, [selectedCategory]);

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-3 h-3 text-[#F59E0B] fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-3 h-3 text-[#F59E0B] fill-current"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="half-star">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half-star)"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-3 h-3 text-[#F59E0B] fill-current"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="0.5"
              fill="#D1D5DB"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      }
    }

    return stars;
  };

  return (
    <section className="py-6 px-4 bg-[#e3fdf5]" ref={productsListRef} id="products-list">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0ca0f5f8] mb-2">
            Our Good Lab Products
          </h2>
          <p className="text-[#0ca0f5f8] opacity-90 text-sm md:text-base max-w-lg mx-auto">
            Reliable medical products designed for precision and patient safety.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-3 py-1.5 text-sm rounded-md mx-1 transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#0ca0f5f8] text-white shadow-md"
                    : "bg-white text-[#0ca0f5f8] hover:bg-[#F8BBD9] border border-[#0ca0f5f8] shadow-sm"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - Modified to show 2 cards per row on small screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden group border border-[#F3F4F6] cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex space-x-1">
                  {product.isNew && (
                    <span className="bg-[#A7F3D0] text-[#0ca0f5f8] text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.discountPrice && (
                    <span className="bg-[#0ca0f5f8] text-white text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      SALE
                    </span>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-white rounded-full p-1 sm:p-1.5 shadow-md hover:bg-[#0ca0f5f8] hover:text-white transition-colors"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>

              {/* Info */}
              <div className="p-2 sm:p-4">
                <div className="flex items-center mb-1 sm:mb-2">
                  <div className="flex mr-1">{renderStars(product.rating)}</div>
                  <span className="text-xs text-[#0ca0f5f8] opacity-70">
                    ({product.rating})
                  </span>
                </div>
                <h3 className="font-semibold text-[#0ca0f5f8] truncate mb-1 text-sm sm:text-base">
                  {product.name}
                </h3>
                <p className="text-[#0ca0f5f8] opacity-80 text-xs sm:text-sm mb-2 sm:mb-3 h-8 sm:h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    {product.discountPrice ? (
                      <>
                        <span className="text-[#0ca0f5f8] font-bold text-sm sm:text-base">
                          R{product.discountPrice.toFixed(2)}
                        </span>
                        <span className="text-[#0ca0f5f8] opacity-70 line-through text-xs">
                          R{product.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#0ca0f5f8] font-bold text-sm sm:text-base">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="bg-[#0ca0f5f8] hover:bg-[#0ca0f5f8] text-white p-1.5 sm:p-2 rounded-full transition-colors shadow-sm hover:shadow-md"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.35 2.65a1 1 0 001.1 1.65h9.25m-9 0a2 2 0 104 0m5 0a2 2 0 104 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleProducts < filteredProducts.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-white border border-[#0ca0f5f8] text-[#0ca0f5f8] hover:bg-[#F8BBD9] font-semibold py-2.5 px-6 rounded-md shadow-sm transition-all hover:shadow-md"
            >
              Load More Delights
            </button>
          </div>
        )}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductsList;