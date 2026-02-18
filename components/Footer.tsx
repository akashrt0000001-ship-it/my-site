
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} রাকিব হাসান। সর্বস্বত্ব সংরক্ষিত।</p>
        <p className="mt-2">তৈরি করা হয়েছে ভালোবাসা এবং আধুনিক প্রযুক্তি দিয়ে।</p>
      </div>
    </footer>
  );
};

export default Footer;
