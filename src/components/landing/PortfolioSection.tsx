 const PortfolioSection = () => {
   const portfolioImages = [
     { src: "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/PROOF+1.png", alt: "Dashboard Analytics" },
     { src: "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/PROOF+2.png", alt: "Interview with Developer" },
     { src: "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/PROOF+3.png", alt: "Project Demo" },
   ];
 
   return (
     <section className="py-12 px-4 bg-white">
       <div className="max-w-6xl mx-auto">
         <h2 className="section-title mb-8">Gokul's Portfolio</h2>
         
         <div className="grid md:grid-cols-3 gap-6">
           {portfolioImages.map((img, index) => (
             <div key={index} className="relative rounded-xl overflow-hidden shadow-lg card-hover bg-gray-100">
               <img 
                 src={img.src} 
                 alt={img.alt}
                 className="w-full h-48 object-cover"
               />
               <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                 <span className="w-2 h-2 bg-green-500 rounded-full" />
                 Mute
               </div>
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                 <div className="flex items-center justify-between text-white text-xs">
                   <span>00:00</span>
                   <span>▶ Play</span>
                 </div>
               </div>
             </div>
           ))}
         </div>
         
         <div className="text-center mt-8">
           <a href="#" className="btn-cta">
             Join Now
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default PortfolioSection;