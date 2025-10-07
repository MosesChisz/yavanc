import { Stethoscope, Phone, ShieldCheck, HeartPulse } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1797ca] to-[#096da7] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-4xl">💊</div>
        <div className="absolute top-1/4 right-20 text-5xl">🩺</div>
        <div className="absolute bottom-20 left-20 text-4xl">💉</div>
        <div className="absolute bottom-10 right-10 text-5xl">🧬</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">⚕️</div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Header Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-emerald-100 p-3 rounded-full">
            <Stethoscope className="w-8 h-8 text-[#0F766E]" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Trusted Medical Solutions
          <span className="block text-emerald-200">For a Healthier Tomorrow</span>
        </h1>
        
        <p className="text-base md:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
          Providing quality medical products and healthcare support that you can rely on. 
          From prescription medicines to healthcare equipment, we’re here to serve you with care.
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <div className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-4 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call Now: +2763150118</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-full font-semibold border border-emerald-200/30 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Trusted & Certified</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-white font-bold text-lg">20+</div>
            <div className="text-emerald-200 text-xs">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-lg">100%</div>
            <div className="text-emerald-200 text-xs">Quality Assured</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-lg">10K+</div>
            <div className="text-emerald-200 text-xs">Satisfied Patients</div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -bottom-4 left-10 bg-emerald-300 text-[#064E3B] px-3 py-1 rounded-full text-sm font-bold shadow-lg rotate-12 hidden lg:block">
          🚚 Nationwide Delivery
        </div>
        <div className="absolute -top-4 right-10 bg-[#A7F3D0] text-[#064E3B] px-3 py-1 rounded-full text-sm font-bold shadow-lg -rotate-12 hidden lg:block">
          ❤️ Care You Can Trust
        </div>

        {/* Address */}
        <div className="mt-8 text-emerald-100 text-sm">
          <p>Find Us At:</p>
          <p className="font-semibold">2 Viner Road, Elma Park, Edenvale</p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;