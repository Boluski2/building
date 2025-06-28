
import { Phone, Mail, MapPin, Landmark } from 'lucide-react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Landmark className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">BuildTech</span>
            </div>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora vel obcaecati odio. Cupiditate
              fuga id asperiores natus! Molestias, saepe.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+2340 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@mail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Lagoes, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Structural Design</li>
              <li className="text-gray-300">Transportation</li>
              <li className="text-gray-300">Water Resources</li>
              <li className="text-gray-300">Geotechnical</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {/* © 2024 CivilTech Engineering. All rights reserved. | Professional Engineering Services */}
            © {new Date().getFullYear()} BuildTech. All rights reserved. | Professional Engineering Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
