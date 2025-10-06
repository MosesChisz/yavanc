import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import { productData } from './ProductData';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const foundProduct = productData.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 2000);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="half-star-detail">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-star-detail)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="0.5" fill="#D1D5DB" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return stars;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FDF6E3] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-[#0ca0f5f8] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-[#0ca0f5f8] text-sm">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e3fdf5] py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-1 text-xs mb-4">
          <button 
            onClick={() => navigate('/')} 
            className="text-[#0ca0f5f8] hover:text-[#EA580C] transition-colors"
          >
            Home
          </button>
          <svg className="w-3 h-3 text-[#0ca0f5f8]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-[#0ca0f5f8] font-medium">{product.name}</span>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#F3F4F6]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Product Images */}
            <div className="p-4 lg:p-5 flex justify-center">
              <div className="space-y-3 max-w-md w-full">
                {/* Main Image */}
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mx-auto max-w-xs">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="flex justify-center space-x-2">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 rounded-md overflow-hidden border transition-all ${
                          selectedImage === index ? 'border-[#EA580C]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Information */}
            <div className="p-4 lg:p-5">
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    {product.isNew && (
                      <span className="bg-[#A7F3D0] text-[#0ca0f5f8] text-xs font-semibold px-1.5 py-0.5 rounded">NEW</span>
                    )}
                    {product.discountPrice && (
                      <span className="bg-[#0ca0f5f8] text-white text-xs font-semibold px-1.5 py-0.5 rounded">SALE</span>
                    )}
                    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <h1 className="text-xl lg:text-2xl font-bold text-[#0ca0f5f8] mb-2">{product.name}</h1>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">{renderStars(product.rating)}</div>
                    <span className="text-base font-medium text-[#8B4513]">{product.rating}</span>
                    <span className="text-[#0ca0f5f8] opacity-70 text-sm">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center space-x-2">
                    {product.discountPrice ? (
                      <>
                        <span className="text-2xl font-bold text-[#0ca0f5f8]">${product.discountPrice.toFixed(2)}</span>
                        <span className="text-lg text-[#8B4513] opacity-70 line-through">${product.price.toFixed(2)}</span>
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-1.5 py-0.5 rounded">
                          {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-[#8B4513]">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-base font-semibold text-[#0ca0f5f8] mb-2">Description</h3>
                  <p className="text-[#0ca0f5f8] opacity-80 text-sm leading-relaxed">{product.fullDescription}</p>
                </div>

                {/* Features */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-base font-semibold text-[#0ca0f5f8] mb-2">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#0ca0f5f8] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 justify-center">
                    <label className="text-xs font-medium text-[#0ca0f5f8]">Quantity:</label>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="px-2 py-1 text-[#8B4513] font-medium text-sm">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className={`flex-1 flex items-center justify-center space-x-1 py-2 px-4 rounded-md font-semibold text-sm transition-all ${
                        product.inStock
                          ? isAddedToCart
                            ? 'bg-green-300 text-white'
                            : 'bg-[#0ca0f5f8] hover:bg-[#0c84f5f8] text-white shadow-md hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.35 2.65a1 1 0 001.1 1.65h9.25m-9 0a2 2 0 104 0m5 0a2 2 0 104 0" />
                      </svg>
                      <span>{isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;