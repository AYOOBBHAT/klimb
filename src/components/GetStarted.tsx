import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Book, Puzzle, Music, Check } from 'lucide-react';
import { QuizOptionProps } from '../types';

const quizOptions: QuizOptionProps[] = [
  {
    id: 'math',
    title: 'Math & Logic',
    description: 'Number sense, patterns, and problem-solving',
    icon: <Brain className="h-10 w-10 text-primary-500" />
  },
  {
    id: 'reading',
    title: 'Reading & Language',
    description: 'Phonics, comprehension, and vocabulary building',
    icon: <Book className="h-10 w-10 text-secondary-400" />
  },
  {
    id: 'creative',
    title: 'Creative Thinking',
    description: 'Imagination, art, and innovative challenges',
    icon: <Puzzle className="h-10 w-10 text-accent-400" />
  },
  {
    id: 'music',
    title: 'Music & Movement',
    description: 'Rhythm, coordination, and musical exploration',
    icon: <Music className="h-10 w-10 text-green-500" />
  }
];

const GetStarted: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const renderStep1 = () => (
    <div>
      <h3 className="text-2xl font-bold mb-6">What skills would you like your child to develop?</h3>
      <p className="text-gray-600 mb-8">Select all that apply. We'll customize the learning experience.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {quizOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-200 ${
              selected.includes(option.id) 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleSelection(option.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start">
              <div className="mr-4">{option.icon}</div>
              <div>
                <h4 className="font-bold text-lg mb-1">{option.title}</h4>
                <p className="text-gray-600">{option.description}</p>
              </div>
              {selected.includes(option.id) && (
                <Check className="ml-auto text-primary-500 h-6 w-6" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <button 
          className="btn-primary"
          onClick={() => setStep(2)}
          disabled={selected.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-6">Tell us about your child</h3>
      <p className="text-gray-600 mb-8">This helps us personalize their learning journey.</p>
      
      <div className="space-y-6 mb-8">
        <div>
          <label htmlFor="childName" className="block text-gray-700 font-medium mb-2">
            Child's First Name
          </label>
          <input
            type="text"
            id="childName"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">
            Child's Age
          </label>
          <select
            id="childAge"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          >
            <option value="">Select age</option>
            {Array.from({ length: 13 }, (_, i) => i + 3).map((age) => (
              <option key={age} value={age}>
                {age} years
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button 
          type="button" 
          className="btn-outline"
          onClick={() => setStep(1)}
        >
          Back
        </button>
        <button 
          type="submit" 
          className="btn-primary"
          disabled={!childName || !childAge}
        >
          Create Account
        </button>
      </div>
    </form>
  );

  const renderStep3 = () => (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <div className="inline-block bg-success-100 text-success-700 p-4 rounded-full">
          <Check className="h-12 w-12" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">You're all set, {childName}!</h3>
      <p className="text-gray-600 mb-8">
        We've created a personalized learning plan for {childName}. Check your email for login details and get ready to start the KLIMB journey!
      </p>
      <button
        className="btn-primary"
        onClick={() => {
          setStep(1);
          setSelected([]);
          setChildName('');
          setChildAge('');
        }}
      >
        Go to Dashboard
      </button>
    </motion.div>
  );

  return (
    <section id="get-started" className="section bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Started with KLIMB
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Take the first step toward a fun, personalized learning journey
          </motion.p>
        </div>

        <motion.div 
          className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress Indicator */}
          {step < 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    step >= 1 ? 'bg-primary-500 text-white' : 'bg-gray-200'
                  }`}>
                    1
                  </div>
                  <div className={`h-1 w-10 ${step >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    step >= 2 ? 'bg-primary-500 text-white' : 'bg-gray-200'
                  }`}>
                    2
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Step {step} of 2
                </div>
              </div>
            </div>
          )}

          {/* Step Content */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;