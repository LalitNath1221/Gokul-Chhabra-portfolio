 import { useEffect, useRef } from 'react';
 
 interface ScrollingBannerProps {
   showTimer?: boolean;
 }
 
 const ScrollingBanner = ({ showTimer = true }: ScrollingBannerProps) => {
   return (
     <div className="bg-gradient-to-r from-blue-900 to-blue-950 overflow-hidden py-3">
       <div className="flex animate-scroll-x whitespace-nowrap">
         {[...Array(4)].map((_, i) => (
           <div key={i} className="flex items-center gap-8 px-8">
             <span className="text-white font-medium flex items-center gap-2">
               <span className="text-yellow-400">•</span>
               Limited Time Offer Sign Up Now And Get 50% Discount + Free E-Book + Free Consultation Call.
             </span>
             <span className="text-white font-medium flex items-center gap-2">
               <span className="text-yellow-400">•</span>
               Offer Expires In{' '}
               <span className="text-red-400 font-bold">01:59:52</span>
             </span>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default ScrollingBanner;