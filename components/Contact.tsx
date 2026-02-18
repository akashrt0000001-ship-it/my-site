
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">যোগাযোগ করুন</h2>
        <p className="text-slate-500">
          আপনার কোনো প্রশ্ন থাকলে বা প্রোজেক্ট নিয়ে আলোচনার জন্য নিচের ফর্মটি পূরণ করুন।
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">আপনার নাম</label>
            <input 
              required
              type="text" 
              placeholder="যেমন: আবরার আহমেদ"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">ইমেইল ঠিকানা</label>
            <input 
              required
              type="email" 
              placeholder="example@mail.com"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1">আপনার বার্তা</label>
          <textarea 
            required
            rows={5}
            placeholder="আপনার কথা এখানে লিখুন..."
            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none resize-none"
          ></textarea>
        </div>

        <button 
          disabled={status !== 'idle'}
          type="submit"
          className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-[0.98] ${
            status === 'success' 
              ? 'bg-green-500' 
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200'
          }`}
        >
          {status === 'idle' && 'বার্তা পাঠান'}
          {status === 'sending' && 'পাঠানো হচ্ছে...'}
          {status === 'success' && 'সফলভাবে পাঠানো হয়েছে!'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
