import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { 
    items: cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart
  } = useCart();
  
  const navigate = useNavigate();

  const handleWhatsAppQuote = () => {
    let message = "Hello! I would like a quotation for the following baked goods:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Quantity: ${item.quantity}\n`;
    });
    
    message += "\nThank you!";
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/27631501184?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  // Calculate total items and quantity
  const totalItems = cartItems.length;
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#e3fdf5] py-4 px-4 sm:py-8 pt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-6 sm:mb-8 relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#F8BBD9] rounded-full opacity-30"></div>
          <div className="absolute -bottom-2 -right-4 w-6 h-6 bg-[#A7F3D0] rounded-full opacity-30"></div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0ca0f5f8] mb-2">
            Your Products Cart
          </h1>
          <p className="text-[#0ca0f5f8] opacity-90 text-sm sm:text-base">
            {totalItems} {totalItems === 1 ? 'product item' : 'products items'} • {totalQuantity} total products
          </p>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F8BBD9] to-[#0bb3f5] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-[#0ca0f5f8] mb-2">Your cart is empty</h2>
            <p className="text-[#0ca0f5f8] opacity-80 mb-6">Looks like you haven't added any product yet!</p>
            <button 
              onClick={() => navigate("/shop")}
              className="bg-[#0ca0f5f8] hover:bg-[#0ca0f5f8] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Our Best Products
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Table Headers - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-10 gap-4 px-6 py-4 bg-gradient-to-r from-[#F8BBD9] to-[#A7F3D0] text-[#0ca0f5f8] text-sm font-bold">
                  <div className="col-span-6">Sweet Treat</div>
                  <div className="col-span-4 text-center">Quantity</div>
                </div>
                
                {/* Cart Items */}
                {cartItems.map(item => (
                  <div key={item.id} className="md:grid md:grid-cols-10 md:gap-4 p-4 md:p-6 border-b border-[#F3F4F6] last:border-b-0 hover:bg-[#FDF6E3] transition-colors">
                    {/* Mobile Card Layout */}
                    <div className="md:hidden bg-gradient-to-r from-[#FDF6E3] to-white rounded-xl p-4 space-y-3 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-md border-2 border-[#F8BBD9]"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0ca0f5f8] text-sm leading-tight">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#0ca0f5f8] text-xs mt-2 flex items-center hover:text-[#0ca0f5f8] transition-colors"
                          >
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#0ca0f5f8]">Quantity:</span>
                        <div className="flex items-center bg-white border border-[#0bc6f5] rounded-lg shadow-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-2 text-[#0ca0f5f8] hover:bg-[#0bdaf5] hover:text-white transition-colors font-bold"
                          >
                            -
                          </button>
                          <span className="px-4 py-2 text-[#0ca0f5f8] font-bold bg-[#FDF6E3]">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-2 text-[#0ca0f5f8] hover:bg-[#0bd2f5] hover:text-white transition-colors font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:contents">
                      {/* Product Info */}
                      <div className="md:col-span-6 flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-md border-2 border-[#F8BBD9]"
                        />
                        <div className="ml-4">
                          <h3 className="font-bold text-[#0ca0f5f8] text-base">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#0ca0f5f8] text-sm mt-1 flex items-center hover:text-[#0ca0f5f8] transition-colors"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove from cart
                          </button>
                        </div>
                      </div>
                      
                      {/* Quantity */}
                      <div className="md:col-span-4 flex items-center justify-center">
                        <div className="flex items-center border border-[#0bdaf5] rounded-lg shadow-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-2 text-[#0ca0f5f8] hover:bg-[#0bd2f5] hover:text-white transition-colors font-bold"
                          >
                            -
                          </button>
                          <span className="px-4 py-2 text-[#0ca0f5f8] font-bold bg-[#FDF6E3] min-w-[3rem] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-2 text-[#0ca0f5f8] hover:bg-[#0b97f5] hover:text-white transition-colors font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                <button 
                  onClick={() => navigate("/shop")}
                  className="w-full sm:w-auto text-[#0ca0f5f8] hover:text-[#0ca0f5f8] font-bold flex items-center justify-center sm:justify-start hover:bg-[#F8BBD9] py-3 px-6 rounded-full transition-all border border-[#8B4513]"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full sm:w-auto text-[#0ca0f5f8] hover:text-white hover:bg-[#0ca0f5f8] font-bold hover:border-[#0ca0f5f8] py-3 px-6 rounded-full transition-all border border-[#EA580C]"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Quote Request Summary */}
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-white to-[#FDF6E3] rounded-2xl shadow-xl p-6 lg:sticky lg:top-20 border border-[#F8BBD9]">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0bbef5] to-[#0ca0f5f8] rounded-full flex items-center justify-center mr-3 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#0ca0f5f8]">Products Quote Request</h2>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-[#F8BBD9] to-[#A7F3D0] rounded-xl p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[#0ca0f5f8] font-semibold">Total Products</span>
                      <span className="bg-[#0ca0f5f8] text-white text-sm font-bold px-3 py-1 rounded-full">{totalItems}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0ca0f5f8] font-semibold">Total Quantity</span>
                      <span className="bg-[#0ca0f5f8] text-white text-sm font-bold px-3 py-1 rounded-full">
                        {totalQuantity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-[#FDF6E3] to-white rounded-xl border border-[#0ca0f5f8]">
                    <div className="text-3xl mb-2">🏥</div>
                    <p className="text-sm text-[#0ca0f5f8] leading-relaxed font-medium">
                      Get the latest pricing for your selected medical products with our trusted deals!
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={handleWhatsAppQuote}
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-600 hover:to-green-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <svg 
                    className="mr-2 w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                  </svg>
                  Get Product Quote Via WhatsApp
                </button>
                
                <div className="text-center mt-4">
                  <p className="text-xs text-[#0ca0f5f8] opacity-70 mb-2">or</p>
                  <button 
                    onClick={() => navigate("/shop")}
                    className="text-[#0ca0f5f8] hover:text-[#0ca0f5f8] text-sm font-bold hover:underline transition-all"
                  >
                    Browse More Products
                  </button>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs font-bold text-green-800 mb-1">Quick & Fast Response</p>
                      <p className="text-xs text-green-700 leading-relaxed">Get personalized quotes via WhatsApp now!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;