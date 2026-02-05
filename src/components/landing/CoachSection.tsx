 import { CheckCircle } from 'lucide-react';
 
 const CoachSection = () => {
   return (
     <section className="py-16 px-4 bg-white">
       <div className="max-w-6xl mx-auto">
         <h2 className="section-title mb-10">Your Coach</h2>
         
         <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden">
           <div className="grid md:grid-cols-3 gap-0">
             {/* Image Side */}
             <div className="col-span-2 md:col-span-1 relative flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-blue-50">
               <img 
                 src="https://algo.dilsetrader.in/assets/sebi-sYNx6rbS.png" 
                 alt="Gokul Chhabra - SEBI Registered"
                 className="w-full h-auto bg-white rounded-md"
               />
             </div>
             
             {/* Content Side */}
             <div className="p-8 col-span-2 md:text-start">
               <h3 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-2">Gokul Chhabra</h3>
               <p className="text-gray-500 font-semibold text-lg md:text-2xl mb-4">Empowering Traders, Transforming Lives</p>
               
               <div className='font-semibold'>
                <p className="text-gray-600 mb-4 leading-normal">
                 Meet <strong>Gokul Chhabra</strong> – SEBI Registered Research Analyst & CEO of Multi-Million Dollar Companies.
               </p>
               
               <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                 Gokul is a top-rated financial expert, recognized as a Social Entrepreneur by Godrej at just 27. With an MBA from MDI and a B.Com from Ramjas, he brings deep market insights and a visionary approach to trading and Ed-tech.
               </p>
               </div>
               
               <div className="flex w-full max-w-80 items-center gap-2 bg-green-900 text-white px-4 py-2 rounded-lg mb-6">
                 <CheckCircle className="w-10 h-10" />
                 <span className="text-lg md:text-xl font-medium">SEBI Registered Research Analyst <strong>INH000014827</strong></span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default CoachSection;