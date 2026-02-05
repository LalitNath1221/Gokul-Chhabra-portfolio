 import { useState } from 'react';
 import { ChevronDown, ChevronUp } from 'lucide-react';
 
 const faqs = [
   {
     question: "Why should I attend this webinar?",
     answer: "So that you can learn to earn ₹1,00,000 per month! This webinar is suitable for both beginners and experienced traders looking to enhance their intraday trading skills. Whether you're just starting or aiming to refine your strategies, you'll find valuable tested strategies here."
   },
   {
     question: "Is there a registration fee for the webinar?",
     answer: "Yes, this webinar is just ₹99! Bonuses worth ₹50,000 are given once you register for the masterclass. We're highly committed to sharing knowledge and helping traders succeed in their financial journey."
   },
   {
     question: "How do I register for the webinar?",
     answer: "To register, simply visit the registration page and fill out the registration form. Once registered, you will receive a confirmation email with details on how to join the webinar on the scheduled date."
   },
   {
     question: "Will the webinar be recorded for later viewing?",
     answer: "No, recordings will not be made available. We ensure every participant attends live to get the best interactive learning experience."
   },
   {
     question: "What would be the timings of the Live Webinar?",
     answer: "The Live Webinar will be held at noon on Jan 10, 2026!"
   },
   {
     question: "Is a Laptop necessary for Trading?",
     answer: "No, you can trade using your smartphone."
   },
   {
     question: "What is your Refund Policy?",
     answer: "There's 100% refund available as per our refund policy, only once the webinar slot has been booked."
   },
   {
     question: "Does this webinar focus on Trading Psychology?",
     answer: "Yes, the program covers Risk Management, Emotion Management, and Money Management."
   },
   {
     question: "How much time will it take to get the webinar link post payment?",
     answer: "After purchasing the webinar, we will send you the webinar details and joining link via WhatsApp and email. Additionally, you'll receive a reminder with the link 45 minutes before the session."
   },
 ];
 
 const FAQSection = () => {
   const [openIndex, setOpenIndex] = useState<number | null>(0);
 
   return (
     <section className="py-16 px-4 bg-white">
       <div className="max-w-3xl mx-auto">
         <h2 className="section-title mb-10">Frequently Asked Questions</h2>
         
         <div className="space-y-3">
           {faqs.map((faq, index) => (
             <div 
               key={index} 
               className="border border-gray-200 rounded-xl overflow-hidden bg-white"
             >
               <button
                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
                 className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
               >
                 <span className="flex items-center gap-3">
                   <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                     🔵
                   </span>
                   <span className="font-semibold text-gray-900">{faq.question}</span>
                 </span>
                 {openIndex === index ? (
                   <ChevronUp className="w-5 h-5 text-gray-500" />
                 ) : (
                   <ChevronDown className="w-5 h-5 text-gray-500" />
                 )}
               </button>
               {openIndex === index && (
                 <div className="px-4 pb-4 pt-0">
                   <p className="text-gray-600 text-sm leading-relaxed pl-9">{faq.answer}</p>
                 </div>
               )}
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default FAQSection;