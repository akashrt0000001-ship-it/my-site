import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight mb-6">
          রাকিব <span className="text-indigo-600">হাসান</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-light mb-8 max-w-xl leading-relaxed">
          একজন নিবেদিতপ্রাণ সফটওয়্যার ইঞ্জিনিয়ার এবং ডিজিটাল পণ্য ডিজাইনার, 
          যিনি আধুনিক প্রযুক্তি দিয়ে মানুষের সমস্যার সমাধান করতে ভালোবাসেন।
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all transform hover:-translate-y-1"
          >
            আমার সাথে যোগাযোগ করুন
          </a>
          <a 
            href="#bio" 
            className="px-8 py-4 border border-slate-200 text-slate-900 rounded-full font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
          >
            আরো জানুন
          </a>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-indigo-100 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>
          <img 
            src="https://picsum.photos/seed/pro-dev/600/600" 
            alt="Professional Portrait" 
            className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

