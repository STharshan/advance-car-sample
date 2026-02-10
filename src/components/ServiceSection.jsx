import React from 'react';

const PPFServices = () => {
    const services = [
        {
            title: 'Front Bumper PPF',
            price: '£450',
            coverage: [
                'Front Bumper Only',
                '1-2 Day Turnaround'
            ],
            colorProgress: 25
        },
        {
            title: 'Front End PPF',
            price: '£1350',
            coverage: [
                'Front Bumper',
                'Bonnet',
                'Wings',
                'Headlights',
                '2-3 Day Turnround'
            ],
            colorProgress: 50
        },
        {
            title: 'Track Pack PPF',
            price: '£1750',
            coverage: [
                'Front Bumper',
                'Bonnnet',
                'Wings',
                'Headlights',
                'Side Skirts',
                'Partial Rear Arch',
                '3 Day Turnaround'
            ],
            colorProgress: 75
        },
        {
            title: 'Full Car PPF',
            price: '£3500',
            coverage: [
                'All Exterior Painted Surfaces',
                'Headlights',
                'Rear Lights',
                '3-5 Day Turnaround'
            ],
            colorProgress: 100
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-8">
            <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Car Image Container */}
                            <div className="relative bg-gray-100 p-8 flex items-center justify-center h-48 sm:h-52">
                                <div className="relative w-full h-full">
                                    {/* Car SVG with color transition effect */}
                                    <svg
                                        viewBox="0 0 400 250"
                                        className="w-full h-full"
                                        style={{
                                            filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))'
                                        }}
                                    >
                                        {/* Car body - gradual color change */}
                                        <defs>
                                            <linearGradient id={`carGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: service.colorProgress > 0 ? '#DC2626' : '#D1D5DB' }} />
                                                <stop offset={`${service.colorProgress}%`} style={{ stopColor: '#DC2626' }} />
                                                <stop offset={`${service.colorProgress}%`} style={{ stopColor: '#D1D5DB' }} />
                                                <stop offset="100%" style={{ stopColor: '#D1D5DB' }} />
                                            </linearGradient>
                                        </defs>

                                        {/* Simplified Porsche Taycan shape */}
                                        <ellipse cx="200" cy="200" rx="140" ry="35" fill="#1F2937" opacity="0.2" />
                                        <path
                                            d="M 80 120 Q 70 100 90 95 L 150 90 L 180 85 L 220 85 L 250 90 L 310 95 Q 330 100 320 120 L 315 140 Q 315 160 300 165 L 100 165 Q 85 160 85 140 Z"
                                            fill={`url(#carGradient${index})`}
                                            stroke="#1F2937"
                                            strokeWidth="1.5"
                                        />
                                        {/* Windows */}
                                        <path
                                            d="M 140 100 L 160 95 L 200 95 L 210 100 L 205 120 L 145 120 Z"
                                            fill="#4B5563"
                                            opacity="0.7"
                                        />
                                        <path
                                            d="M 215 100 L 240 95 L 270 95 L 280 100 L 275 120 L 220 120 Z"
                                            fill="#4B5563"
                                            opacity="0.7"
                                        />
                                        {/* Wheels */}
                                        <circle cx="120" cy="165" r="22" fill="#1F2937" />
                                        <circle cx="120" cy="165" r="15" fill="#374151" />
                                        <circle cx="280" cy="165" r="22" fill="#1F2937" />
                                        <circle cx="280" cy="165" r="15" fill="#374151" />
                                        {/* Headlight */}
                                        <ellipse cx="315" cy="110" rx="8" ry="12" fill="#FCD34D" opacity="0.8" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content - flex-grow pushes button to bottom */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                                    {service.title}
                                </h3>

                                <div className="text-center mb-6">
                                    <p className="text-sm text-gray-500 mb-1">from</p>
                                    <p className="text-4xl sm:text-5xl font-bold text-gray-900">
                                        {service.price}
                                    </p>
                                </div>

                                <div className="mb-6 flex-grow">
                                    <h4 className="font-semibold text-gray-900 mb-3">PPF Coverage</h4>
                                    <ul className="space-y-2">
                                        {service.coverage.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <svg
                                                    className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Button stays at bottom */}
                                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mt-auto">
                                    BOOK TODAY
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PPFServices;