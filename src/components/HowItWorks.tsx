import React from 'react';
import { motion } from 'framer-motion';
import { StepProps } from '../types';

const steps: StepProps[] = [
  {
    number: 1,
    title: "Discover KLIMB",
    description: "Take a fun quiz to help us understand your child's interests and learning style.",
    imageUrl: "https://images.pexels.com/photos/8535157/pexels-photo-8535157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: 2,
    title: "Personalized Journey",
    description: "Get a customized learning path designed specifically for your child's needs and interests.",
    imageUrl: "https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: 3,
    title: "Interactive Learning",
    description: "Engage with fun activities and games that make learning an exciting adventure.",
    imageUrl: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: 4,
    title: "Track Progress",
    description: "Monitor achievements and growth with detailed insights and celebration milestones.",
    imageUrl: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Step: React.FC<StepProps> = ({ number, title, description, imageUrl }) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center mb-16 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
    >
      {number % 2 === 0 ? (
        <>
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <div className="flex items-start">
              <div className="bg-primary-500 text-white text-2xl font-bold rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mr-4">
                {number}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={imageUrl} 
              alt={title} 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: '350px' }} 
            />
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 md:order-2 md:pl-12 mb-8 md:mb-0">
            <div className="flex items-start">
              <div className="bg-primary-500 text-white text-2xl font-bold rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mr-4">
                {number}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:order-1">
            <img 
              src={imageUrl} 
              alt={title} 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: '350px' }} 
            />
          </div>
        </>
      )}
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Journey with KLIMB
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start your child's learning adventure in four simple steps
          </motion.p>
        </div>

        <div className="mt-16">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;