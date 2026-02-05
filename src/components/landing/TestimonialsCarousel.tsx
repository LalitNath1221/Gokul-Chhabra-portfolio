import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  { name: "Nilesh Nikam", role: "Swing Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/NILESH%20NIKAM.gif" },
  { name: "Shivam Yadav", role: "Intraday Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/SHIVAM%20YADAV.gif" },
  { name: "Rohith", role: "Swing Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/ROHIT.gif" },
  { name: "Alpesh", role: "Intraday Scalper", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/ALPESH.gif" },
  { name: "Arshdeep Singh", role: "MCX Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/ARSHDEEP%20DINGH.gif" },
  { name: "Ayub Shaikh", role: "Swing Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/AYUB.gif" },
  { name: "Charanpreet Singh", role: "Swing Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/CHARANPREET%20SING.gif" },
  { name: "Rakesh", role: "Intraday Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/RAKESH.gif" },
  { name: "Punith Naik", role: "BTST Trader", gif: "https://d1l4umgst7lf1f.cloudfront.net/testimonial-gif/PUNITH%20NAIK.gif" },
];

const TestimonialsCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Desktop navigation buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 items-center justify-center"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 items-center justify-center"
        >
          <ChevronRight/>
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-80 bg-gray-200">
                <img
                  src={testimonial.gif}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsCarousel;
