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