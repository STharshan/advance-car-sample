import React from "react";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden">

            {/* Background Image (you can replace with video) */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark gradient overlay - matches the image */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent" />

            {/* Social Media Sidebar - left side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                <div className="flex flex-col items-center space-y-6 px-4">
                    {/* Instagram icon */}
                    <a href="#" className="text-white hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>

                    {/* Vertical line */}
                    <div className="w-0.5 h-20 bg-white/30" />

                    {/* Facebook text rotated */}
                    <div className="rotate-90 whitespace-nowrap">
                        <span className="text-white text-xs font-semibold tracking-widest">
                            FACEBOOK
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-8 pt-24">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="max-w-4xl">

                        {/* Small tagline */}
                        <p className="text-white tracking-[0.3em] uppercase text-xs font-semibold mb-8 flex items-center">
                            <span className="w-12 h-0.5 bg-white mr-4"></span>
                            FULL SERVICE AND EXCELLENT QUALITY
                        </p>

                        {/* Main heading - exact match */}
                        <h1 className="text-white text-7xl md:text-8xl leading-none mb-8 tracking-tight">
                            CAR DETAILING
                        </h1>

                    </div>
                </div>
            </div>

            {/* Scroll indicator - bottom right */}
            <div className="absolute bottom-12 right-12 z-20">
                <div className="flex flex-col items-center gap-4">
                    <span className="text-white text-xs tracking-[0.2em] uppercase font-semibold origin-center ">
                        SCROLL DOWN
                    </span>
                    <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;