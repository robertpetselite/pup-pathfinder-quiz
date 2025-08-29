import { QuizResult } from '@/types/quiz';
import { QuizButton } from '@/components/QuizButton';

interface ResultSlideProps {
  result: QuizResult;
  onGetGuide: () => void;
}

export function ResultSlide({ result, onGetGuide }: ResultSlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-nature px-6">
      <div className="w-full max-w-3xl mx-auto text-center animate-fade-in">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-border">
          {/* Celebration icon */}
          <div className="text-6xl mb-6 animate-bounce-in">🎉</div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perfect Match Found!
          </h2>
          
          <div className="bg-accent rounded-xl p-6 mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-accent-foreground mb-4">
              {result.title}
            </h3>
            <p className="text-lg text-accent-foreground/80 mb-4">
              {result.description}
            </p>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="text-primary font-semibold">
                Recommended: {result.productRecommendation}
              </p>
            </div>
          </div>
          
          <QuizButton
            variant="primary"
            onClick={onGetGuide}
            className="text-xl py-6 max-w-md mx-auto"
          >
            📋 Get My Free Feeding Guide
          </QuizButton>
          
          <p className="text-muted-foreground mt-4 text-sm">
            Includes feeding schedule, portion sizes, and nutrition tips
          </p>
        </div>
      </div>
    </div>
  );
}