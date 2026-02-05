import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const StickyBottomBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 59,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-4 px-4 bg-blue-100 border-t-4 border-blue-800 rounded-t-xl">
      <div className="  flex flex-col gap-2 sm:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-4 font-bold text-lg md:text-2xl">
          <span className="text-black">
            Limited Time Offer
          </span>
          <span className="text-red-800  font-mono">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
            {formatTime(timeLeft.seconds)}
          </span>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base"
        >
          Book Your Seat Now{" "}
          <span className="line-through opacity-70">₹499</span> ₹99
        </a>
      </div>
    </div>
  );
};

export default StickyBottomBar;
