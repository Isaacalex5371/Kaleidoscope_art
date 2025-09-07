import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Owner",
    company: "The Roasted Bean Café",
    type: "Coffee House",
    quote: "Kaleidoscope transformed our café into an artistic haven. The warm earth tones and flowing wall designs create the perfect atmosphere for our customers to relax and connect. Sales increased 30% since the installation!",
    accent: "burnt-orange"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "General Manager",
    company: "Vista Hotel & Spa",
    type: "Hotel",
    quote: "The lobby wall art and canvas pieces have become conversation starters for every guest. The sophisticated blend of colors perfectly matches our brand identity while creating an unforgettable first impression.",
    accent: "earthy-green"
  },
  {
    id: 3,
    name: "Isabella Thompson",
    role: "Executive Chef",
    company: "Harvest Table Restaurant",
    type: "Restaurant",
    quote: "The feature wall mural captures the essence of farm-to-table dining beautifully. Our guests often ask about the artwork, and it's enhanced our reputation as a thoughtful, artistic dining destination.",
    accent: "gold"
  },
  {
    id: 4,
    name: "David Park",
    role: "Principal",
    company: "Innovation Academy",
    type: "School",
    quote: "The educational wall murals inspire our students daily. The interactive elements and vibrant colors create an environment that encourages creativity and learning. It's truly transformed our hallways into galleries.",
    accent: "burnt-orange"
  },
  {
    id: 5,
    name: "Elena Martinez",
    role: "Manager",
    company: "Artisan Coffee Co.",
    type: "Coffee House",
    quote: "The custom canvas sheets and wall art created the perfect intimate atmosphere we were looking for. Our regulars love the artistic touch, and it's become our signature feature.",
    accent: "earthy-green"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Operations Director",
    company: "Grand Plaza Hotel",
    type: "Hotel",
    quote: "The suite wall art and lobby installations elevated our guest experience significantly. The sophisticated artwork perfectly complements our luxury brand and creates memorable stays.",
    accent: "gold"
  }
];

const clients = [
  "The Roasted Bean Café", "Vista Hotel & Spa", "Harvest Table Restaurant", 
  "Innovation Academy", "Artisan Coffee Co.", "Grand Plaza Hotel",
  "Metropolitan Hotel", "Greenway Restaurant Group", "Riverside School District",
  "Downtown Coffee House", "Boutique Hotel Collection", "Urban Eatery"
];

export function ClientsTestimonials() {
  const getAccentClasses = (accent: string) => {
    switch (accent) {
      case 'burnt-orange':
        return 'border-secondary bg-section-light-card hover:bg-secondary/10';
      case 'earthy-green':
        return 'border-accent bg-section-light-card hover:bg-accent/10';
      case 'gold':
        return 'border-gold bg-section-light-card hover:bg-gold/10';
      default:
        return 'border-secondary bg-section-light-card hover:bg-secondary/10';
    }
  };

  const focusOnContactNameInput = () => {
    
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      
      const contactInputs = document.querySelectorAll('input[placeholder="Your name"]');
      
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactNameInput = contactSection.querySelector('input[placeholder="Your name"]') as HTMLInputElement;
        if (contactNameInput) {
          contactNameInput.focus();
        }
      }
      
      if (contactInputs.length > 1) {
        const contactNameInput = contactInputs[1] as HTMLInputElement;
        contactNameInput.focus();
      } else if (contactInputs.length > 0) {
        const contactNameInput = contactInputs[0] as HTMLInputElement;
        contactNameInput.focus();
      }
    }, 800); 
  };

  return (
    <section className="py-24 bg-section-light texture-overlay transition-colors duration-500 relative overflow-hidden">
     
      <motion.div
        className="absolute top-24 right-16 w-6 h-6 bg-secondary/10 rounded-full"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-4 h-4 bg-gold/15 rounded-full"
        animate={{ 
          y: [0, 25, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
   
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Client Stories
          </motion.h2>
          <motion.div 
            className="w-24 mx-auto mb-8 overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="brush-divider"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Discover how custom artwork has transformed spaces and enhanced experiences for our valued clients.
          </motion.p>
        </motion.div>

      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card 
                className={`border-2 ${getAccentClasses(testimonial.accent)} hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm relative overflow-hidden`}
              >
           
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${
                      testimonial.accent === 'burnt-orange' ? 'rgba(212, 165, 116, 0.05)' :
                      testimonial.accent === 'earthy-green' ? 'rgba(107, 124, 90, 0.05)' :
                      'rgba(201, 169, 97, 0.05)'
                    } 0%, transparent 70%)`
                  }}
                />
                
                <CardContent className="p-8 relative z-10">
                  
               
                  <div className="mb-6">
                    <motion.div 
                      className="text-3xl text-foreground/20 mb-4 font-serif"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
                      viewport={{ once: true }}
                    >
                      "
                    </motion.div>
                    <motion.p 
                      className="text-foreground/80 leading-relaxed italic"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: (index * 0.1) + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {testimonial.quote}
                    </motion.p>
                  </div>

                 
                  <motion.div 
                    className="border-t border-border pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <motion.h4 
                          className="font-medium text-foreground mb-1 group-hover:text-secondary transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <p className="text-sm text-foreground/60 mb-2">
                          {testimonial.role}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            testimonial.accent === 'burnt-orange' ? 'bg-secondary text-secondary-foreground' :
                            testimonial.accent === 'earthy-green' ? 'bg-accent text-accent-foreground' :
                            'bg-gold text-background'
                          } shadow-sm`}
                        >
                          {testimonial.type}
                        </Badge>
                      </motion.div>
                    </div>
                  </motion.div>

             
                  <motion.div 
                    className={`w-12 h-1 mt-4 rounded ${
                      testimonial.accent === 'burnt-orange' ? 'bg-secondary' :
                      testimonial.accent === 'earthy-green' ? 'bg-accent' :
                      'bg-gold'
                    } transition-all duration-300`}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 48, opacity: 1 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + 0.9 }}
                    viewport={{ once: true }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

       
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-serif text-foreground mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Amazing Clients
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div 
                key={index}
                className="bg-section-light-card backdrop-blur-sm border border-border rounded-lg p-4 text-center hover:bg-section-light transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.8 + (index * 0.05),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(212, 165, 116, 0.3)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-gold/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.p 
                  className="text-muted-foreground text-sm font-medium relative z-10 group-hover:text-secondary transition-colors duration-300"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {client}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
          >
            Ready to join our community of satisfied clients?
          </motion.p>
          
          <motion.button 
            onClick={focusOnContactNameInput}
            className="px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(212, 165, 116, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
           
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold/20 via-secondary to-accent/20 rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.span
              className="relative z-10"
              whileHover={{ 
                textShadow: "0 0 8px rgba(43, 43, 43, 0.8)"
              }}
            >
              Start Your Project Today
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}