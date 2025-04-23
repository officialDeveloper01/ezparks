import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  User, 
  Database, 
  Share2, 
  Lock, 
  UserX, 
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEOHead from '../components/SEOHead';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections: Section[] = [
    {
      id: 'information-collected',
      title: 'Information We Collect',
      icon: <User className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p>We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and vehicle registration details.</li>
            <li><strong>Location Data:</strong> Parking location data and vehicle movement within our facilities.</li>
            <li><strong>Payment Information:</strong> Payment method details and transaction history.</li>
            <li><strong>Usage Data:</strong> Information about how you use our parking facilities and mobile application.</li>
            <li><strong>Device Information:</strong> Device type, operating system, and mobile application usage data.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <Database className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p>Your data helps us provide and improve our services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Delivery:</strong> Managing parking reservations and payments.</li>
            <li><strong>AI Analytics:</strong> Improving parking efficiency and user experience.</li>
            <li><strong>Communication:</strong> Sending important updates and parking notifications.</li>
            <li><strong>Security:</strong> Preventing fraud and ensuring facility security.</li>
            <li><strong>Optimization:</strong> Enhancing our services based on usage patterns.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Third-Party Services',
      icon: <Share2 className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p>We share data with trusted partners for specific purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Payment Processors:</strong> For secure transaction processing.</li>
            <li><strong>Cloud Services:</strong> For secure data storage and processing.</li>
            <li><strong>Analytics Partners:</strong> To improve our services (anonymized data only).</li>
            <li><strong>Legal Compliance:</strong> When required by law or regulation.</li>
          </ul>
          <p>We never sell your personal data to third parties.</p>
        </div>
      )
    },
    {
      id: 'data-protection',
      title: 'How We Protect Your Data',
      icon: <Lock className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p>We implement robust security measures:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encryption:</strong> All data is encrypted in transit and at rest.</li>
            <li><strong>Access Controls:</strong> Strict access policies and authentication.</li>
            <li><strong>Regular Audits:</strong> Periodic security assessments and updates.</li>
            <li><strong>Data Centers:</strong> Use of secure, certified data centers.</li>
            <li><strong>Employee Training:</strong> Regular security awareness training.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'user-rights',
      title: 'User Rights & Data Deletion',
      icon: <UserX className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p>You have control over your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal data.</li>
            <li><strong>Correction:</strong> Update incorrect information.</li>
            <li><strong>Deletion:</strong> Request removal of your data.</li>
            <li><strong>Portability:</strong> Transfer your data to another service.</li>
            <li><strong>Opt-out:</strong> Control marketing communications.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact & Complaints',
      icon: <Mail className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p>For privacy-related inquiries:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Privacy Officer:</strong> privacy@parksmartindia.com</li>
            <li><strong>Support Team:</strong> support@parksmartindia.com</li>
            <li><strong>Phone:</strong> +91-98765-43210</li>
            <li><strong>Address:</strong> 123 Tech Park, Bengaluru, Karnataka 560001</li>
          </ul>
          <p>We aim to respond to all inquiries within 48 hours.</p>
        </div>
      )
    }
  ];

  return (
    <>
      <SEOHead
        title="Privacy Policy - ParkSmart India"
        description="Learn how ParkSmart India protects your privacy and manages your data. Read our comprehensive privacy policy for smart parking solutions."
        canonicalUrl="https://parksmartindia.com/privacy-policy"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl mb-4">
                Your privacy is our priority
              </p>
              <p className="text-gray-200">
                Last updated: March 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="section">
          <div className="container max-w-4xl">
            <div className="space-y-6">
              {sections.map((section) => (
                <AnimatedSection
                  key={section.id}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-500">
                        {section.icon}
                      </div>
                      <h2 className="text-xl font-bold">{section.title}</h2>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedSection === section.id && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t">
                        {section.content}
                      </div>
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Have questions about our privacy practices?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/terms-of-service"
                  className="btn btn-outline"
                >
                  Read Terms of Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
};

export default PrivacyPolicy;