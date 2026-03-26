import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={centered ? 'text-center mb-16' : 'mb-12'}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title.split(' ').map((word, index) =>
          index === title.split(' ').length - 1 ? (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {' '}
              {word}
            </span>
          ) : (
            <span key={index}> {word}</span>
          )
        )}
      </h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 ${centered ? 'mx-auto' : ''} mt-6`} />
    </motion.div>
  );
};
