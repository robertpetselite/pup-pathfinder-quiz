import { QuizButton } from '@/components/QuizButton';
import heroImage from '@/assets/hero-dog.jpg';

interface LandingSlidePro {
  onStartQuiz: () => void;
}

export function LandingSlide({ onStartQuiz }: LandingSlidePro) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src="/lovable-uploads/66baaea8-6a9e-4cf7-b77f-4813fa4bd576.png" 
          alt="Pets Elite" 
          className="h-12 md:h-16 w-auto"
        />
      </div>
      
      {/* Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Give Your Dog the Healthy <br />
            Food Plan They Deserve
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Answer a few quick questions and get a personalized feeding guide tailored just for your furry friend.
          </p>
          
          <div className="max-w-md mx-auto">
            <QuizButton
              variant="primary"
              onClick={onStartQuiz}
              className="text-xl py-6 px-8 w-full"
            >
              🐕 Start Quiz
            </QuizButton>
          </div>
        </div>
        
        {/* Dog Image */}
        <div className="max-w-2xl mx-auto mt-8">
          <img 
            src="/lovable-uploads/d174c9cf-2954-442b-9b9f-e8149caa994b.png"
            alt="Happy smiling pitbull with tongue out" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}