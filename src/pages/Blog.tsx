import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { BLOG_POSTS } from '../constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(BLOG_POSTS.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <PageTransition>
      <div className="bg-black text-white min-h-screen">
        <HeroSection />

        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Fitness Blog"
              subtitle="Expert insights, tips, and inspiration for your fitness journey"
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
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Knowledge{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Discover expert advice, workout tips, and nutrition guides
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.article
      variants={fadeInUp}
      className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <User className="w-4 h-4 text-cyan-400" />
            <span>{post.author}</span>
          </div>
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group">
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
