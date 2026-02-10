import React, { useState } from 'react';

const AppointmentSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        vehicleType: '',
        preferredDate: '',
        preferredTime: '',
        additionalRequests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-[#F3F4F6] dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Side - Form with Image Text Effect */}
                    <div className="relative">
                        {/* Header with Image Clipping Effect */}
                        <div className="relative mb-8">
                            <h2 
                                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none uppercase"
                                style={{
                                    backgroundImage: 'url("/about.png")', // Replace with your car image
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    color: 'transparent'
                                }}
                            >
                                LET'S BOOK AN APPOINTMENT
                            </h2>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Name */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                    required
                                />

                                {/* Vehicle Type */}
                                <input
                                    type="text"
                                    name="vehicleType"
                                    placeholder="Vehicle type"
                                    value={formData.vehicleType}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Phone Number */}
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone number*"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                    required
                                />

                                {/* Preferred Service Date */}
                                <input
                                    type="date"
                                    name="preferredDate"
                                    placeholder="Preferred service date"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                    required
                                />

                                {/* Preferred Service Time */}
                                <input
                                    type="time"
                                    name="preferredTime"
                                    placeholder="Preferred service time"
                                    value={formData.preferredTime}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors"
                                />
                            </div>

                            {/* Additional Requests */}
                            <textarea
                                name="additionalRequests"
                                placeholder="Any additional requests regarding your car?"
                                value={formData.additionalRequests}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-6 py-4 rounded-3xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#E7000B] dark:focus:border-[#E7000B] bg-white dark:bg-neutral-900 text-[#111827] dark:text-white transition-colors resize-none"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-primary bg-secondary-hover text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm tracking-wide"
                            >
                                Submit Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Contact Information */}
                    <div className="space-y-8 lg:pl-8 text-[#111827] dark:text-white">
                        {/* Phone Section */}
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                                PHONE
                            </h3>
                            <div className="space-y-2">
                                <p className="text-base sm:text-lg"> (406) 555-0120 </p>
                                <p className="text-base sm:text-lg"> (316) 555-0116 </p>
                            </div>
                        </div>

                        {/* Kentucky Office Section */}
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                                KENTUCKY OFFICE
                            </h3>
                            <p className="text-base sm:text-lg">
                                4517 Washington Ave. Manchester,<br />
                                Kentucky 39495
                            </p>
                        </div>

                        {/* Opening Hours Section */}
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                                OPENING HOURS
                            </h3>
                            <div className="space-y-2">
                                <p className="text-base sm:text-lg">09:00 am - 06:00 pm</p>
                                <p className="text-base sm:text-lg">Monday - Friday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;
