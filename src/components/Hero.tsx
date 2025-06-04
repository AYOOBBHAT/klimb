import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Star, Rocket, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center gradient-bg overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.7, 0.5]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center justify-center md:justify-start mb-4 space-x-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-8 w-8 text-accent-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="h-6 w-6 text-accent-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="h-7 w-7 text-accent-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brain className="h-7 w-7 text-accent-400" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-6">
                Discover Your Child’s
                <span className="block text-accent-400">Perfect Sport with KLIMB</span>
              </h1>
              <p className="text-xl mb-8 text-white text-opacity-90 max-w-xl mx-auto md:mx-0">
                A magical journey of discovery where every child learns through play, 
                builds confidence, and develops essential skills for their future.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <motion.a 
                  href="#get-started" 
                  className="btn-accent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Adventure
                </motion.a>
                <motion.a 
                  href="#how-it-works" 
                  className="btn bg-white text-primary-500 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See How It Works
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Children learning together" 
                className="rounded-2xl shadow-xl max-w-full h-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -top-5 -left-5 bg-accent-400 rounded-full p-5 shadow-lg"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white text-xl font-bold">Play!</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-secondary-400 rounded-full p-5 shadow-lg"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-white text-xl font-bold">Learn!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a 
            href="#how-it-works" 
            className="flex flex-col items-center text-white"
            aria-label="Scroll to How It Works section"
          >
            <span className="mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;