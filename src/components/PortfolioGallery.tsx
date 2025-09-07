import { useState } from 'react';
import { ImageWithFallback } from './imageerror/ImageWithFallback';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const portfolioItems = [
  {
    id: 1,
    title: "Cozy Coffee Corner Mural",
    category: "Coffee Houses",
    image: "https://images.unsplash.com/photo-1621343608779-19d5441f2e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBwYWludGluZ3xlbnwxfHx8fDE3NTcwMTY2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Warm, earthy wall mural creating an inviting coffee atmosphere",
    size: "large"
  },
  {
    id: 2,
    title: "Restaurant Feature Wall",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1691085260324-7c43b8911809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBhcnQlMjBtdXJhbHxlbnwxfHx8fDE3NTcwMTY2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Bold wall art enhancing the dining experience",
    size: "medium"
  },
  {
    id: 3,
    title: "Educational Wall Art",
    category: "Schools",
    image: "https://images.unsplash.com/photo-1722851923372-0886f3aa5b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBhcnQlMjBwYWludGluZyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjkyMzI5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Inspiring educational murals for learning environments",
    size: "small"
  },
  {
    id: 4,
    title: "Hotel Lobby Canvas Series",
    category: "Hotels",
    image: "https://images.unsplash.com/photo-1672413535623-a5227f2ee5c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwZ2FsbGVyeSUyMHdhbGx8ZW58MXx8fHwxNzU3MDE2NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant canvas paintings for hotel ambiance",
    size: "medium"
  },
  {
    id: 5,
    title: "School Hallway Murals",
    category: "Schools",
    image: "https://images.unsplash.com/photo-1722851923372-0886f3aa5b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBhcnQlMjBwYWludGluZyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjkyMzI5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Colorful wall murals transforming educational spaces",
    size: "small"
  },
  {
    id: 6,
    title: "Hotel Suite Wall Art",
    category: "Hotels",
    image: "https://images.unsplash.com/photo-1610401163940-c7a80f2e1fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydGlzdGljJTIwdGV4dHVyZSUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc1NzAxNjY2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sophisticated wall art for luxury hotel suites",
    size: "large"
  },
  {
    id: 7,
    title: "Café Canvas Collection",
    category: "Coffee Houses", 
    image: "https://images.unsplash.com/photo-1621343608779-19d5441f2e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBwYWludGluZ3xlbnwxfHx8fDE3NTcwMTY2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Custom canvas sheets for intimate café settings",
    size: "medium"
  },
  {
    id: 8,
    title: "Restaurant Accent Walls",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1672413535623-a5227f2ee5c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwZ2FsbGVyeSUyMHdhbGx8ZW58MXx8fHwxNzU3MDE2NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Statement wall murals for fine dining establishments",
    size: "small"
  }
];

const categories = ["All", "Coffee Houses", "Restaurants", "Hotels", "Schools"];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2';
      default:
        return '';
    }
  };

  return (
    <section className="py-24 bg-section-light texture-overlay transition-colors duration-500 relative overflow-hidden">
     
      <div className="absolute top-20 right-10 w-6 h-6 bg-secondary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-16 w-4 h-4 bg-gold/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-accent/15 rounded-full animate-pulse delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
       
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
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
            Portfolio Gallery
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
            ></motion.div>
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Explore a curated collection of artistic transformations across diverse spaces and venues.
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-500 relative overflow-hidden ${
                activeCategory === category
                  ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25'
                  : 'bg-section-light-card text-foreground hover:bg-muted border border-border hover:border-secondary/50'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.5 + (index * 0.1) 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: activeCategory === category 
                  ? "0 8px 25px rgba(212, 165, 116, 0.4)" 
                  : "0 4px 15px rgba(212, 165, 116, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-gold/10 to-accent/10 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-section-light-card border border-border hover:border-secondary/50 transition-all duration-500 ${getSizeClasses(item.size)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(212, 165, 116, 0.5)"
              }}
            >
              
              <div className="relative w-full h-full overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"
                  initial={{ opacity: 0, y: 100 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Badge className="mb-3 bg-secondary text-secondary-foreground shadow-lg">
                        {item.category}
                      </Badge>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-serif text-foreground mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="absolute top-4 right-4 w-3 h-3 bg-gold rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: "0 0 15px rgba(201, 169, 97, 0.6)"
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: "0 0 10px rgba(107, 124, 90, 0.6)"
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#contact"
            className="inline-block px-8 py-4 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-500 rounded-full font-medium relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(212, 165, 116, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ 
                textShadow: "0 0 8px rgba(212, 165, 116, 0.8)"
              }}
            >
              View Complete Portfolio
            </motion.span>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-gold/20 to-accent/20 rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}