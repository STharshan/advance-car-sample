import React, { useState } from 'react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'SARAH L.',
            initial: 'S',
            review: '"I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!"',
            rating: 5,
            service: 'AUDI TT / Ceramic Coating',
            image: '/api/placeholder/400/600' // Replace with actual image
        },
        {
            id: 2,
            name: 'JOHN M.',
            initial: 'J',
            review: '"Outstanding service! The team was professional and thorough. My BMW looks brand new after their paint protection film installation. Worth every penny!"',
            rating: 5,
            service: 'BMW M3 / PPF Installation',
            image: '/api/placeholder/400/600'
        },
        {
            id: 3,
            name: 'EMMA K.',
            initial: 'E',
            review: '"Exceptional quality and attention to detail. They transformed my car completely. The ceramic coating has made maintenance so much easier. Highly recommend their services!"',
            rating: 5,
            service: 'MERCEDES C-CLASS / Ceramic Coating',
            image: '/api/placeholder/400/600'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const currentReview = reviews[currentIndex];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill={index < rating ? '#EF4444' : '#E5E7EB'}
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-16 sm:h-20 bg-red-600"></div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
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
                                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                            />
                            {/* Decorative line */}
                            <div className="absolute top-0 right-0 w-20 h-1 bg-red-600"></div>
                        </div>
                    </div>

                    {/* Right Side - Review Details */}
                    <div className="space-y-6">
                        {/* Name with Initial Circle */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl sm:text-2xl font-bold">
                                    {currentReview.initial}
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                                {currentReview.name}
                            </h3>
                        </div>

                        {/* Review Text */}
                        <div className="space-y-6">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {currentReview.review}
                            </p>

                            {/* Star Rating */}
                            <StarRating rating={currentReview.rating} />

                            {/* Service Info */}
                            <p className="text-gray-600 text-sm sm:text-base font-medium">
                                {currentReview.service}
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={prevReview}
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-300 hover:border-red-600 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:text-white group"
                                aria-label="Previous review"
                            >
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextReview}
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-300 hover:border-red-600 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:text-white group"
                                aria-label="Next review"
                            >
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dots Indicator (optional) */}
                <div className="flex justify-center gap-2 mt-8 lg:hidden">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300'
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