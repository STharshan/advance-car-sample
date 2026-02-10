import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'SARAH L.',
            initial: 'S',
            review: "I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!",
            rating: 5,
            service: 'AUDI TT / Ceramic Coating',
            image: '/im1.jpeg'
        },
        {
            id: 2,
            name: 'JOHN M.',
            initial: 'J',
            review: "Outstanding service! The team was professional and thorough. My BMW looks brand new after their paint protection film installation. Worth every penny!",
            rating: 5,
            service: 'BMW M3 / PPF Installation',
            image: '/im2.jpeg'
        },
        {
            id: 3,
            name: 'EMMA K.',
            initial: 'E',
            review: "Exceptional quality and attention to detail. They transformed my car completely. The ceramic coating has made maintenance so much easier. Highly recommend their services!",
            rating: 5,
            service: 'MERCEDES C-CLASS / Ceramic Coating',
            image: '/im3.jpeg'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    const currentReview = reviews[currentIndex];

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${index < rating ? 'text-primary' : 'text-gray-300'} dark:${index < rating ? 'text-primary' : 'text-gray-600'}`}
                />
            ))}
        </div>
    );

    return (
        <div className="bg-[#F3F4F6] dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-16 sm:h-20 bg-primary"></div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] dark:text-white">
                            CLIENT'S REVIEWS
                        </h2>
                    </div>
                </div>

                {/* Review Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src={currentReview.image}
                                alt="Client's car"
                                className="w-full h-100 sm:h-125 lg:h-150 object-cover"
                            />
                            <div className="absolute top-0 right-0 w-20 h-1 bg-primary"></div>
                        </div>
                    </div>

                    {/* Right Side - Review Details */}
                    <div className="space-y-6 relative">
                        {/* Name with Initial Circle */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <span className="text-white text-xl sm:text-2xl font-bold">{currentReview.initial}</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white">
                                {currentReview.name}
                            </h3>
                        </div>

                        {/* Review Text */}
                        <div className="space-y-6">
                            <p className="text-[#111827] dark:text-white text-base sm:text-lg leading-relaxed">
                                {currentReview.review}
                            </p>

                            {/* Star Rating */}
                            <StarRating rating={currentReview.rating} />

                            {/* Service Info */}
                            <p className="text-[#111827] dark:text-white text-sm sm:text-base font-medium">
                                {currentReview.service}
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="absolute -bottom-20 right-0 flex gap-4 mt-4">
                            <button
                                onClick={prevReview}
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary border-secondary-hover flex items-center justify-center transition-all duration-300 hover:bg-[#C10007] hover:text-white"
                                aria-label="Previous review"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary text-secondary-hover" />
                            </button>
                            <button
                                onClick={nextReview}
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary border-secondary-hover flex items-center justify-center transition-all duration-300 hover:bg-[#C10007] hover:text-white"
                                aria-label="Next review"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary text-secondary-hover]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8 lg:hidden">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary w-8'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
