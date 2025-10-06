import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Camera, Heart, Clock } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      category: "Lab Process",
      title: "Early Sample Preparation",
      description: "Our lab technicians start early to ensure accurate results every day",
      emoji: "🧪🌅",
      stats: { likes: "2.3k", time: "4 AM" }
    },
    {
      id: 2,
      category: "Team Work",
      title: "Collaborative Research",
      description: "Experts working together to deliver trusted healthcare solutions",
      emoji: "🤝⚕️",
      stats: { likes: "1.8k", time: "Team" }
    },
    {
      id: 3,
      category: "Supplies",
      title: "High-Quality Materials",
      description: "Sourcing the finest medical-grade supplies for reliable outcomes",
      emoji: "💊🔬",
      stats: { likes: "3.1k", time: "Verified" }
    },
    {
      id: 4,
      category: "Products",
      title: "Reliable Medical Devices",
      description: "Our devices are tested and ready to support healthcare professionals",
      emoji: "🩺✨",
      stats: { likes: "4.5k", time: "Ready" }
    },
    {
      id: 5,
      category: "Standards",
      title: "Certified Processes",
      description: "We follow strict standards to ensure safety and consistency",
      emoji: "📋✅",
      stats: { likes: "2.7k", time: "ISO" }
    },
    {
      id: 6,
      category: "Customer Impact",
      title: "Supporting Better Care",
      description: "Helping doctors and hospitals deliver the best outcomes for patients",
      emoji: "🏥❤️",
      stats: { likes: "3.9k", time: "Care" }
    }
  ];

  const openImage = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#e3fdf5] to-[#e3fdf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Camera className="w-4 h-4" />
            Behind the Scenes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-green-300 mb-4">
            Great Products
            <span className="block text-blue-400">Our Product</span>
          </h2>
          <p className="text-lg text-blue-400/80 max-w-3xl mx-auto">
            Take a closer look at our laboratory products and discover the quality, safety, and innovation behind every item we provide.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group cursor-pointer"
              onClick={() => openImage(index)}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                
                {/* Image Container */}
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl transition-transform duration-300 group-hover:scale-110">
                      {image.emoji}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {image.category}
                  </div>

                  {/* Likes */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current" />
                    {image.stats.likes}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-blue-400 font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-blue-400/80 text-sm leading-relaxed">{image.description}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 text-blue-400/70 text-xs">
                      <Clock className="w-3 h-3" />
                      {image.stats.time}
                    </div>
                    <span className="text-blue-400 text-xs font-medium">View →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-4">
              Follow Our Daily Products
            </h3>
            <p className="text-green-500/80 mb-6 max-w-2xl mx-auto">
              See more behind-the-scenes content, new product launches, and special offers 
              on our social media channels.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-[#0c79f5f8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#100cf5f8] transition-colors duration-200 flex items-center gap-2">
                Follow on Instagram
              </button>
              <button className="bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors duration-200 backdrop-blur-sm">
                Visit Our Facebook
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <button 
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white hover:text-amber-200 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-200 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-9xl">{selectedImage.emoji}</div>
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#0c79f5f8] text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage.category}
                  </span>
                  <div className="flex items-center gap-4 text-[#0c79f5f8]/70">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-current text-rose-500" />
                      <span className="text-sm">{selectedImage.stats.likes}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#0c79f5f8] mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-[#0c79f5f8]/80 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;