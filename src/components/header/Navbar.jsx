import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/icons/yavanc.png";
import { Cake, ShoppingCart, Menu, X, Phone } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart items count
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Products", href: "/shop", current: false },
    // { name: "Services", href: "/services", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  // Update current page based on current path
  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname === item.href
  }));

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleOrderNow = () => {
    // You can add order logic here or navigate to order page
    console.log("Order now clicked");
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0ca0f5f8] to-[#0ca0f5f8] text-white py-1 px-4">
        <div className="container mx-auto text-center text-xs">
          <p>
            🎉 Free delivery in Gauteng for orders over R500! | Order now: +278 3742 4056
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#e3fdfd] shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo - Left Side */}
            <div className="flex items-center flex-1 lg:flex-none">
              <img
                src={logo}
                alt="Yavanc Health Care"
                className="h-8 w-auto object-contain md:h-10 lg:h-12 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => handleNavigation("/")}
              />
            </div>

            {/* Center Navigation Links */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-6 xl:gap-8">
                {updatedNavigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`font-medium transition-colors duration-200 text-sm cursor-pointer ${
                      item.current
                        ? "text-[#0ca0f5f8] border-b-2 border-[#0ca0f5f8]"
                        : "text-[#0ca0f5f8] hover:text-[#0ca0f5f8]"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center justify-end flex-1 lg:flex-none gap-3 lg:gap-4">
              {/* Cart Icon with Badge */}
              <div className="relative">
                <button 
                  onClick={() => handleNavigation("/cart")} // Add your cart route here
                  className="flex items-center p-1.5 text-[#0ca0f5f8] hover:text-[#0ca0f5f8] transition-colors duration-200 cursor-pointer"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#0ca0f5f8] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>

              {/* Order Now Button - Hidden on small screens */}
              <button 
                onClick={() => navigate("/contact")}
                className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-[#0bc6f5] to-[#0ca0f5f8] text-white px-3 lg:px-4 py-1.5 rounded-full font-semibold text-xs hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <Phone className="w-3 h-3" />
                <span>Order Now</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-1.5 text-[#0ca0f5f8] hover:text-[#0ca0f5f8] transition-colors duration-200 cursor-pointer"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#F3F4F6] shadow-xl">
            <div className="container mx-auto px-3 py-3">
              {/* Mobile Navigation Links */}
              <div className="space-y-1 mb-4">
                {updatedNavigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`block w-full text-left py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm cursor-pointer ${
                      item.current
                        ? "bg-[#0ca0f5f8]/10 text-[#0ca0f5f8] border-l-4 border-[#0ca0f5f8]"
                        : "text-[#0ca0f5f8] hover:bg-[#0ca0f5f8]/5"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile Order Button */}
              <button 
                // onClick={handleOrderNow}
                className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-[#0ca0f5f8] to-[#0ca0f5f8] text-white py-2 px-3 rounded-lg font-semibold text-xs hover:shadow-lg transition-all duration-200 mt-1 cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                <Phone className="w-3 h-3" />
                Call to Order: +283 3742 4056
              </button>
            </div>
          </div>
        )}
      </nav>


      {/* Secondary Navigation Bar */}
      <div className="bg-[#0ca0f5f8] text-[#FDF6E3] py-2 hidden lg:block">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <span className="font-semibold">Today's Specials:</span>
              <span>💊 X-ray guaze sterile - R25</span>
              <span>💊 Burn guaze - R12</span>
              <span>💉 Insulin needle & syringe - R15</span>
            </div>
            <div className="flex items-center gap-1">
              <span>sa</span>
              <span>SA</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;