 import { 
   Briefcase, 
   GraduationCap, 
   TrendingUp, 
   Building2, 
   Landmark, 
   User, 
   Wallet, 
   Handshake, 
   Search, 
   DollarSign, 
   Settings, 
   Users, 
   Info 
 } from 'lucide-react';
 
 const categories = [
   { icon: Briefcase, label: "Job Professional" },
   { icon: GraduationCap, label: "Beginners" },
   { icon: TrendingUp, label: "Investors" },
   { icon: Building2, label: "Business Man" },
   { icon: Landmark, label: "Stock Broker" },
   { icon: User, label: "Beginner Stock Trader" },
   { icon: Wallet, label: "Financial Advisor" },
   { icon: Handshake, label: "Investment Advisor" },
   { icon: Search, label: "Research Analyst" },
   { icon: DollarSign, label: "Hedge Fund Manager" },
   { icon: Settings, label: "Operation Manager" },
   { icon: Users, label: "Investors" },
   { icon: Info, label: "Anyone Who Is Interested In Stock Market Trading & Making Money In Trading" },
 ];
 
 const WhoIsThisForSection = () => {
   return (
     <section className="py-16 px-4 bg-white">
       <div className="max-w-4xl mx-auto">
         <h2 className="section-title mb-10">Who This Workshop Is For?</h2>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
           {categories.slice(0, 12).map((cat, index) => (
             <div 
               key={index} 
               className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 card-hover"
             >
               <cat.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
               <span className="text-sm font-medium text-gray-800">{cat.label}</span>
             </div>
           ))}
         </div>
         
         {/* Last wide item */}
         <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 mb-10">
           <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />
           <span className="text-sm font-medium text-gray-800">
             Anyone Who Is Interested In Stock Market Trading & Making Money In Trading
           </span>
         </div>
 
         <div className="text-center">
           <a href="#" className="btn-cta text-lg">
             Book Your Seat Now Only at <span className="line-through opacity-70">₹497</span> ₹99
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default WhoIsThisForSection;