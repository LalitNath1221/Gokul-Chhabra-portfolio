 import { useState, useEffect } from 'react';
 import { Send, Calendar, Clock, Video, User } from 'lucide-react';
 
 const HeroSection = () => {
   const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 59, seconds: 52 });
 
   useEffect(() => {
     const timer = setInterval(() => {
       setTimeLeft(prev => {
         let { hours, minutes, seconds } = prev;
         if (seconds > 0) {
           seconds--;
         } else if (minutes > 0) {
           minutes--;
           seconds = 59;
         } else if (hours > 0) {
           hours--;
           minutes = 59;
           seconds = 59;
         }
         return { hours, minutes, seconds };
       });
     }, 1000);
     return () => clearInterval(timer);
   }, []);
 
   const formatTime = (num: number) => num.toString().padStart(2, '0');
 
   return (
     <section className="hero-gradient min-h-screen pt-8 pb-16 px-4 relative overflow-hidden">
       {/* Decorative geometric patterns */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-20 left-10 w-32 h-32 border border-gray-200 rotate-45 opacity-30" />
         <div className="absolute top-40 right-20 w-24 h-24 border border-gray-200 rotate-12 opacity-30" />
         <div className="absolute bottom-40 left-20 w-20 h-20 border border-gray-200 -rotate-12 opacity-30" />
       </div>
 
       <div className="max-w-7xl mx-auto relative z-10">
         {/* Live Badge */}
         <div className="flex justify-center mb-6">
           <div className="badge-header">
             <span className="flex items-center gap-2">
               <span className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
               <span className="text-white font-medium">Live</span>
             </span>
             <span className="text-white/90">No-Skill Trading Masterclass |</span>
             <span className="text-white">Jan 10, 2026</span>
           </div>
         </div>
 
         {/* Main Headline */}
         <div className="text-center max-w-4xl mx-auto mb-8">
           <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-gray-900">
             India's Leading SEBI-Registered Analyst Reveals His Secret{' '}
             <span className="text-red-500">"5-STAR Trading Setup"</span>{' '}
             That Teaches You the exact framework{' '}
             <span className="text-blue-600">Behind Professional Entry and Exit Decisions — Explained Live!</span>
           </h1>
           <p className="mt-4 text-gray-600 text-base md:text-lg">
             Inside This 2-Hour Live Masterclass, You'll See How One AI-powered system that helps identify market patterns most traders miss.
           </p>
         </div>
 
         {/* Main Content Grid */}
         <div className="grid lg:grid-cols-2 gap-8 items-start">
           {/* Left Column - Event Details */}
           <div className="order-2 lg:order-1">
             {/* Event Details Header */}
             <div className="flex items-center justify-center gap-4 mb-4">
               <div className="h-px bg-gray-300 flex-1 max-w-16" />
               <span className="text-gray-800 font-medium text-sm">"Invite Only" 1 Day Event Details</span>
               <div className="h-px bg-gray-300 flex-1 max-w-16" />
             </div>
 
             {/* Event Details Grid */}
             <div className="event-card mb-6">
               <div className="grid grid-cols-2">
                 <div className="p-4 border-r border-b border-gray-100">
                   <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold mb-1">
                     <Calendar className="w-3 h-3" />
                     DATE
                   </div>
                   <p className="text-gray-900 font-medium">Jan 10, 2026</p>
                 </div>
                 <div className="p-4 border-b border-gray-100">
                   <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold mb-1">
                     <Clock className="w-3 h-3" />
                     TIME
                   </div>
                   <p className="text-gray-900 font-medium">12:00 PM | 2 Hrs</p>
                 </div>
                 <div className="p-4 border-r border-gray-100">
                   <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold mb-1">
                     <Video className="w-3 h-3" />
                     PLATFORM
                   </div>
                   <p className="text-gray-900 font-medium">Zoom Meeting</p>
                 </div>
                 <div className="p-4">
                   <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold mb-1">
                     <User className="w-3 h-3" />
                     HOST
                   </div>
                   <p className="text-gray-900 font-medium">Gokul Chhabra</p>
                 </div>
               </div>
             </div>
 
             {/* CTA Button */}
             <a href="#" className="btn-cta w-full text-center text-lg">
               Book Your Seat Now <span className="price-strike">₹497</span> ₹99
               <Send className="w-5 h-5" />
             </a>
           </div>
 
           {/* Right Column - Promo Image */}
           <div className="order-1 lg:order-2">
             <div className="relative rounded-xl overflow-hidden shadow-2xl">
               <img 
                 src="https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/PROOF+1.png" 
                 alt="Algo Trading Masterclass Promo"
                 className="w-full h-auto"
               />
               <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                 <span className="flex items-center gap-1">
                   <span className="w-2 h-2 bg-red-500 rounded-full" />
                   Mute
                 </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default HeroSection;