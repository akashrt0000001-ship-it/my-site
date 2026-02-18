import React from 'react';
import { BioData } from '../types';

const Bio: React.FC = () => {
  const data: BioData = {
    name: "রাকিব হাসান",
    profession: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
    education: [
      "কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং - ঢাকা বিশ্ববিদ্যালয়",
      "উচ্চ মাধ্যমিক - নটর ডেম কলেজ",
    ],
    interests: [
      "আর্টিফিশিয়াল ইন্টেলিজেন্স",
      "ইউজার এক্সপেরিয়েন্স ডিজাইন",
      "ভ্রমণ এবং ফটোগ্রাফি",
      "ওপেন সোর্স কন্ট্রিবিউশন"
    ],
    description: "আমি বিগত ৫ বছর ধরে আধুনিক ওয়েব প্রযুক্তি নিয়ে কাজ করছি। আমার মূল লক্ষ্য হলো এমন কিছু তৈরি করা যা মানুষের প্রাত্যহিক জীবনকে সহজ করে তোলে। আমি বিশ্বাস করি, প্রযুক্তির সাথে নান্দনিকতার মেলবন্ধনই শ্রেষ্ঠ উদ্ভাবন জন্ম দেয়।"
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center md:text-left">আমার সম্পর্কে</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-indigo-600 uppercase tracking-wider mb-2">পেশা ও উদ্দেশ্য</h3>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              "{data.description}"
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 uppercase tracking-wider mb-4">শিক্ষা</h3>
            <ul className="space-y-3">
              {data.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <span className="w-2 h-2 mt-2 bg-indigo-400 rounded-full shrink-0"></span>
                  {edu}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-indigo-600 uppercase tracking-wider mb-4">আগ্রহের ক্ষেত্র</h3>
            <div className="flex flex-wrap gap-2">
              {data.interests.map((interest, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-slate-600 text-sm font-medium shadow-sm hover:border-indigo-200 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-indigo-600 p-8 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-2">৫+ বছরের অভিজ্ঞতা</h3>
            <p className="opacity-90 font-light">
              সারা বিশ্বের ক্লায়েন্টদের জন্য মানসম্মত ডিজিটাল সমাধান তৈরি করছি।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

