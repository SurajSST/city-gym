import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Button } from '../components/Button';
import { Stats } from '../components/Stats';
import { SectionHeading } from '../components/SectionHeading';
import { ROUTES, PROGRAMS, TRAINERS, TESTIMONIALS } from '../constants';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export const Home = () => {
  return (
    <PageTransition>
      <div className="bg-black text-white">
        <HeroSection />
        <StatsSection />
        <FeaturedPrograms />
        <WhyChooseUs />
        <TrainersPreview />
        <TestimonialsSection />
        <CTASection />
      </div>
    </PageTransition>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold backdrop-blur-sm">
              Transform Your Life Today
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Unleash Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Peak Performance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Elite training programs, world-class facilities, and expert coaches dedicated to helping you achieve extraordinary results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to={ROUTES.SIGNUP}>
              <Button size="lg" className="group">
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <button className="flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-lg border-2 border-white/20 hover:border-cyan-400 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center group-hover:bg-cyan-500 transition-all">
                <Play className="w-5 h-5 text-cyan-400 group-hover:text-white ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
              <span>7-Day Free Trial</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <Stats />
      </div>
    </section>
  );
};

const FeaturedPrograms = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Programs"
          subtitle="Expertly designed programs to help you achieve your fitness goals"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROGRAMS.slice(0, 3).map((program) => (
            <motion.div
              key={program.id}
              variants={fadeInUp}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {program.level}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">{program.duration}</span>
                  <Link
                    to={ROUTES.PROGRAMS}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-1 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={ROUTES.PROGRAMS}>
            <Button>
              View All Programs
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert Trainers',
      description: 'Learn from certified professionals with years of experience',
      icon: '🏆',
    },
    {
      title: 'State-of-the-Art Equipment',
      description: 'Access to the latest fitness technology and equipment',
      icon: '💪',
    },
    {
      title: 'Flexible Schedules',
      description: 'Train on your schedule with 24/7 gym access',
      icon: '⏰',
    },
    {
      title: 'Community Support',
      description: 'Join a motivating community of like-minded individuals',
      icon: '🤝',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose City Gym"
          subtitle="Experience the difference with our premium facilities and dedicated support"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="relative p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TrainersPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Trainers"
          subtitle="World-class professionals dedicated to your success"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TRAINERS.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="aspect-square overflow-hidden rounded-2xl mb-4">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
              <p className="text-cyan-400 text-sm font-medium mb-2">{trainer.specialty}</p>
              <p className="text-gray-400 text-sm">{trainer.experience} experience</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={ROUTES.TRAINERS}>
            <Button>
              View All Trainers
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Success Stories"
          subtitle="Hear from our members who achieved extraordinary results"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={scaleIn}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-12 md:p-16"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your fitness journey today with a 7-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.SIGNUP}>
                <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl">
                  Start Free Trial
                </button>
              </Link>
              <Link to={ROUTES.PRICING}>
                <button className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-cyan-600 transition-all">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
