export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface LevelProps {
  number: number;
  title: string;
  description: string;
  color: string;
}

export interface QuizOptionProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}