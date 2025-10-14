import React from 'react';
import { 
  Cake,
  HeartPulse,
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Heart,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Our Products', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const categories = [
    { name: 'Oxygen Concentrator', href: '/shop?category=respiratory' },
    { name: 'Urinary Catheter Kit', href: '/shop?category=urology' },
    { name: 'Anesthesia Mask', href: '/shop?category=anesthesiology' },
    { name: 'Seasonal Specials', href: '/shop?category=seasonal' }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: '+27 63 150 1184',
      href: 'tel:+27 63 150 1184'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'info@yavanc.co.za',
      href: 'info@yavanc.co.za'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: '2 Viner Road, Elma Park, Edenvale',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4" />,
      name: 'Facebook',
      href: 'https://facebook.com'
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      name: 'Instagram',
      href: 'https://instagram.com'
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      name: 'Twitter',
      href: 'https://twitter.com'
    }
  ];

  return (
    <footer className="bg-[#0ca0f5f8] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <HeartPulse className="w-8 h-8 text-[#0bf56d]" />
              <span className="text-2xl font-bold text-[#FDF6E3]">Yavanc Health</span>
            </div>
            {/* <p className="text-[#FDF6E3]/80 text-sm leading-relaxed mb-6">
              Crafting sweet memories with traditional SA recipes since 2009. 
            </p>
            <div className="flex items-center gap-2 text-sm text-[#FDF6E3]/80">
              <span>Proudly SA</span>
              <span className="text-2xl">sa</span>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#FDF6E3] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-[#FDF6E3]/70 hover:text-[#F59E0B] text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          {/* <div>
            <h3 className="text-lg font-semibold text-[#FDF6E3] mb-4">Our Treats</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href}
                    className="text-[#FDF6E3]/70 hover:text-[#F59E0B] text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#FDF6E3] mb-4">Get In Touch</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-[#FDF6E3]/70 hover:text-[#F59E0B] transition-colors duration-200 group"
                >
                  <div className="bg-[#F59E0B]/20 p-1 rounded-full group-hover:bg-[#F59E0B]/30 transition-colors">
                    {contact.icon}
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#FDF6E3] mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-[#FDF6E3]/10 hover:bg-[#F59E0B] p-2 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-12 pt-8 border-t border-[#FDF6E3]/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-[#FDF6E3] mb-2">
                Sweet Updates Delivered Fresh
              </h3>
              <p className="text-[#FDF6E3]/70 text-sm">
                Subscribe to get special offers, free giveaways, and seasonal treats
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full bg-[#FDF6E3]/10 border border-[#FDF6E3]/20 text-white placeholder-[#FDF6E3]/50 text-sm focus:outline-none focus:border-[#F59E0B] flex-1 min-w-0"
              />
              <button className="bg-gradient-to-r from-[#0c5ef5f8] to-[#0cf5c3f8] text-white px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-200 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FDF6E3]/10 bg-[#0c79f5f8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="text-[#FDF6E3]/70 text-sm">
              © {currentYear} Yavanc Health Care. All rights reserved.
            </div>
            {/* <div className="flex items-center gap-1 text-[#FDF6E3]/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#F8BBD9] fill-current" />
              <span>SA</span>
            </div> */}
            <div className="text-[#FDF6E3]/70 text-sm">
              <a href="/sitemap" className="hover:text-[#F59E0B] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;