import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { PROGRAMS } from '../constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(PROGRAMS.map((p) => p.category))];

  const filteredPrograms =
    selectedCategory === 'All'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <PageTransition>
      <div className="bg-black text-white min-h-screen">
        <HeroSection />

        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Training Programs"
              subtitle="Choose from our expertly designed programs tailored to your fitness goals"
            />

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Training
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Discover the perfect program designed to help you achieve your fitness goals
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface ProgramCardProps {
  program: {
    id: number;
    title: string;
    category: string;
    description: string;
    duration: string;
    level: string;
    image: string;
  };
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      layout
      className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            {program.category}
          </span>
          <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
            {program.level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {program.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>{program.level}</span>
          </div>
        </div>

        <Button className="w-full group">
          <span className="flex items-center justify-center gap-2">
            Start Program
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};
