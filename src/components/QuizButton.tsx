import { cn } from '@/lib/utils';

interface QuizButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'option' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export function QuizButton({ 
  children, 
  onClick, 
  variant = 'option', 
  className,
  disabled = false 
}: QuizButtonProps) {
  const baseClasses = "w-full p-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const variants = {
    primary: "bg-gradient-hero text-white shadow-lg hover:shadow-xl border-0",
    option: "bg-card border-2 border-border hover:border-primary hover:bg-accent text-foreground shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variants[variant], className)}
    >
      {children}
    </button>
  );
}