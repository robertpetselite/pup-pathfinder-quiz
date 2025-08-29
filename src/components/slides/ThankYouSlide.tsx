import { QuizButton } from '@/components/QuizButton';

interface ThankYouSlideProps {
  customerName: string;
}

export function ThankYouSlide({ customerName }: ThankYouSlideProps) {
  const handleDownload = () => {
    // In a real app, this would download the actual PDF
    // For demo purposes, we'll create a mock download
    const link = document.createElement('a');
    link.href = '#'; // Would be the actual PDF URL
    link.download = 'pets-elite-feeding-guide.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-warm px-6">
      <div className="w-full max-w-2xl mx-auto text-center animate-fade-in">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Success animation */}
          <div className="text-7xl mb-6 animate-bounce-in">✅</div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You{customerName && `, ${customerName}`}!
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your personalized feeding guide is ready for download.
          </p>
          
          <div className="bg-accent rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-accent-foreground mb-3">
              🎁 Your Free Feeding Guide Includes:
            </h3>
            <ul className="text-left text-accent-foreground/80 space-y-2 max-w-md mx-auto">
              <li>✓ Personalized portion recommendations</li>
              <li>✓ Daily feeding schedule</li>
              <li>✓ Nutrition tips for your dog's age & activity</li>
              <li>✓ Treat guidelines and recommendations</li>
              <li>✓ Special dietary considerations</li>
            </ul>
          </div>
          
          <QuizButton
            variant="primary"
            onClick={handleDownload}
            className="text-xl py-6 mb-6 max-w-md mx-auto"
          >
            📥 Download Your Guide Now
          </QuizButton>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              Want to learn more about Pets Elite premium products?
            </p>
            <a 
              href="https://petsalott.co.za/shop-2/" 
              target="_blank"
              rel="noopener"
              className="text-primary hover:text-primary/80 font-semibold underline"
            >
              Browse Our Complete Product Range → <span className="hover:text-blue-600">Petsalott</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}