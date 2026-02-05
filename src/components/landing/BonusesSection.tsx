 const bonuses = [
   { title: "Advanced Market Analysis Setup", img: "https://algo.dilsetrader.in/assets/bonuses5-DpabwQHI.png" },
   { title: "Relative Strength Index (RSI) Magic", img: "https://algo.dilsetrader.in/assets/bonuses3-V29gOGvj.png" },
   { title: "Professional Charts Templates", img: "https://algo.dilsetrader.in/assets/bonuses6-76FK7EZu.png" },
   { title: "Entry–Exit Roadmap for Traders", img: "https://algo.dilsetrader.in/assets/bonuses2-D2XZcWVF.png" },
   { title: "Backtesting Free Tool", img: "https://algo.dilsetrader.in/assets/bonuses4-HGNSBRFU.png" },
   { title: "FREE Bonuses Worth ₹50,000!", img: "https://algo.dilsetrader.in/assets/bonuses1-BtfpIhyh.png" },
 ];
 
 const BonusesSection = () => {
   return (
     <section className="py-16 px-4 bg-white">
       <div className="max-w-6xl mx-auto">
         <h2 className="section-title mb-10">Exclusive Bonuses</h2>
         
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
           {bonuses.map((bonus, index) => (
             <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md card-hover">
               <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                 <img 
                   src={bonus.img} 
                   alt={bonus.title}
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="p-3">
                 <h3 className="font-semibold text-gray-900 text-xs md:text-sm text-center">{bonus.title}</h3>
               </div>
             </div>
           ))}
         </div>
 
         <div className="text-center mt-10">
           <a href="#" className="btn-cta text-lg">
             Join Now
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default BonusesSection;