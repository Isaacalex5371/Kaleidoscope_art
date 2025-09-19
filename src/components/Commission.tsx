import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion } from 'framer-motion'; 
import emailjs from 'emailjs-com'; 

export function Commission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    description: ''
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

    emailjs.send(
      "service_pdx9x7d",
      "template_4suwkft",
      {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        budget: formData.budget,
        description: formData.description
      },
      "K_tcIzsgNtzOW66ei"
    ).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', projectType: '', budget: '', description: '' });
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        setSubmitStatus('error');
      }
    ).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-24 bg-section-dark texture-overlay transition-colors duration-500 relative overflow-hidden">
    
      <motion.div
        className="absolute top-32 left-20 w-8 h-8 bg-secondary/10 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 bg-gold/15 rounded-full"
        animate={{ 
          y: [0, 25, 0],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
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
            className="text-4xl md:text-6xl font-serif text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Commission Your Vision
          </motion.h2>
          <motion.div 
            className="w-24 mx-auto mb-8 overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="brush-divider"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Transform your space with custom artwork that tells your unique story. 
            From intimate cafés to grand hotels, every wall is a canvas waiting for inspiration.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
         
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
                What You Get
              </motion.h3>
              
              <div className="space-y-6">
                {[
                  {
                    color: 'bg-secondary',
                    title: 'Personalized Consultation',
                    description: 'One-on-one discussion to understand your vision, space, and artistic preferences.'
                  },
                  {
                    color: 'bg-accent',
                    title: 'Custom Design Concepts',
                    description: 'Multiple design options tailored specifically to your space and brand identity.'
                  },
                  {
                    color: 'bg-gold',
                    title: 'Professional Execution',
                    description: 'High-quality materials and techniques ensuring lasting beauty and durability.'
                  },
                  {
                    color: 'bg-foreground',
                    title: 'Ongoing Support',
                    description: 'Maintenance guidance and touch-up services to keep your artwork pristine.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`w-3 h-3 ${item.color} rounded-full mt-2 flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.5,
                        boxShadow: "0 0 15px rgba(212, 165, 116, 0.6)"
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <div>
                      <motion.h4 
                        className="text-lg font-medium text-foreground mb-2 group-hover:text-secondary transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

         
            <motion.div 
              className="bg-section-dark-card p-8 rounded-2xl border border-border backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
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
              
              <h4 className="text-lg font-medium text-foreground mb-4 relative z-10">Popular Project Types</h4>
              <motion.div 
                className="grid grid-cols-2 gap-4 text-sm text-muted-foreground relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                {[
                  'Wall Murals', 'Canvas Paintings', 'Restaurant Art', 'Coffee House Murals',
                  'Hotel Lobbies', 'Café Canvas Art', 'School Murals', 'Educational Spaces'
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="hover:text-secondary transition-colors duration-300 cursor-default"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.5 + (index * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 3 }}
                  >
                    • {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-section-dark-card p-8 rounded-2xl shadow-xl border border-border backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
            }}
          >
      
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5"
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
              Start Your Project
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
                  Project Type *
                </label>
                <Select onValueChange={(value) => handleInputChange('projectType', value)} disabled={isSubmitting}>
                  <SelectTrigger className="border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mural">Wall Mural</SelectItem>
                    <SelectItem value="painting">Canvas Painting</SelectItem>
                    <SelectItem value="installation">Art Installation</SelectItem>
                    <SelectItem value="multiple">Multiple Pieces</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range
                </label>
                <Select onValueChange={(value) => handleInputChange('budget', value)} disabled={isSubmitting}>
                  <SelectTrigger className="border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under 5,000 ETB</SelectItem>
                    <SelectItem value="5k-15k">5ooo ETB-15,000 ETB</SelectItem>
                    <SelectItem value="15k-30k">15,000 etb - 30,000 ETB</SelectItem>
                    <SelectItem value="30k-50k">30,000 ETB - 50,000 ETB</SelectItem>
                    <SelectItem value="over-50k">Over 50,000 ETB</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Tell me about your space, vision, style preferences, timeline, and any specific requirements..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-3 transition-all duration-500 relative overflow-hidden group"
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
                          textShadow: "0 0 8px rgba(43, 43, 43, 0.8)"
                        }}
                      >
                        Submit Commission Request
                      </motion.span>
                    )}
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold/20 via-secondary to-accent/20"
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
                    Your commission request has been sent successfully!
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center mt-4"
                  >
                    Failed to send request. Please try again later.
                  </motion.p>
                )}
              </motion.div>
            </form>

            <motion.p 
              className="text-xs text-muted-foreground mt-4 text-center relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
            >
              I typically respond within 24 hours with next steps and consultation scheduling.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}