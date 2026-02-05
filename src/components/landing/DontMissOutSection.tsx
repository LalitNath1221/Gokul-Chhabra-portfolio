 const DontMissOutSection = () => {
   return (
     <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
       <div className="max-w-6xl mx-auto text-center">
         <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-800">Don't Miss Out!</h2>
         <p className="text-black mb-8 text-lg md:text-3xl font-semibold">
           Secure Your Seat for Exclusive No-Skill TRADING MASTERCLASS To Build strong market understanding using AI-powered tools.
         </p>
         
         <a 
           href="#" 
           className="inline-flex items-center gap-2 bg-red-700 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
         >
           Book Your Seat
         </a>
         
         <p className="mt-6 text-black text-2xl font-semibold">
           Hurry Up! Limited Seats Left
         </p>
       </div>
     </section>
   );
 };
 
 export default DontMissOutSection;