import React from 'react';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'হোম', href: '#home' },
    { label: 'বায়ো', href: '#bio' },
    { label: 'কন্টাক্ট', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-indigo-600">
          প্রফেশনাল প্রোফাইল
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button could go here if needed, keeping it minimal per request */}
      </div>
    </nav>
  );
};

export default Navbar;

