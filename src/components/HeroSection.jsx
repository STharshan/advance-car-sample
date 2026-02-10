import React from 'react';
import { Instagram, Facebook, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className='max-w-7xl mx-auto'>

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Social Media Icons */}
        <div className="absolute left-5 md:left-8 top-[30%] flex flex-col gap-8 md:gap-10 z-20">
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://www.instagram.com/mirage__detailing/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Instagram className="text-white group-hover:text-pink-400 transition" size={22} />
            </a>
            <span className="text-white text-sm" style={{ writingMode: "vertical-rl" }}>
              Instagram
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href="https://www.facebook.com/people/Mirage-Detailing/100093614172697/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Facebook className="text-white group-hover:text-blue-400 transition" size={22} />
            </a>
            <span className="text-white text-sm" style={{ writingMode: "vertical-rl" }}>
              Facebook
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute bottom-[15%] left-8 md:left-16 z-20">
          <p className="text-white text-[11px] md:text-sm tracking-[0.2em] font-semibold mb-6">
            FULL SERVICE AND EXCELLENT QUALITY
          </p>

          <h1 className="text-primary text-[3.8rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold leading-[0.85]">
            CAR DETAILING
          </h1>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 right-8 md:right-16 flex items-center gap-3 text-white z-20">
          <span className="text-[10px] md:text-xs tracking-[0.3em]">SCROLL DOWN</span>
          <ArrowDown className="animate-bounce" size={16} />
        </div>
      </div>
    </div>
  );
}
