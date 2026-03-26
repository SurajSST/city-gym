import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Award, X } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { TRAINERS } from '../constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="bg-black text-white min-h-screen">
        <HeroSection />

        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Expert Trainers"
              subtitle="Meet the certified professionals who will guide you to achieve your goals"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {TRAINERS.map((trainer) => (
                <TrainerCard
                  key={trainer.id}
                  trainer={trainer}
                  onClick={() => setSelectedTrainer(trainer.id)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {selectedTrainer && (
            <TrainerModal
              trainer={TRAINERS.find((t) => t.id === selectedTrainer)!}
              onClose={() => setSelectedTrainer(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            World-Class{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Trainers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Learn from certified experts with years of experience transforming lives
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface TrainerCardProps {
  trainer: {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    bio: string;
    image: string;
    instagram: string;
    certifications: string[];
  };
  onClick: () => void;
}

const TrainerCard = ({ trainer, onClick }: TrainerCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
        <img
          src={trainer.image}
          alt={trainer.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm">View Profile</Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
          <p className="text-cyan-400 font-medium mb-2">{trainer.specialty}</p>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>{trainer.experience} experience</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <a
          href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <Instagram className="w-4 h-4" />
          <span className="text-sm">{trainer.instagram}</span>
        </a>
      </div>
    </motion.div>
  );
};

interface TrainerModalProps {
  trainer: {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    bio: string;
    image: string;
    instagram: string;
    certifications: string[];
  };
  onClose: () => void;
}

const TrainerModal = ({ trainer, onClose }: TrainerModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[600px]">
            <img
              src={trainer.image}
              alt={trainer.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-l-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-2">{trainer.name}</h2>
            <p className="text-cyan-400 text-xl font-semibold mb-4">{trainer.specialty}</p>

            <div className="flex items-center gap-2 text-gray-400 mb-8">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>{trainer.experience} of experience</span>
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-3">About</h3>
              <p className="text-gray-300 leading-relaxed">{trainer.bio}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {trainer.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button className="w-full">Book a Session</Button>
              <a
                href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
