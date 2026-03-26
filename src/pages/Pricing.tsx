import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { PRICING_PLANS, ROUTES } from '../constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <PageTransition>
      <div className="bg-black text-white min-h-screen">
        <HeroSection />

        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Pricing Plans"
              subtitle="Choose the perfect plan that fits your fitness journey"
            />

            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-lg font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  isYearly ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gray-700'
                }`}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
                  animate={{ x: isYearly ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-lg font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {isYearly && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold"
                >
                  Save up to 20%
                </motion.span>
              )}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {PRICING_PLANS.map((plan) => (
                <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-gray-400 mb-6">All plans include a 7-day free trial. No credit card required.</p>
              <Link to={ROUTES.CONTACT}>
                <Button variant="outline">Contact us for custom enterprise plans</Button>
              </Link>
            </motion.div>
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
            Simple{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Pricing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that works for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  plan: {
    id: number;
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    popular: boolean;
    features: string[];
  };
  isYearly: boolean;
}

const PricingCard = ({ plan, isYearly }: PricingCardProps) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const monthlyPrice = isYearly ? (plan.yearlyPrice / 12).toFixed(0) : plan.monthlyPrice;

  return (
    <motion.div
      variants={fadeInUp}
      className={`relative p-8 rounded-3xl border-2 transition-all ${
        plan.popular
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-105'
          : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-cyan-500/50'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4 text-white fill-white" />
            <span className="text-white text-sm font-bold">Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="flex items-end justify-center gap-2 mb-2">
          <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            ${monthlyPrice}
          </span>
          <span className="text-gray-400 mb-2">/month</span>
        </div>
        {isYearly && (
          <p className="text-gray-400 text-sm">
            Billed ${price} annually
          </p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-cyan-400" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to={ROUTES.SIGNUP}>
        <Button
          variant={plan.popular ? 'primary' : 'outline'}
          className="w-full"
        >
          {plan.popular ? 'Get Started' : 'Choose Plan'}
        </Button>
      </Link>

      {plan.popular && (
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-3xl pointer-events-none" />
      )}
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay.',
    },
    {
      question: 'Is there a cancellation fee?',
      answer: 'No cancellation fees. You can cancel your membership at any time, and you will have access until the end of your billing period.',
    },
    {
      question: 'Do you offer student or military discounts?',
      answer: 'Yes! We offer special discounts for students and military personnel. Contact us to learn more about eligibility and how to apply.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing and membership"
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
