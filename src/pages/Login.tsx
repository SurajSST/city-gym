import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Button } from '../components/Button';
import { ROUTES } from '../constants';
import { fadeInUp } from '../utils/animations';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Back</span>
            </h1>
            <p className="text-gray-400">Sign in to continue your fitness journey</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-900 border-gray-700 rounded text-cyan-500 focus:ring-cyan-500"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <Link to="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-800 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white hover:border-cyan-500 transition-all font-medium">
                  Google
                </button>
                <button className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white hover:border-cyan-500 transition-all font-medium">
                  Facebook
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-gray-400">
              Don't have an account?{' '}
              <Link to={ROUTES.SIGNUP} className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};
