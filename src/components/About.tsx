import { ImageWithFallback } from './imageerror/ImageWithFallback';
import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-24 bg-section-dark texture-overlay transition-colors duration-500 relative overflow-hidden">
     
      <motion.div
        className="absolute top-16 right-20 w-5 h-5 bg-secondary/15 rounded-full"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 left-12 w-4 h-4 bg-gold/20 rounded-full"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
        
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="aspect-square rounded-2xl overflow-hidden bg-muted"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
               <ImageWithFallback
  src="images/wall/wall_1.jpg"
  alt="Kaleidoscope artist portrait"
  className="w-full max-w-[400px] aspect-[9/16] object-contain transition-transform duration-700 hover:scale-105"
/>

              </motion.div>
              
             
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-secondary rounded-tl-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(212, 165, 116, 0.4)"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(107, 124, 90, 0.4)"
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 -z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-serif text-foreground mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                About the Artist
              </motion.h2>
              <motion.div 
                className="w-24 mb-8 overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="brush-divider"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p 
                className="text-lg text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                Welcome to a world where imagination meets reality through the vibrant strokes of a brush. 
                I'm an artist who believes that every space deserves a splash of personality, a hint of wonder, 
                and a story that speaks to the soul.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                My journey began with a simple belief: art should not be confined to galleries but should 
                breathe life into everyday spaces. From cozy coffee houses to elegant restaurants, 
                welcoming hotels to inspiring schools, I transform walls and canvases into windows of possibility.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                Each piece I create is a kaleidoscope of emotions, experiences, and dreams. I specialize in 
                wall murals and canvas paintings, working closely with clients to understand their vision 
                and bring spaces to life with custom artwork that tells their unique story.
              </motion.p>
            </div>

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { number: '150+', label: 'Projects', color: 'text-secondary' },
                  { number: '8', label: 'Years', color: 'text-accent' },
                  { number: '50+', label: 'Venues', color: 'text-gold' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.8 + (index * 0.1),
                      type: "spring",
                      bounce: 0.4
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className={`text-2xl font-serif ${stat.color} mb-2 transition-all duration-300`}
                      whileHover={{ 
                        textShadow: "0 0 10px rgba(212, 165, 116, 0.6)",
                        scale: 1.1
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div 
                      className="text-sm text-muted-foreground uppercase tracking-wide group-hover:text-secondary transition-colors duration-300"
                      whileHover={{ y: -2 }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}