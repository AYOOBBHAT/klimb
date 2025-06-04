import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TestimonialProps } from '../types';

const testimonials: TestimonialProps[] = [
  {
    quote: "Since starting with KLIMB, my daughter's confidence in math has skyrocketed! The interactive games make learning so much fun that she asks to practice every day.",
    author: "Emily Johnson",
    role: "Parent of 7-year-old Sarah",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "As an educator, I'm impressed by how KLIMB adapts to each child's pace. The progress tracking helps parents stay involved in their child's learning journey.",
    author: "Michael Torres",
    role: "Elementary School Teacher",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The games are super fun! I love earning stars and unlocking new challenges. Math isn't boring anymore - it's like playing with friends!",
    author: "Jake Anderson",
    role: "8-year-old Learner",
    avatar: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "KLIMB has transformed our after-school routine. The personalized activities keep both my children engaged, despite their different learning styles.",
    author: "Sarah Williams",
    role: "Parent of Two",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section gradient-bg text-white">
      <div className="container mx-auto container-padding">
        <div className="section-title">
          <motion.h2
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className="text-white text-opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join thousands of happy families on their learning journey
          </motion.p>
        </div>

        <div className="mt-16 relative">
          <motion.div
            className="flex flex-col items-center"
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 h-10 w-10 text-accent-400 opacity-50" />
              <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto px-8">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
            
            <div className="flex items-center flex-col">
              <div className="relative">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                />
                <motion.div 
                  className="absolute -right-2 -top-2 bg-accent-400 rounded-full p-2"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="h-4 w-4 text-white" />
                </motion.div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-xl">{testimonials[currentIndex].author}</h4>
                <p className="text-white text-opacity-80">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-32 bg-primary-500 rounded-full blur-[100px] opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-32 bg-accent-400 rounded-full blur-[100px] opacity-20"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 text-lg">
            <Star className="h-5 w-5 text-accent-400" />
            <span>Join over 10,000 happy learners</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;