 const testimonialImages = [
   "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/Testimonials/(1266+x+1000+size)_Testimonial++-+01.png",
   "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/Testimonials/(1266+x+1000+size)_Testimonial+-+02.png",
   "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/Testimonials/(1266+x+1000+size)_Testimonial++-+03.png",
   "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/Testimonials/(1266+x+1000+size)_Testimonial+-+04.png",
   "https://algotradingbucketassest.s3.ap-south-1.amazonaws.com/Testimonials/(1266+x+1000+size)_Testimonial+.png",
 ];
 
 const TestimonialImagesSection = () => {
   return (
     <section className="py-16 px-4 bg-gray-50">
       <div className="max-w-6xl mx-auto">
         <h2 className="section-title mb-10 leading-tight">
           Have A Look At What People Have To Say About It{' '}
           <span className="text-blue-600">You Could Be The Next…!</span>
         </h2>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
           {testimonialImages.map((img, index) => (
             <div key={index} className="rounded-xl overflow-hidden shadow-lg card-hover">
               <img 
                 src={img} 
                 alt={`Testimonial ${index + 1}`}
                 className="w-full h-auto"
               />
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
 
 export default TestimonialImagesSection;