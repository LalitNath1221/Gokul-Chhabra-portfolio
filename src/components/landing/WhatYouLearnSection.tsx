 import { CheckCircle } from 'lucide-react';
 
 const learnings = [
   "Master stock market fundamentals, intraday trading, key concepts, and terminologies.",
   "Discover the best stocks for maximum profit, ensuring smart investments.",
   "Learn the perfect timing to buy and sell stocks for consistent profits.",
   "Unlock my 3 insider secrets on trading factors—predict market moves.",
   "Copy my 5 star setup & Set up your trading accounts in just 2 days.",
   "Minimize investment risks and secure your Capital with me on Futures & Options.",
   "Everything you need for a successful Portfolio Management.",
   "How to protect yourself during market crashes and company downfalls.",
 ];
 
 const WhatYouLearnSection = () => {
   return (
     <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
       <div className="max-w-4xl mx-auto">
         <h2 className="section-title mb-4">What You'll Learn <span className='text-blue-800'>Inside The Webinar</span></h2>
         <p className="text-center text-gray-600 mb-10">
           Not theory. Not YouTube clips. A full-day, live immersion where you will:
         </p>
         
         <div className="grid md:grid-cols-2 gap-4 mb-10">
           {learnings.map((item, index) => (
             <div 
               key={index} 
               className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
             >
               <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
               <span className="text-gray-700 text-sm">{item}</span>
             </div>
           ))}
         </div>
 
         <div className="text-center">
           <a href="#" className="btn-cta text-lg mb-4">
             Book Your Seat Now Only at <span className="line-through opacity-70">₹497</span> ₹99
           </a>
           <p className="text-red-500 font-semibold mt-4">
             HURRY! Limited Seats Available
           </p>
         </div>
       </div>
     </section>
   );
 };
 
 export default WhatYouLearnSection;