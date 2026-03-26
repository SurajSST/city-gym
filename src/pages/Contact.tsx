import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../utils/animations';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageTransition>
      <div className="bg-black text-white min-h-screen">
        <HeroSection />

        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
                </h2>
                <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                  Have questions about our programs, memberships, or facilities? We're here to help you start your fitness journey.
                </p>

                <div className="space-y-8 mb-12">
                  <ContactInfoCard
                    icon={MapPin}
                    title="Visit Us"
                    content="123 Fitness Avenue, New York, NY 10001"
                  />
                  <ContactInfoCard
                    icon={Phone}
                    title="Call Us"
                    content="(555) 123-4567"
                  />
                  <ContactInfoCard
                    icon={Mail}
                    title="Email Us"
                    content="info@citygym.com"
                  />
                  <ContactInfoCard
                    icon={Clock}
                    title="Opening Hours"
                    content={
                      <>
                        <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                        <p>Sat - Sun: 6:00 AM - 10:00 PM</p>
                      </>
                    }
                  />
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden border border-gray-700">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Map Integration Placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="programs">Program Information</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection />
      </div>
    </PageTransition>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            We're here to answer your questions and help you get started
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface ContactInfoCardProps {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const ContactInfoCard = ({ icon: Icon, title, content }: ContactInfoCardProps) => {
  return (
    <div className="flex gap-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all group">
      <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <div className="text-gray-300">{content}</div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'Do you offer free trial sessions?',
      answer: 'Yes! We offer a 7-day free trial with access to all gym facilities and group classes.',
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Members can freeze their membership for up to 3 months per year for medical or travel reasons.',
    },
    {
      question: 'Do you have personal trainers available?',
      answer: 'Yes, all our trainers are certified professionals. You can book sessions through our app or at the front desk.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Common Questions"
          subtitle="Quick answers to questions you may have"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
