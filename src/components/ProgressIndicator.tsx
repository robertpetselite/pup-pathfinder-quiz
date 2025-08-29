import { cn } from '@/lib/utils';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function ProgressIndicator({ currentStep, totalSteps, className }: ProgressIndicatorProps) {
  return (
    <div className={cn("flex items-center justify-center space-x-2 mb-8", className)}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            index < currentStep 
              ? "bg-primary scale-110" 
              : index === currentStep 
                ? "bg-primary/60 scale-110" 
                : "bg-muted scale-100"
          )}
        />
      ))}
    </div>
  );
}