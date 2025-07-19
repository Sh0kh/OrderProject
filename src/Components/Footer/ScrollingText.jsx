import React from "react";

export default function ScrollingText() {
  return (
    <div className="w-full overflow-hidden bg-black  py-8">
      <div className="relative flex whitespace-nowrap animate-marquee-fast">
        <span className="text-4xl md:text-6xl font-bold text-white mx-10 ">
          Our Mission — Your Success  Our Mission — Your Success  Our Mission — Your Success  Our Mission — Your Success 
        </span>
        <span className="text-4xl md:text-6xl font-bold text-white mx-10">
          Our Mission — Your Success  Our Mission — Your Success  Our Mission — Your Success  Our Mission — Your Success 
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee-fast {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-fast {
          animation: marquee-fast 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
