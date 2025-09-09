import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-section-light transition-all duration-500">
     
      <div className={`bg-section-dark transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 py-12">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-8 text-deep-charcoal hover:text-burnt-orange transition-colors duration-300 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Shield className="h-16 w-16 text-earthy-green animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-burnt-orange rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-deep-charcoal mb-4">
              Privacy Policy
            </h1>
            
            <div className="brush-divider brush-divider-animated mx-auto w-32 mb-6"></div>
            
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy and data protection in our mural artistry services
            </p>
            
            <p className="font-sans text-sm text-muted-foreground mt-4">
              <strong>Last Updated:</strong> September 2025
            </p>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-light-card rounded-lg p-8 shadow-lg texture-overlay">
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-burnt-orange mr-4" />
              <h2 className="font-serif text-2xl text-deep-charcoal">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>Kaleidoscope Arts</strong> collects information necessary to provide professional 
                mural artistry services to commercial venues. We are committed to protecting your privacy 
                and using your information responsibly.
              </p>
              
              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Business Contact Information:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kaleidoscope, Kaleab G/Mikael, and Illustrator</li>
                  <li>Akaki kality, Addis Abeba</li>
                  <li>Phone numbers (business:<a href='tel:+25122357628'> +215-223-57628</a>) and <a href='mailto:bemnet933@gmail.com'>bemnet933@gmail.com</a></li>
                 
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Project-Related Information:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Venue photographs and measurements for project planning</li>
                  <li>Design preferences, brand guidelines, and aesthetic requirements</li>
                  <li>Project timeline, budget parameters, and installation logistics</li>
                  <li>Site access requirements and safety considerations</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Website Analytics:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic website usage statistics for improving user experience</li>
                  <li>Portfolio viewing patterns to enhance showcase presentation</li>
                  <li>Contact form submissions and inquiry management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-dark-card rounded-lg p-8 shadow-lg texture-overlay">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-earthy-green mr-4" />
              <h2 className="font-serif text-2xl text-deep-charcoal">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>
                Your information is used exclusively for providing professional mural artistry services 
                and maintaining our business relationship.
              </p>
              
              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Primary Uses:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Project Management:</strong> Creating custom designs, coordinating installations, and managing timelines</li>
                  <li><strong>Communication:</strong> Project updates, scheduling, and professional correspondence</li>
                  <li><strong>Documentation:</strong> Maintaining project records and portfolio development with client permission</li>
                  <li><strong>Quality Assurance:</strong> Following up on completed projects and warranty service</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Business Operations:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Scheduling consultations and site visits for coffee houses, restaurants, hotels, and schools</li>
                  <li>Procurement of materials and coordination with installation teams</li>
                  <li>Invoicing, payment processing, and financial record keeping</li>
                  <li>Insurance documentation and liability management</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-section-light-card rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We do not sell, rent, or share your personal information with third parties 
                  for marketing purposes. All information is used solely for providing mural artistry services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-light-card rounded-lg p-8 shadow-lg texture-overlay">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-gold mr-4" />
              <h2 className="font-serif text-2xl text-deep-charcoal">Information Sharing & Protection</h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>Limited Sharing:</strong> We may share your information only in specific, 
                business-necessary circumstances with your explicit consent.
              </p>
              
              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Authorized Sharing Includes:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Trusted Contractors:</strong> Installation teams and material suppliers bound by confidentiality agreements</li>
                  <li><strong>Professional Services:</strong> Insurance providers, legal counsel, and accounting services as needed</li>
                  <li><strong>Portfolio Use:</strong> Showcasing completed work with client permission for business development</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
                </ul>
              </div>

             

              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Retention Policy:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Active project information retained for project duration plus warranty period</li>
                  <li>Portfolio photographs retained with permission for business development</li>
                  <li>Financial records maintained per legal requirements (typically 7 years)</li>
                  <li>Contact information retained for future project opportunities unless removal requested</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-dark-card rounded-lg p-8 shadow-lg texture-overlay">
            <div className="flex items-center mb-6">
              <Phone className="h-8 w-8 text-burnt-orange mr-4" />
              <h2 className="font-serif text-2xl text-deep-charcoal">Your Rights & Choices</h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>
                You have rights regarding your personal information and how we use it for our Illustrator artistry services.
              </p>
              
              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Your Rights Include:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request removal of your information (subject to legal and business requirements)</li>
                  <li><strong>Portability:</strong> Request your information in a commonly used, readable format</li>
                  <li><strong>Restriction:</strong> Request limitation on how we process your information</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Portfolio & Marketing Choices:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Opt out of having your completed project featured in our portfolio</li>
                  <li>Request removal of project photos from marketing materials</li>
                  <li>Choose not to receive follow-up communications about future services</li>
                  <li>Specify preferences for how your business information is used</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-section-light-card rounded-lg">
                <p className="text-sm">
                  <strong>To Exercise Your Rights:</strong> Contact us at <a href='tel:+25122357628'> <span className="text-burnt-orange">+215-223-57628</span> </a>
                  or through our contact form. We will respond to all valid requests within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-light-card rounded-lg p-8 shadow-lg texture-overlay">
            <h2 className="font-serif text-2xl text-deep-charcoal mb-6">Policy Updates & Contact Information</h2>
            <div className="space-y-4 text-foreground">
              <div>
                <h4 className="text-deep-charcoal mb-3">Policy Updates:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may update this privacy policy to reflect changes in our practices or legal requirements</li>
                  <li>Significant changes will be communicated directly to active clients</li>
                  <li>Updated policies will be posted on our website with the revision date</li>
                  <li>Continued use of our services indicates acceptance of any policy updates</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Data Controller Information:</h4>
                <div className="bg-section-dark-card p-4 rounded-lg">
                  <p><strong>Business:</strong> Kaleidoscope Murals</p>
                  <p><strong>Services:</strong> Professional mural artistry for commercial venues</p>
                  <p><strong>Specialties:</strong> Coffee houses, restaurants, hotels, and educational institutions</p>
                  <p><strong>Contact:</strong> +215-223-57628</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-deep-charcoal mb-3">Questions or Concerns:</h4>
                <p>
                  If you have questions about this privacy policy, how we handle your information, 
                  or wish to exercise any of your rights, please contact us directly. We are committed 
                  to addressing your concerns promptly and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-section-dark-card rounded-lg p-8 shadow-lg texture-overlay">
            <h3 className="font-serif text-xl text-deep-charcoal mb-4">Privacy Questions?</h3>
            <p className="text-muted-foreground mb-4">
              Contact us to discuss your privacy concerns or data handling questions.
            </p>
            <p className="text-lg">
              <strong className="text-earthy-green">Phone:</strong> 
             <a href='tel:+25122357628'> <span className="ml-2 text-deep-charcoal">+215-223-57628</span></a>
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onBack}
            className="bg-earthy-green hover:bg-burnt-orange text-cream px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}