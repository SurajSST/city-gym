import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Stats } from '../components/Stats';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

export const About = () => {
  return (
    <PageTransition>
      <div className="bg-black text-white">
        <HeroSection />
        <StorySection />
        <MissionVisionSection />
        <TimelineSection />
        <AchievementsSection />
        <StatsSection />
      </div>
    </PageTransition>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Building a global community of champions, one transformation at a time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Gym"
                loading="lazy"
                decoding="async"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-3xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Excellence Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Passion</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2014, City Gym began with a simple vision: to create a fitness sanctuary where individuals could push their limits and achieve the extraordinary. What started as a single location has grown into a movement that's transforming lives across the globe.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We believe fitness is more than just physical transformation—it's about building mental resilience, fostering community, and unlocking your true potential. Every program we design, every trainer we certify, and every piece of equipment we select is chosen with this philosophy in mind.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, we're proud to serve over 15,000 members worldwide, but our mission remains unchanged: to empower every individual who walks through our doors to become the best version of themselves.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MissionVisionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="relative p-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To inspire and empower individuals to achieve peak physical performance through innovative training programs, expert guidance, and a supportive community that celebrates every milestone.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative p-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the world's most trusted fitness partner, setting new standards in health and wellness while building a global community where everyone has the tools and support to live their healthiest life.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          {[
            {
              icon: Heart,
              title: 'Member-Centric',
              description: 'Every decision we make puts our members first',
            },
            {
              icon: Award,
              title: 'Excellence',
              description: 'We maintain the highest standards in everything we do',
            },
            {
              icon: Users,
              title: 'Community',
              description: 'Building lasting relationships and support networks',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <value.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timeline = [
    {
      year: '2014',
      title: 'The Beginning',
      description: 'City Gym opens its first location with a team of 5 dedicated trainers and a vision to revolutionize fitness.',
    },
    {
      year: '2016',
      title: 'Rapid Growth',
      description: 'Expanded to 3 locations and introduced our signature HIIT and strength training programs.',
    },
    {
      year: '2018',
      title: 'Going Digital',
      description: 'Launched our mobile app and online training platform, making fitness accessible anywhere.',
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Opened international locations and reached 10,000 active members worldwide.',
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Introduced AI-powered personalized training and state-of-the-art recovery facilities.',
    },
    {
      year: '2024',
      title: 'Community First',
      description: 'Launched community wellness programs and partnerships with health organizations globally.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Journey"
          subtitle="A decade of growth, innovation, and transformation"
        />

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden lg:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-block p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="hidden lg:block relative w-4 h-4 bg-cyan-500 rounded-full ring-8 ring-black" />

                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      stat: '98%',
      label: 'Member Satisfaction',
      description: 'Consistently rated as the top fitness center',
    },
    {
      icon: Award,
      stat: '50+',
      label: 'Industry Awards',
      description: 'Recognized for excellence and innovation',
    },
    {
      icon: Users,
      stat: '15K+',
      label: 'Active Members',
      description: 'Growing community across the globe',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Achievements"
          subtitle="Recognition and milestones that drive us forward"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all group text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {achievement.stat}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{achievement.label}</h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <Stats />
      </div>
    </section>
  );
};
