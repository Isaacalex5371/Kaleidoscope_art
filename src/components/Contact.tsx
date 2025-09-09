import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs
      .send(
        "service_pdx9x7d",     
        "template_4suwkft",    
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "K_tcIzsgNtzOW66ei"      
      )
      .then(
        () => {
          setSubmitStatus('success');
          setFormData({ name: "", email: "", subject: "", message: "" }); 
        },
        (error) => {
          console.error("❌ Failed to send message:", error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-24 bg-section-dark texture-overlay transition-colors duration-500 relative overflow-hidden">
    
      <motion.div
        className="absolute top-20 right-24 w-7 h-7 bg-secondary/10 rounded-full"
        animate={{ 
          y: [0, -35, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-28 left-16 w-5 h-5 bg-gold/15 rounded-full"
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
    
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
            Let's Create Together
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
            Ready to transform your space with custom artwork? Let's discuss your vision and bring it to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h3 
                className="text-2xl font-serif text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    color: 'secondary',
                    title: 'Email',
                    value: 'hello@kaleidoscopeart.com',
                    subtitle: 'Response within 24 hours',
                    delay: 0.7
                  },
                  { 
                    icon: Phone, 
                    color: 'accent',
                    title: 'Phone',
                    value: '+215 -2235 7628',
                    subtitle: 'Mon-Fri, 9AM-6PM PST',
                    delay: 0.9
                  },
                  { 
                    icon: MapPin, 
                    color: 'gold',
                    title: 'Studio',
                    value: 'Downtown Arts District',
                    subtitle: 'addis abeba ,akaki kality ',
                    delay: 1.1
                  }
                ].map((contact) => (
                  <motion.div 
                    key={contact.title}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: contact.delay }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-${contact.color}/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-${contact.color}/20 transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: contact.color === 'secondary' ? "0 0 20px rgba(212, 165, 116, 0.3)" :
                                   contact.color === 'accent' ? "0 0 20px rgba(107, 124, 90, 0.3)" :
                                   "0 0 20px rgba(201, 169, 97, 0.3)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <contact.icon className={`w-5 h-5 text-${contact.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-medium text-foreground mb-1 group-hover:text-secondary transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        {contact.title}
                      </motion.h4>
                      <p className="text-muted-foreground">{contact.value}</p>
                      <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-foreground mb-4">Follow the Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, color: 'secondary', link: 'https://instagram.com/ysakalex7' },
                  { icon: Facebook, color: 'accent', link: 'https://www.facebook.com/profile.php?id=100089356375631' },
                  { icon: Linkedin, color: 'gold', link: 'https://t.me/Beebisho' }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-muted/30 hover:bg-${social.color}/10 border border-border hover:border-${social.color}/30 rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.5 + (index * 0.1),
                      type: "spring",
                      bounce: 0.4
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: social.color === 'secondary' ? "0 0 20px rgba(212, 165, 116, 0.4)" :
                                 social.color === 'accent' ? "0 0 20px rgba(107, 124, 90, 0.4)" :
                                 "0 0 20px rgba(201, 169, 97, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={`w-5 h-5 text-muted-foreground group-hover:text-${social.color} transition-colors duration-300`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

     
            <motion.div 
              className="bg-section-dark-card p-6 rounded-2xl border border-border backdrop-blur-sm relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                borderColor: "rgba(212, 165, 116, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            >
            
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-gold/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <h4 className="font-medium text-foreground mb-4 relative z-10">Studio Hours</h4>
              <div className="space-y-2 text-sm relative z-10">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'By Appointment' }
                ].map((schedule, index) => (
                  <motion.div 
                    key={schedule.day}
                    className="flex justify-between group-hover:text-secondary transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="text-foreground">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-section-dark-card p-8 rounded-2xl shadow-2xl border border-border backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-gold/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.h3 
              className="text-2xl font-serif text-foreground mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Send a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className="border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                    className="border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="What can I help you with?"
                  required
                  disabled={isSubmitting}
                  className="border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project, space, timeline, or any questions you have..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 transition-all duration-500 relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </div>
                    ) : (
                      <motion.span
                        className="relative z-10"
                        whileHover={{ 
                          textShadow: "0 0 8px rgba(248, 245, 241, 0.8)"
                        }}
                      >
                        Send Message
                      </motion.span>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent to-gold/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: isSubmitting ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
                
          
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center mt-4"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center mt-4"
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </motion.div>
            </form>

            <motion.div 
              className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20 relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground text-center">
                <strong>Quick Response Guaranteed:</strong> I personally respond to every inquiry within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}