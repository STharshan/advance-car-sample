import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
              Hello, We Are DetailX
            </h3>
            <p className="leading-relaxed max-w-xs">
              Our experienced technicians provide quality services for your car.
            </p>
          </div>

          {/* Office Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
              Office
            </h3>
            <address className="not-italic space-y-4">
              <p>Fields Farm Rd, Long Eaton,<br /> Nottingham NG10 1GA</p>
              <div className="pt-2">
                <a 
                  href="mailto:office@mirage-car-detailing-nottingham.co.uk" 
                  className="underline hover:text-white transition-colors wrap-break-word"
                >
                  office@mirage-car-detailing-nottingham.co.uk
                </a>
              </div>
              <p className="text-white font-bold text-xl pt-2">
                07756 717 119
              </p>
            </address>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>
            Mirage Car Detailing Nottingham © 2026. All rights reserved.
          </p>
          <p>Powered by <a href="https://www.ansely.co.uk" className="text-white hover:underline">Ansely</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;