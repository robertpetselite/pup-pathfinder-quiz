import { QuizButton } from '@/components/QuizButton';
import heroImage from '@/assets/hero-dog.jpg';

interface LandingSlidePro {
  onStartQuiz: () => void;
}

export function LandingSlide({ onStartQuiz }: LandingSlidePro) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find the Perfect Food Plan for Your Dog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Answer a few quick questions and get a personalized feeding guide tailored just for your furry friend.
          </p>
          
          <div className="max-w-md mx-auto animate-bounce-in">
            <QuizButton
              variant="primary"
              onClick={onStartQuiz}
              className="text-2xl py-8 bg-white text-pet-orange hover:bg-white/95 shadow-2xl"
            >
              🐕 Start Quiz
            </QuizButton>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <span>✅</span>
            <span>Veterinarian Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏆</span>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💝</span>
            <span>Free Feeding Guide</span>
          </div>
        </div>
      </div>
    </div>
  );
}