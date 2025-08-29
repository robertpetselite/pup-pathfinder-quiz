export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  value: string;
}

export interface QuizAnswers {
  [questionId: string]: string;
}

export interface QuizResult {
  title: string;
  description: string;
  productRecommendation: string;
}

export interface LeadForm {
  name: string;
  email: string;
  phone: string;
}

export type SlideType = 'landing' | 'quiz' | 'result' | 'form' | 'thank-you';

export interface SlideConfig {
  type: SlideType;
  id: string;
}