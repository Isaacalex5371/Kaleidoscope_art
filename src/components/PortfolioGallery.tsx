import { useRef, useState } from 'react';
import { ImageWithFallback } from './imageerror/ImageWithFallback';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const portfolioItems = [
 
  {
    id: 1,
    title: "Cozy Coffee Corner Mural",
    category: "Coffee Houses",
    image: "/images/coffe/coffe_1.jpg",
    description: "Warm, earthy wall mural creating an inviting coffee atmosphere",
    size: "large"
  },
  {
    id: 2,
    title: "Artistic Bubble Abstraction",
    category: "Art Bubbles",
    image: "/images/art_bubbles/bubble_1.jpg",
    description: "Playful bubble-inspired wall design with abstract forms",
    size: "medium"
  },
  {
    id: 3,
    title: "Educational Wall Art",
    category: "Schools",
    image: "/images/school/school_1.jpg",
    description: "Inspiring educational murals for vibrant learning environments",
    size: "small"
  },
  {
    id: 4,
    title: "Hotel Lobby Canvas Series",
    category: "Hotels",
    image: "/images/hotel/hotel_1.jpg",
    description: "Elegant canvas paintings creating a welcoming hotel ambiance",
    size: "medium"
  },
  {
    id: 5,
    title: "Bubble Spectrum Design",
    category: "Art Bubbles",
    image: "/images/art_bubbles/bubble_2.jpg",
    description: "Bright gradient bubble shapes adding artistic flair",
    size: "large"
  },
  {
    id: 6,
    title: "Café Canvas Collection",
    category: "Coffee Houses",
    image: "/images/coffe/coffe_2.jpg",
    description: "Custom canvas wall art for cozy café settings",
    size: "medium"
  },
  {
    id: 7,
    title: "School Hallway Murals",
    category: "Schools",
    image: "/images/school/school_2.jpg",
    description: "Colorful murals transforming everyday school spaces",
    size: "small"
  },
  {
    id: 8,
    title: "Luxury Suite Art",
    category: "Hotels",
    image: "/images/hotel/hotel_2.jpg",
    description: "Refined wall art pieces enhancing luxury hotel suites",
    size: "large"
  },
  {
    id: 9,
    title: "Floating Bubble Impressions",
    category: "Art Bubbles",
    image: "/images/art_bubbles/bubble_3.jpg",
    description: "Light, airy bubble art evoking motion and playfulness",
    size: "medium"
  },
  {
    id: 10,
    title: "Coffeehouse Warmth",
    category: "Coffee Houses",
    image: "/images/coffe/coffe_3.jpg",
    description: "Inviting designs that bring warmth to coffee interiors",
    size: "small"
  },
  {
    id: 11,
    title: "Student Creativity Wall",
    category: "Schools",
    image: "/images/school/school_3.jpg",
    description: "Murals inspiring creativity and exploration in schools",
    size: "medium"
  },
  {
    id: 12,
    title: "Grand Hotel Accent Wall",
    category: "Hotels",
    image: "/images/hotel/hotel_3.jpg",
    description: "Statement wall art creating a sophisticated hotel vibe",
    size: "large"
  },
  {
    id: 13,
    title: "Colorful Bubble Array",
    category: "Art Bubbles",
    image: "/images/art_bubbles/bubble_4.jpg",
    description: "Dynamic bubble visuals brightening up blank walls",
    size: "small"
  },
  {
    id: 14,
    title: "Bubble Flow Design",
    category: "Art Bubbles",
    image: "/images/art_bubbles/bubble_5.jpg",
    description: "Organic bubble patterns giving life to modern interiors",
    size: "medium"
  },
  {
    id: 15,
    title: "Dreamlike Bubble Series",
    category: "Art Bubbles",
    image: "/images/art_bubbles/bubble_6.jpg",
    description: "Surreal bubble compositions adding an imaginative touch",
    size: "large"
  },
  {
    id: 16,
    title: "Vibrant Bubble Motifs",
    category: "Art Bubbles",
    image: "/images/art_bubbles/bubble_7.jpg",
    description: "Energetic and colorful bubble-inspired mural pieces",
    size: "medium"
  }
];

const categories = ["All", "Coffee Houses", "Art Bubbles", "Hotels", "Schools"];

export function PortfolioGallery() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

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
    <div className="max-w-7xl mx-auto px-6 relative z-10">

      {/* Title */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 
  ref={titleRef} 
  className="text-4xl md:text-5xl font-serif text-foreground mb-6"
>
  Portfolio Gallery
</h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a curated collection of artistic transformations across diverse spaces and venues.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false); 
            }}
            className={`px-6 py-3 rounded-full transition-all duration-500 ${
              activeCategory === category
                ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25'
                : 'bg-section-light-card text-foreground hover:bg-muted border border-border hover:border-secondary/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        {visibleItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`group relative overflow-hidden rounded-xl bg-section-light-card border border-border hover:border-secondary/50 transition-all duration-500 ${getSizeClasses(item.size)}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-secondary text-secondary-foreground shadow-lg">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-serif text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More / See Less */}
      {filteredItems.length > 6 && (
        <div className="text-center mt-16">
         <button
  onClick={() => {
    if (showAll) {
      
      setShowAll(false);
      setTimeout(() => {
        titleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
     
      setShowAll(true);
    }
  }}
  className="inline-block px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-500 rounded-full font-medium"
>
  {showAll ? "See Less" : "See More"}
</button>

        </div>
      )}
    </div>
  </section>
);

}