import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Trophy, Target, Star } from 'lucide-react';
import { LevelProps } from '../types';

const levels: LevelProps[] = [
  {
    number: 1,
    title: "Discover Klimb",
    description: "Taking first steps in learning fundamentals with guided activities.",
    color: "bg-blue-100 border-blue-300"
  },
  {
    number: 2,
    title: "Take the Quiz",
    description: "Building confidence through interactive challenges and creative exercises.",
    color: "bg-green-100 border-green-300"
  },
  {
    number: 3,
    title: "Reveal Your Sport Matches",
    description: "Developing independence and problem-solving through advanced puzzles.",
    color: "bg-yellow-100 border-yellow-300"
  },
  {
    number: 4,
    title: "Visit an Academy",
    description: "Mastering skills with complex activities and collaborative projects.",
    color: "bg-orange-100 border-orange-300"
  },
  {
    number: 5,
    title: "Track your Progress",
    description: "Leading the way with expert-level achievements and mentoring opportunities.",
    color: "bg-red-100 border-red-300"
  }
];

const TrackerLevel: React.FC<LevelProps> = ({ number, title, description, color }) => {
  return (
    <motion.div 
      className={`relative border-2 rounded-xl p-6 ${color}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
    >
      <div className="flex items-start mb-3">
        <div className="bg-white text-primary-500 border-2 border-primary-500 text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-3">
          {number}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
      
      {/* Icons for each level */}
      <div className="absolute -top-3 right-6">
        {number === 1 && <Target className="h-6 w-6 text-blue-500" />}
        {number === 2 && <Star className="h-6 w-6 text-green-500" />}
        {number === 3 && <ArrowUp className="h-6 w-6 text-yellow-600" />}
        {number === 4 && <Trophy className="h-6 w-6 text-orange-500" />}
        {number === 5 && <Trophy className="h-6 w-6 text-red-500" />}
      </div>
    </motion.div>
  );
};

const Tracker: React.FC = () => {
  return (
    <section id="tracker" className="section">
      <div className="container mx-auto container-padding">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Track Your Child's Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Watch as your child progresses through our 5 skill levels, unlocking new challenges along the way
          </motion.p>
        </div>

        <div className="relative mt-16">
          {/* Progress Path */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>
          
          {/* Levels */}
          <div className="space-y-8 md:space-y-0 relative z-10">
            {levels.map((level, index) => (
              <div key={level.number} className={`md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`md:w-5/12 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <TrackerLevel {...level} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#get-started" className="btn-primary">
            Start Your Child's Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tracker;