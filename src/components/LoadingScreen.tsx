import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Kaleidoscope';
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, 150); 
      } else {
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    };
    
    setTimeout(typeText, 500);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-deep-charcoal flex items-center justify-center z-50">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-burnt-orange/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-earthy-green/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-gold/20 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

     
      <div className="relative text-center">
        <h1 className="text-6xl md:text-8xl font-serif text-cream tracking-wide">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        
      
        <div className="mt-8 flex justify-center space-x-6">
          <div className="w-2 h-2 bg-burnt-orange rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-200"></div>
          <div className="w-2 h-2 bg-earthy-green rounded-full animate-bounce delay-400"></div>
        </div>
      </div>
    </div>
  );
}