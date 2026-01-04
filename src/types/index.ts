export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  composition: string[];
  merits: string[];
  indications: string[];
  presentation: string;
  category: string;
}

export interface WellnessCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
