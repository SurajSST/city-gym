import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { GALLERY_IMAGES } from '../constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['all', ...new Set(GALLERY_IMAGES.map((img) => img.category))];

  const filteredImages =
    selectedCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  return (
    <PageTransition>
      <div className="bg-black text-white min-h-screen">
        <HeroSection />

        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Our Gallery"
              subtitle="Experience the energy and atmosphere of City Gym"
            />

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold capitalize transition-all ${
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
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
              >
                {filteredImages.map((image) => (
                  <GalleryImage
                    key={image.id}
                    image={image}
                    onClick={() => setSelectedImage(image.id)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <AnimatePresence>
          {selectedImage && (
            <Lightbox
              image={filteredImages.find((img) => img.id === selectedImage)!}
              onClose={() => setSelectedImage(null)}
              onPrev={handlePrevImage}
              onNext={handleNextImage}
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
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fitness{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Explore our world-class facilities and vibrant community
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface GalleryImageProps {
  image: { id: number; url: string; category: string };
  onClick: () => void;
}

const GalleryImage = ({ image, onClick }: GalleryImageProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
      onClick={onClick}
    >
      <img
        src={image.url}
        alt={image.category}
        loading="lazy"
        decoding="async"
        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full capitalize">
            {image.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  image: { id: number; url: string; category: string };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ image, onClose, onPrev, onNext }: LightboxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <motion.img
        key={image.id}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={image.url}
        alt={image.category}
        className="max-w-full max-h-full object-contain rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full capitalize font-medium">
          {image.category}
        </span>
      </div>
    </motion.div>
  );
};
