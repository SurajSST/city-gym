import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { ROUTES } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to={ROUTES.HOME} className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <Dumbbell className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 blur-xl bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-all" />
              </div>
              <span className="text-2xl font-bold text-white">
                CITY <span className="text-cyan-400">GYM</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body, elevate your mind, and unlock your full potential with world-class training and facilities.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: ROUTES.ABOUT },
                { name: 'Programs', path: ROUTES.PROGRAMS },
                { name: 'Trainers', path: ROUTES.TRAINERS },
                { name: 'Pricing', path: ROUTES.PRICING },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Blog', path: ROUTES.BLOG },
                { name: 'Gallery', path: ROUTES.GALLERY },
                { name: 'Contact', path: ROUTES.CONTACT },
                { name: 'Privacy Policy', path: '#' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Nayabazzar Pokhara</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>9800000000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>info@citygym.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Hours</p>
              <p className="text-white font-medium">Mon - Fri: 5:00 AM - 11:00 PM</p>
              <p className="text-white font-medium">Sat - Sun: 6:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} City Gym. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
    </footer>
  );
};
