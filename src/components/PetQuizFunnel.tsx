import { useState, useCallback } from 'react';
import { QuizAnswers, QuizResult, LeadForm, SlideType } from '@/types/quiz';
import { QUIZ_QUESTIONS, generateRecommendation } from '@/data/quizData';
import { LandingSlide } from '@/components/slides/LandingSlide';
import { QuizSlide } from '@/components/slides/QuizSlide';
import { ResultSlide } from '@/components/slides/ResultSlide';
import { FormSlide } from '@/components/slides/FormSlide';
import { ThankYouSlide } from '@/components/slides/ThankYouSlide';

export function PetQuizFunnel() {
  const [currentSlide, setCurrentSlide] = useState<SlideType>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [customerData, setCustomerData] = useState<LeadForm | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartQuiz = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide('quiz');
      setCurrentQuestionIndex(0);
      setIsAnimating(false);
    }, 300);
  }, []);

  const handleQuizAnswer = useCallback((questionId: string, answer: string) => {
    setIsAnimating(true);
    
    // Update answers
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    setTimeout(() => {
      // Check if this was the last question
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        // Move to next question
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Generate result and move to result slide
        const quizResult = generateRecommendation(newAnswers);
        setResult(quizResult);
        setCurrentSlide('result');
      }
      setIsAnimating(false);
    }, 300);
  }, [answers, currentQuestionIndex]);

  const handleBack = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      if (currentQuestionIndex > 0) {
        // Go to previous question
        setCurrentQuestionIndex(prev => prev - 1);
      } else {
        // Go back to landing slide
        setCurrentSlide('landing');
      }
      setIsAnimating(false);
    }, 300);
  }, [currentQuestionIndex]);

  const handleGetGuide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide('form');
      setIsAnimating(false);
    }, 300);
  }, []);

  const handleFormSubmit = useCallback((formData: LeadForm) => {
    setIsAnimating(true);
    setCustomerData(formData);
    
    // Simulate form submission
    setTimeout(() => {
      setCurrentSlide('thank-you');
      setIsAnimating(false);
    }, 500);
  }, []);

  // Render current slide
  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 'landing':
        return <LandingSlide onStartQuiz={handleStartQuiz} />;
      
      case 'quiz':
        const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
        return (
          <QuizSlide
            question={currentQuestion}
            currentStep={currentQuestionIndex + 1}
            totalSteps={QUIZ_QUESTIONS.length}
            onAnswer={handleQuizAnswer}
            onBack={handleBack}
            isAnimating={isAnimating}
          />
        );
      
      case 'result':
        return result ? (
          <ResultSlide
            result={result}
            onGetGuide={handleGetGuide}
          />
        ) : null;
      
      case 'form':
        return <FormSlide onSubmit={handleFormSubmit} />;
      
      case 'thank-you':
        return (
          <ThankYouSlide
            customerName={customerData?.name || ''}
          />
        );
      
      default:
        return <LandingSlide onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {renderCurrentSlide()}
    </div>
  );
}