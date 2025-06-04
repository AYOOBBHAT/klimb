import React from 'react';
import { Activity } from 'lucide-react';

interface LogoProps {
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <Activity 
        className={`h-8 w-8 ${scrolled ? 'text-primary-500' : 'text-white'}`} 
      />
      <span 
        className={`text-2xl font-heading font-bold ${
          scrolled ? 'text-primary-500' : 'text-white'
        }`}
      >
        KLIMB
      </span>
    </div>
  );
};

export default Logo;