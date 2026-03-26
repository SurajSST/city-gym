import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '../constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Programs', path: ROUTES.PROGRAMS },
    { name: 'Trainers', path: ROUTES.TRAINERS },
    { name: 'Pricing', path: ROUTES.PRICING },
    { name: 'Gallery', path: ROUTES.GALLERY },
    { name: 'Blog', path: ROUTES.BLOG },
    { name: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg shadow-cyan-500/10'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to={ROUTES.HOME} className="flex items-center gap-2 group">
              <div className="relative">
                <Dumbbell className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 blur-xl bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-all" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                CITY <span className="text-cyan-400">GYM</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors group ${
                    location.pathname === link.path
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to={ROUTES.LOGIN}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to={ROUTES.SIGNUP}
                className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Start Free Trial</span>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-gray-900 to-black border-l border-cyan-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                <div className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-6 py-4 rounded-lg text-lg font-medium transition-all ${
                          location.pathname === link.path
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-gray-800">
                  <Link
                    to={ROUTES.LOGIN}
                    className="px-6 py-3 text-center text-gray-300 hover:text-white font-medium rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to={ROUTES.SIGNUP}
                    className="px-6 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
