import { QuizQuestion } from '@/types/quiz';
import { QuizButton } from '@/components/QuizButton';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { ChevronLeft } from 'lucide-react';

interface QuizSlideProps {
  question: QuizQuestion;
  currentStep: number;
  totalSteps: number;
  onAnswer: (questionId: string, answer: string) => void;
  onBack?: () => void;
  isAnimating: boolean;
}

export function QuizSlide({ 
  question, 
  currentStep, 
  totalSteps, 
  onAnswer, 
  onBack,
  isAnimating 
}: QuizSlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      {/* Logo */}
      <div className="absolute top-5 left-8 z-20">
        <img 
          src="/pe-logo-white.png" 
          alt="Pets Elite" 
          className="h-12 md:h-16 w-auto"
        />
      </div>

      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-8 right-8 z-20 flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
      )}

      <div className={`w-full max-w-2xl mx-auto transition-all duration-400 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
        <ProgressIndicator 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
        />
        
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 leading-relaxed">
            {question.question}
          </h2>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <div 
                key={option.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <QuizButton
                  onClick={() => onAnswer(question.id, option.value)}
                  variant="option"
                >
                  {option.text}
                </QuizButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}