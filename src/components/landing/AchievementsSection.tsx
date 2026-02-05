 const achievements = [
   "https://algo.dilsetrader.in/assets/Achievment1-md7DyjT9.png",
   "https://algo.dilsetrader.in/assets/Achievment2-BwKY9J24.png",
   "https://algo.dilsetrader.in/assets/Achievment3-BDUs7eTK.png",
   "https://algo.dilsetrader.in/assets/Achievment4-B7DJGXTB.png",
   "https://algo.dilsetrader.in/assets/Achievment5-Dbl3udqW.png",
   "https://algo.dilsetrader.in/assets/Achievment6-BTGCxeAx.png",
   "https://algo.dilsetrader.in/assets/Achievment7-OPEKfBKy.png",
   "https://algo.dilsetrader.in/assets/Achievment8-BVeCXldt.png",
   "https://algo.dilsetrader.in/assets/Achievment9-B08t-jn8.png",
   "https://algo.dilsetrader.in/assets/Achievment10-DRb1ZAQl.png",
   "https://algo.dilsetrader.in/assets/Achievment11-BpvG4pwa.png",
   "https://algo.dilsetrader.in/assets/Achievment12-OjvlcQ32.png",
   "https://algo.dilsetrader.in/assets/Achievment13-By0F39o2.png",
   "https://algo.dilsetrader.in/assets/Achievment14-DmmKzSLy.png",
   "https://algo.dilsetrader.in/assets/Achievment15-BEZ8UXLC.png",
   "https://algo.dilsetrader.in/assets/Achievment16-B1yor9H8.png",
 ];
 
 const AchievementsSection = () => {
   return (
     <section className="py-16 px-4 bg-gray-50">
       <div className=" mx-auto">
         <h2 className="section-title mb-10">Achievements</h2>
         
         <div className="marquee-container">
           <div className="marquee-content">
             {[...achievements, ...achievements].map((img, index) => (
               <div key={index} className="flex-shrink-0 w-60 aspect-[2/3] bg-white rounded-lg shadow-md overflow-hidden">
                 <img 
                   src={img} 
                   alt={`Achievement ${(index % 16) + 1}`}
                   className="w-full h-full object-cover"
                 />
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default AchievementsSection;