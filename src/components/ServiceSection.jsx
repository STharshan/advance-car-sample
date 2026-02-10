import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PPFServices = () => {
  const services = [
    {
      title: 'Front Bumper PPF',
      subtitle: 'Paint Protection Film (PPF)',
      image: '/s1.png', // replace with your car image path
      coverage: [
        'Invisible clear protective film',
        'Protects against stone chips and scratches',
        'UV and weather resistance',
        'Self-healing technology (minor scratches)',
        'Preserves original paint and resale value'
      ]
    },
    {
      title: 'Front End PPF',
      subtitle: 'Paint Correction',
      image: '/s2.png',
      coverage: [
        'Removes swirl marks and light scratches',
        'Restores deep gloss and clarity',
        'Eliminates oxidation and dullness',
        'Multi-stage machine polishing',
        'Enhances overall paint finish'
      ]
    },
    {
      title: 'Track Pack PPF',
      subtitle: 'Ceramic Coating',
      image: '/s3.png',
      coverage: [
        'Long-lasting nano-ceramic protection',
        'Hydrophobic water-repellent surface',
        'UV and chemical resistance',
        'Enhances paint gloss and depth',
        'Easier cleaning and maintenance'
      ]
    },
    {
      title: 'Full Car PPF',
      subtitle: 'Exterior Wash',
      image: '/s4.png',
      coverage: [
        'Safe hand wash using premium products',
        'Removes dirt, dust, and road grime',
        'Gentle on paint and trims',
        'Spot-free drying and finishing',
        'Keeps vehicle looking fresh and clean'
      ]
    }
  ];

  return (
    <div className="bg-[#F3F4F6] dark:bg-black py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 sm:h-20 bg-primary"></div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] dark:text-white">
              OUR SERVICES
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/50 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Car Image at top */}
              <div className="w-full h-48 sm:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-top"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white mb-1 text-center">
                  {service.title}
                </h3>

                <div className="mb-6 grow">
                  <h4 className="font-semibold text-[#111827] dark:text-white mb-3 mt-5">{service.subtitle}</h4>
                  <ul className="space-y-2">
                    {service.coverage.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-[#111827] dark:text-white"
                      >
                        <CircleCheckBig className="w-5 h-5 text-primary text-secondary-hover mr-2 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary bg-secondary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mt-auto">
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
