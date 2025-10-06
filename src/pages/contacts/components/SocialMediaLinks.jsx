import React from 'react';
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid';

const SocialMediaLinks = () => {
  const socialPlatforms = [
    {
      icon: FacebookIcon,
      name: 'Facebook',
      handle: '@PowerSolutions',
      url: '#',
      color: 'bg-blue-600',
      description: 'Follow for tips & updates'
    },
    {
      icon: InstagramIcon,
      name: 'Instagram',
      handle: '@PowerSolutions',
      url: '#',
      color: 'bg-pink-600',
      description: 'See our work in action'
    },
    {
      icon: TwitterIcon,
      name: 'Twitter',
      handle: '@PowerSolutions',
      url: '#',
      color: 'bg-sky-500',
      description: 'Quick updates & alerts'
    },
    {
      icon: YoutubeIcon,
      name: 'YouTube',
      handle: 'Power Solutions',
      url: '#',
      color: 'bg-red-600',
      description: 'Tutorials & project tours'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#1E40AF] to-[#0F2A7F] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-4">
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#1E40AF]" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Connect With Us Online
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Follow our social media channels for maintenance tips, project showcases, 
          and exclusive offers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              className="card bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="card-body text-center p-6">
                <div className={`w-12 h-12 mx-auto rounded-full ${platform.color} flex items-center justify-center mb-3`}>
                  <platform.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{platform.name}</h3>
                <p className="text-blue-200 text-sm mb-2">{platform.handle}</p>
                <p className="text-blue-100 text-xs">{platform.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm max-w-2xl mx-auto">
          <h4 className="text-white font-semibold mb-2">Join Our Community</h4>
          <p className="text-blue-100 text-sm mb-4">
            Get exclusive access to DIY tips, energy-saving advice, and special promotions
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered flex-1 max-w-md"
            />
            <button className="btn bg-[#EA580C] hover:bg-orange-700 border-none text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;