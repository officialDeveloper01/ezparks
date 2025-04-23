import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  UserCheck, 
  CreditCard, 
  AlertTriangle, 
  XCircle, 
  Scale,
  RefreshCw,
  Mail,
  ArrowUp,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEOHead from '../components/SEOHead';

const TermsOfService = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FileText className="h-6 w-6" />,
      content: (
        <>
          <p className="mb-4">
            These Terms of Service ("Terms") govern your use of ParkSmart India's services, including our mobile application, website, and parking facilities. By using our services, you agree to these Terms.
          </p>
          <p>
            Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our services.
          </p>
        </>
      )
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <UserCheck className="h-6 w-6" />,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate and complete information when registering and using our services.</li>
          <li>Maintain the security of your account credentials.</li>
          <li>Park only in designated spaces and follow parking facility rules.</li>
          <li>Use the mobile application and payment systems responsibly.</li>
          <li>Report any unauthorized use of your account immediately.</li>
          <li>Comply with all applicable laws and regulations.</li>
        </ul>
      )
    },
    {
      id: 'payments',
      title: 'Payments & Transactions',
      icon: <CreditCard className="h-6 w-6" />,
      content: (
        <>
          <h4 className="font-bold mb-2">Payment Terms</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>All payments must be made through our approved payment methods.</li>
            <li>Parking fees are calculated based on actual usage time.</li>
            <li>Refunds are processed according to our refund policy.</li>
            <li>Users are responsible for all charges incurred under their account.</li>
          </ul>
          
          <h4 className="font-bold mb-2">Refund Policy</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds for unused parking time must be requested within 24 hours.</li>
            <li>Disputed charges will be investigated and resolved within 7 business days.</li>
            <li>Fraudulent transactions will result in immediate account suspension.</li>
          </ul>
        </>
      )
    },
    {
      id: 'prohibited',
      title: 'Prohibited Activities',
      icon: <AlertTriangle className="h-6 w-6" />,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Attempting to bypass or manipulate our parking systems.</li>
          <li>Using automated scripts or bots to interact with our services.</li>
          <li>Sharing account credentials with unauthorized users.</li>
          <li>Engaging in fraudulent activities or transactions.</li>
          <li>Damaging or tampering with parking facility equipment.</li>
          <li>Harassing other users or our staff.</li>
        </ul>
      )
    },
    {
      id: 'termination',
      title: 'Termination of Services',
      icon: <XCircle className="h-6 w-6" />,
      content: (
        <>
          <p className="mb-4">We may suspend or terminate your access to our services if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You violate these Terms or our policies.</li>
            <li>We detect fraudulent or suspicious activity.</li>
            <li>You fail to pay for services used.</li>
            <li>Required by law or regulation.</li>
          </ul>
        </>
      )
    },
    {
      id: 'disputes',
      title: 'Dispute Resolution',
      icon: <Scale className="h-6 w-6" />,
      content: (
        <>
          <p className="mb-4">In case of disputes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact our support team first to resolve issues amicably.</li>
            <li>Disputes will be resolved through mediation in Bengaluru, India.</li>
            <li>These Terms are governed by Indian law.</li>
            <li>Legal proceedings must be filed in Bengaluru courts.</li>
          </ul>
        </>
      )
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: <RefreshCw className="h-6 w-6" />,
      content: (
        <>
          <p className="mb-4">We may update these Terms from time to time:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Changes will be effective upon posting to our website.</li>
            <li>We will notify users of significant changes via email.</li>
            <li>Continued use of our services constitutes acceptance of updated Terms.</li>
          </ul>
        </>
      )
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: <Mail className="h-6 w-6" />,
      content: (
        <>
          <p className="mb-4">For any questions about these Terms:</p>
          <ul className="list-none space-y-2">
            <li><strong>Legal Department:</strong> legal@parksmartindia.com</li>
            <li><strong>Customer Support:</strong> support@parksmartindia.com</li>
            <li><strong>Phone:</strong> +91-98765-43210</li>
            <li><strong>Address:</strong> 123 Tech Park, Bengaluru, Karnataka 560001</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <SEOHead
        title="Terms of Service - ParkSmart India"
        description="Read ParkSmart India's Terms of Service for our smart parking solutions. Understand your rights and responsibilities when using our services."
        canonicalUrl="https://parksmartindia.com/terms-of-service"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <FileText className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl mb-4">
                Please read these terms carefully
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
            <div className="space-y-8">
              {sections.map((section, index) => (
                <AnimatedSection
                  key={section.id}
                  delay={index * 0.1}
                  className="card p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-secondary-100 p-3 rounded-full text-secondary-500">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  <div className="text-gray-600">
                    {section.content}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Have questions about our terms?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/privacy-policy"
                  className="btn btn-outline"
                >
                  Read Privacy Policy
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
            className="fixed bottom-8 right-8 bg-secondary-500 text-white p-3 rounded-full shadow-lg hover:bg-secondary-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
};

export default TermsOfService;