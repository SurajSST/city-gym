import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import { useInView } from '../hooks/useInView';
import { STATS } from '../constants';
import { staggerContainer, fadeInUp } from '../utils/animations';

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, 0.3);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
    >
      {STATS.map((stat, index) => (
        <StatCard key={index} stat={stat} start={isInView} />
      ))}
    </motion.div>
  );
};

interface StatCardProps {
  stat: { value: number; label: string; suffix: string };
  start: boolean;
}

const StatCard = ({ stat, start }: StatCardProps) => {
  const count = useCounter(stat.value, 2000, start);

  return (
    <motion.div variants={fadeInUp} className="text-center group">
      <div className="relative inline-block">
        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          {count}
          {stat.suffix}
        </div>
        <div className="absolute inset-0 blur-2xl bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-all -z-10" />
      </div>
      <p className="text-gray-400 font-medium">{stat.label}</p>
    </motion.div>
  );
};
