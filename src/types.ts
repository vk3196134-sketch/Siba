export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  intensity: 'Intermediate' | 'High' | 'Elite' | 'All Levels';
  benefits: string[];
  iconName: string;
}

export interface ClientTransformation {
  id: string;
  name: string;
  age: number;
  type: 'Weight Loss' | 'Muscle Gain' | 'Fat to Fit';
  duration: string;
  before: {
    weight: string;
    bodyFat: string;
    image: string;
  };
  after: {
    weight: string;
    bodyFat: string;
    image: string;
  };
  quote: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'coaching' | 'lifting' | 'atmosphere' | 'session';
  image: string;
}
