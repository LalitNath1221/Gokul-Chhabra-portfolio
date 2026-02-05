 import { CheckCircle } from 'lucide-react';
 
 const MoneyBackSection = () => {
   return (
     <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
       <div className="max-w-6xl mx-auto">
         <div className="bg-white rounded-2xl shadow-xl overflow-visible">
           <div className="grid md:grid-cols-2 gap-0">
             
             
             {/* Content Side */}
             <div className="p-8 pr-4 text-start">
               <h3 className="text-blue-800 font-bold text-xl mb-2">No Questions Asked!</h3>
               <h2 className="text-4xl font-bold text-gray-900 mb-4">100% Money Back Guarantee</h2>
               <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                 If you are unhappy with the Webinar because we couldn't teach you anything new, you may qualify for our <strong>100% money back guarantee</strong> and get a full refund within 7 days of your purchase as per our Refund Policy.
               </p>
               
               <div className="flex items-center gap-6 mb-6">
                 <div className="flex items-center gap-2 text-gold">
                   <CheckCircle className="w-5 h-5" />
                   <span className="text-sm font-medium">100% Refund Available</span>
                 </div>
                 <div className="flex items-center gap-2 text-gold">
                   <CheckCircle className="w-5 h-5" />
                   <span className="text-sm font-medium">7 Day Refund Policy</span>
                 </div>
               </div>
               
               <a href="#" className="btn-cta">
                 Get ENTRY At Just ₹99
               </a>
             </div>
             {/* Image Side */}
             <div className="relative bg-gradient-to-br from-blue-50 to-white p-0 flex items-center justify-center">
               <div className="relative">
                 <img 
                   src="https://algo.dilsetrader.in/assets/gokul_sir-BKBWMiUC.png" 
                   alt="Gokul Chhabra"
                   className="w-full h-auto rounded-md overflow-hidden"
                 />
                 
               </div>
               <div className="absolute -top-4 -right-4 w-20 h-20">
                   <img src="https://algo.dilsetrader.in/assets/badge_green-DY9PYqHr.png" alt="" />
                 </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default MoneyBackSection;