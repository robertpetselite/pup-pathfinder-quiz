import { QuizQuestion, QuizResult } from '@/types/quiz';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'age',
    question: "What is your Furry Friends Age?",
    options: [
      { id: 'puppy', text: 'Puppy (0-1 year)', value: 'puppy' },
      { id: 'adult', text: 'Adult (1-7 years)', value: 'adult' },
      { id: 'senior', text: 'Senior (7+ years)', value: 'senior' }
    ]
  },
  {
    id: 'activity',
    question: "What's your furry friends activity level?",
    options: [
      { id: 'low', text: 'Low - Mostly indoor, short walks', value: 'low' },
      { id: 'moderate', text: 'Moderate - Daily walks, some play', value: 'moderate' },
      { id: 'high', text: 'High - Running, hiking, very active', value: 'high' }
    ]
  },
  {
    id: 'dietary',
    question: "Any special dietary needs?",
    options: [
      { id: 'grain-free', text: 'Grain-Free', value: 'grain-free' },
      { id: 'high-protein', text: 'High Protein', value: 'high-protein' },
      { id: 'sensitive', text: 'Sensitive Stomach', value: 'sensitive' },
      { id: 'none', text: 'No Special Needs', value: 'none' }
    ]
  },
  {
    id: 'treats',
    question: "What type of treats do you prefer?",
    options: [
      { id: 'long-chews', text: 'Long Chews - For extended enjoyment', value: 'long-chews' },
      { id: 'crunchy', text: 'Crunchy Snacks - For dental health', value: 'crunchy' },
      { id: 'training', text: 'Training Bites - Small & motivating', value: 'training' }
    ]
  }
];

export function generateRecommendation(answers: { [key: string]: string }): QuizResult {
  const { age, activity, dietary, treats } = answers;
  
  // Simple recommendation logic
  let title = "";
  let description = "";
  let productRecommendation = "";

  if (age === 'puppy') {
    title = "Puppy Starter Pack";
    description = "Your growing pup needs specially formulated nutrition for healthy development.";
    productRecommendation = "High-Protein Puppy Starter Pack with DHA for brain development";
  } else if (age === 'senior') {
    title = "Senior Care Bundle";
    description = "Gentle nutrition designed for your wise companion's golden years.";
    productRecommendation = "Senior Care Formula with joint support and easy digestion";
  } else {
    // Adult dog
    if (activity === 'high') {
      title = "Active Dog Performance Pack";
      description = "High-energy nutrition for your adventure companion.";
      productRecommendation = "Performance Formula with extra protein and energy";
    } else if (dietary === 'sensitive') {
      title = "Gentle Digestion Bundle";
      description = "Specially crafted for sensitive stomachs and gentle digestion.";
      productRecommendation = "Limited Ingredient Formula with probiotics";
    } else if (dietary === 'grain-free') {
      title = "Grain-Free Premium Pack";
      description = "Natural nutrition without grains for optimal health.";
      productRecommendation = "Grain-Free Recipe with sweet potato and peas";
    } else {
      title = "Complete Nutrition Pack";
      description = "Well-balanced nutrition for your healthy, happy dog.";
      productRecommendation = "Complete Adult Formula with balanced proteins";
    }
  }

  return {
    title,
    description,
    productRecommendation
  };
}