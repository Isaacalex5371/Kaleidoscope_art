import { Instagram, Facebook, Mail, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { FaTiktok } from "react-icons/fa";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-always-dark border-t border-gold/20 py-16 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-burnt-orange/5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
     
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
 
          <motion.div 
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-cream">Kaleidoscope</h3>
            <p className="text-cream/70 leading-relaxed max-w-md">
              Transforming spaces through custom artwork that speaks to the soul. 
              Every wall is a canvas waiting for inspiration.
            </p>
            <div className="pt-4">
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-gold via-burnt-orange to-earthy-green rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-cream mb-4">Quick Links</h4>
            <ul className="space-y-3 text-cream/60">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#commission" 
                  className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Commission
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-cream mb-4">Services</h4>
            <ul className="space-y-3 text-cream/60">
              <li>
                <a 
                  href="#" 
                  className="hover:text-burnt-orange transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Wall Murals
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-burnt-orange transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Canvas Paintings
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-burnt-orange transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Art Installations
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-burnt-orange transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Consultations
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-burnt-orange transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Art Curation
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

   
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-cream/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          
       
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <motion.div 
              className="flex items-center space-x-2 text-cream/70"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@kaleidoscopeart.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 text-cream/70"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+215 -2235 7628</span>
            </motion.div>
          </div>

        
          <div className="flex space-x-4">
            <motion.a 
              href="https://instagram.com/ysakalex7" 
              className="w-10 h-10 bg-cream/10 hover:bg-burnt-orange/30 border border-cream/20 hover:border-burnt-orange/50 rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 20px rgba(212, 165, 116, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTiktok className="w-4 h-4 text-cream/70 group-hover:text-burnt-orange transition-colors duration-300" />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/profile.php?id=100089356375631" 
              className="w-10 h-10 bg-cream/10 hover:bg-earthy-green/30 border border-cream/20 hover:border-earthy-green/50 rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 20px rgba(107, 124, 90, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-4 h-4 text-cream/70 group-hover:text-earthy-green transition-colors duration-300" />
            </motion.a>
            <motion.a 
  href="https://t.me/Beebisho" 
  className="w-10 h-10 bg-cream/10 hover:bg-gold/30 border border-cream/20 hover:border-gold/50 rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
  whileHover={{ 
    scale: 1.1, 
    boxShadow: "0 0 20px rgba(201, 169, 97, 0.3)" 
  }}
  whileTap={{ scale: 0.95 }}
>
  <Send className="w-4 h-4 text-cream/70 group-hover:text-gold transition-colors duration-300" />
</motion.a>
          </div>
        </motion.div>

 
        <motion.div 
          className="text-center pt-8 border-t border-cream/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cream/60 text-sm">
            © {currentYear} Kaleidoscope Art Studio. All rights reserved. | 
            <a href="#" className="hover:text-gold transition-colors duration-300 ml-1">
              Privacy Policy
            </a> | 
            <a href="#" className="hover:text-gold transition-colors duration-300 ml-1">
              Terms of Service
            </a>
          </p>
          <p className="text-cream/40 text-xs mt-2">
            Crafted with passion in Los Angeles, California
          </p>
        </motion.div>
      </div>
    </footer>
  );
}