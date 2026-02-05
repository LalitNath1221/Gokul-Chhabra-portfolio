 import { Send, TrendingUp, BookOpen, Target } from 'lucide-react';
 
 const benefits = [
   {
     icon: TrendingUp,
     title: "You Want To Become A Professional Trader"
   },
   {
     icon: Target,
     title: "You Want To Make Consistent Profits In The Markets"
   },
   {
     icon: BookOpen,
     title: "You Want To Start From The Absolute Basics"
   }
 ];
 
 const BenefitsSection = () => {
   return (
     <section className="py-16 px-4 bg-white">
       <div className="max-w-4xl mx-auto">
         <h2 className="section-title mb-10">You Should Attend This Webinar If</h2>
         
         <div className="grid md:grid-cols-3 gap-6 mb-10">
           {benefits.map((benefit, index) => (
             <div key={index} className="text-center p-6 rounded-xl bg-gray-50 card-hover">
               <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                 <benefit.icon className="w-8 h-8 text-white" />
               </div>
               <h3 className="font-semibold text-gray-900 text-sm leading-relaxed">{benefit.title}</h3>
             </div>
           ))}
         </div>
 
         <div className="text-center">
           <a href="#" className="btn-cta text-lg">
             Get ENTRY at Just ₹99
             <Send className="w-5 h-5" />
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default BenefitsSection;