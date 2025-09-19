import { useState, useEffect } from 'react';
import { ArrowLeft, Palette, Users, Shield, FileText } from 'lucide-react';
import { Button } from './ui/button';

interface TermsOfServiceProps { 
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-section-light transition-all duration-500">
      {/* Animated Header */}
      <div className={`bg-section-dark transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 py-12">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-8 text-foreground hover:text-burnt-orange transition-colors duration-300 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <FileText className="h-16 w-16 text-burnt-orange animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-earthy-green rounded-full animate-bounce"></div>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Terms of Service
            </h1>
            
            <div className="brush-divider brush-divider-animated mx-auto w-32 mb-6"></div>
            
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional mural artistry services for coffee houses, restaurants, hotels, and educational institutions
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        
        {/* Section 1: Service Agreement */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-light-card rounded-lg p-8 shadow-lg texture-overlay">
            <div className="flex items-center mb-6">
              <Palette className="h-8 w-8 text-burnt-orange mr-4" />
              <h2 className="font-serif text-2xl text-foreground">Service Agreement</h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>Kaleidoscope Murals</strong> provides professional wall mural and canvas artwork services 
                specifically for commercial venues including coffee houses, restaurants, hotels, and schools.
              </p>
              <p>
                By engaging our services, you agree to these terms which govern our artistic collaboration and 
                business relationship. For inquiries, contact us at <a href='tel:+25122357628'><strong>+215-223-57628</strong></a> .
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All artwork is custom-created based on client specifications and venue requirements</li>
                <li>Project timelines are established during initial consultation and may vary based on complexity</li>
                <li>Changes to approved designs may result in additional fees and timeline adjustments</li>
                <li>Final approval is required before installation begins</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-dark-card rounded-lg p-8 shadow-lg texture-overlay">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-earthy-green mr-4" />
              <h2 className="font-serif text-2xl text-foreground">Payment Terms & Pricing</h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>Commission Structure:</strong> All projects require a detailed consultation to provide 
                accurate pricing based on size, complexity, materials, and installation requirements.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Deposit:</strong> 50% deposit required upon contract signing to secure project timeline</li>
                <li><strong>Progress Payment:</strong> 25% due upon design approval and material procurement</li>
                <li><strong>Final Payment:</strong> 25% due upon project completion and client approval</li>
                <li><strong>Payment Methods:</strong> Check, bank transfer</li>
                <li><strong>Late Fees:</strong> 1.5% monthly interest on overdue balances after 30 days</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                * Travel expenses may apply for projects outside our standard service area
              </p>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-light-card rounded-lg p-8 shadow-lg texture-overlay">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-gold mr-4" />
              <h2 className="font-serif text-2xl text-foreground">Intellectual Property & Usage Rights</h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>Artwork Ownership:</strong> Upon full payment, the client receives full ownership rights 
                to the completed mural artwork for their specified venue.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kaleidoscope Murals retains the right to photograph and showcase completed works in portfolios</li>
                <li>Client may not reproduce or recreate the artwork design without written permission</li>
                <li>Artist signature or attribution must remain visible on completed works</li>
                <li>Modifications to completed artwork require artist consultation and approval</li>
                <li>Commercial licensing for reproduction requires separate agreement and compensation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-dark-card rounded-lg p-8 shadow-lg texture-overlay">
            <h2 className="font-serif text-2xl text-foreground mb-6">Project Scope & Cancellation Policy</h2>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>Project Scope:</strong> Each project includes design consultation, material sourcing, 
                artwork creation, and professional installation at the specified venue.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Site Preparation:</strong> Client responsible for wall preparation, lighting, and site access</li>
                <li><strong>Materials:</strong> High-quality, commercial-grade paints and materials included in pricing</li>
                <li><strong>Timeline:</strong> Typical projects range from 2-6 weeks depending on complexity</li>
                <li><strong>Weather Dependencies:</strong> Outdoor projects subject to weather-related delays</li>
              </ul>
              
              <p className="mt-6"><strong>Cancellation Policy:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation within 48 hours of signing: Full refund minus 1000 ETB consultation fee</li>
                <li>Cancellation after design approval: 50% of total project cost</li>
                <li>Cancellation during installation: 90% of total project cost</li>
                <li>Force majeure events will be handled on case-by-case basis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-light-card rounded-lg p-8 shadow-lg texture-overlay">
            <h2 className="font-serif text-2xl text-foreground mb-6">Warranties & Liability</h2>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>Artwork Warranty:</strong> We guarantee the quality and durability of our work using 
                professional-grade materials designed for commercial environments.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Material Warranty:</strong> 5-year warranty on paint adhesion and color fastness under normal conditions</li>
                <li><strong>Workmanship Warranty:</strong> 2-year warranty on installation quality and finish</li>
                <li><strong>Environmental Factors:</strong> Warranty void for damage from extreme weather, vandalism, or improper maintenance</li>
                <li><strong>Maintenance Guidelines:</strong> Proper care instructions provided upon project completion</li>
              </ul>
              
              <p className="mt-6"><strong>Liability Limitations:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kaleidoscope Murals carries full liability insurance for all projects</li>
                <li>Liability limited to the total project value</li>
                <li>Client responsible for obtaining necessary permits and permissions</li>
                <li>Force majeure events beyond our control are excluded from liability</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-dark-card rounded-lg p-8 shadow-lg texture-overlay">
            <h3 className="font-serif text-xl text-foreground mb-4">Questions About These Terms?</h3>
            <p className="text-muted-foreground mb-4">
              Contact us to discuss your mural project and clarify any terms or conditions.
            </p>
            <p className="text-lg">
              <strong className="text-burnt-orange">Phone:</strong> 
            <a>  <span className="ml-2 text-foreground">+215-223-57628</span></a>
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onBack}
            className="bg-burnt-orange hover:bg-earthy-green text-cream px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}