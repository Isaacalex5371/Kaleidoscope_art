import { useEffect, useState } from 'react';
import { ImageWithFallback } from './imageerror/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-section-light texture-overlay transition-colors duration-500">
 
      <motion.div 
        className="absolute inset-0 scale-110"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1610401163940-c7a80f2e1fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydGlzdGljJTIwdGV4dHVyZSUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc1NzAxNjY2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract artistic texture background"
          className="w-full h-full object-cover opacity-80 dark:opacity-60"
        />
       
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-section-light/30 via-section-light/50 to-section-light/70 dark:from-background/40 dark:via-background/60 dark:to-background/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </motion.div>

     
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-secondary/30 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-3 h-3 bg-gold/40 rounded-full"
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-accent/50 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

     
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary mb-6 tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5
            }}
          >
            Kaleidoscope
          </motion.h1>
          
          <motion.div 
            className="w-32 mx-auto mb-8 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          >
            <motion.div 
              className="brush-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            ></motion.div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 font-bold tracking-wide italic drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 2
            }}
          >
            Colors that Speak Beyond Words
          </motion.p>
          
          <motion.div 
            className="mt-12 flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div 
              className="w-2 h-2 bg-secondary rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="w-2 h-2 bg-gold rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
            <motion.div 
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div 
          className="flex flex-col items-center space-y-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          <span className="text-sm tracking-wide font-bold">Explore</span>
          <motion.div 
            className="w-px h-8 bg-foreground/30 font-bold"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}