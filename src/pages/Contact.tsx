import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';

interface FAQCategory {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you shortly.',
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const faqCategories: FAQCategory[] = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is ezParks, and how does it improve parking?",
          answer: "ezParks is an AI and IoT-powered smart parking solution that transforms traditional parking into an efficient, automated system. We use sensors, cameras, and mobile apps to help users easily find, book, and pay for parking spaces while helping facility operators optimize their operations."
        },
        {
          question: "Is ezParks available in my city?",
          answer: "We currently operate in major cities across India including Bengaluru, Mumbai, Delhi NCR, Chennai, and Hyderabad. We're rapidly expanding to other cities - contact us to check availability in your area."
        },
        {
          question: "Do I need to download an app to use ezParks?",
          answer: "Yes, downloading our mobile app provides the best experience with features like real-time availability, contactless entry/exit, and digital payments. However, you can also use our web interface for basic functionalities."
        }
      ]
    },
    {
      title: "Parking & Reservations",
      questions: [
        {
          question: "How do I know if a parking spot is available before arriving?",
          answer: "Our app shows real-time availability of parking spots. You can check current occupancy, reserve a spot in advance, and get turn-by-turn navigation to your designated parking space."
        },
        {
          question: "Can I extend my parking time after booking?",
          answer: "Yes, you can easily extend your parking duration through the app as long as the spot isn't reserved by another user. You'll receive notifications when your parking time is about to expire."
        },
        {
          question: "What if someone parks in my reserved spot?",
          answer: "Our system monitors all spots continuously. If your reserved spot is occupied, you'll be automatically assigned the nearest available spot and compensated with extra parking time."
        },
        {
          question: "Do I need a physical parking ticket or pass?",
          answer: "No, ezParks is completely digital. Our ANPR system recognizes your vehicle, or you can use the QR code in the app for entry/exit. No physical tickets are needed."
        },
        {
          question: "Is there a penalty for overstaying my parking time?",
          answer: "Yes, additional charges apply for exceeding your booked duration. You'll receive notifications before your time expires to help avoid extra charges."
        }
      ]
    },
    {
      title: "Payments & Billing",
      questions: [
        {
          question: "What payment methods are supported?",
          answer: "We accept multiple payment methods including UPI (Google Pay, PhonePe, Paytm), FASTag, credit/debit cards, net banking, and digital wallets. Corporate users can opt for monthly billing."
        },
        {
          question: "Are there any hidden charges or service fees?",
          answer: "No hidden charges. Our pricing is transparent and includes all applicable taxes and service charges. You can view the complete cost breakdown before confirming your booking."
        },
        {
          question: "How do I get a refund if I'm charged incorrectly?",
          answer: "Contact our support team with your booking details. We investigate all refund requests within 24 hours and process valid refunds within 5-7 business days."
        },
        {
          question: "Can I link multiple vehicles to one account?",
          answer: "Yes, you can add multiple vehicles to your account and manage them all through a single login. Each vehicle can have its own payment method and parking preferences."
        },
        {
          question: "How does the dynamic pricing model work?",
          answer: "Our AI analyzes real-time demand, historical data, and events to optimize pricing. Rates may vary based on location, time of day, and occupancy levels to ensure optimal space utilization."
        }
      ]
    },
    {
      title: "Technical & Security",
      questions: [
        {
          question: "How does ezParks ensure my parking spot is reserved?",
          answer: "We use IoT sensors and AI monitoring to track spot occupancy in real-time. Reserved spots are continuously monitored, and our system automatically manages any conflicts or unauthorized parking."
        },
        {
          question: "My number plate is not recognized—what should I do?",
          answer: "Use the QR code in your app as a backup. You can also update your vehicle details in the app settings or contact our 24/7 support for immediate assistance."
        },
        {
          question: "What happens if the sensor or camera system fails?",
          answer: "We have multiple backup systems in place. If any component fails, our on-site staff is automatically notified and can manage access manually while maintaining digital records."
        },
        {
          question: "Does ezParks share my personal data with third parties?",
          answer: "We strictly follow data protection regulations and never share personal data without consent. Only aggregated, anonymized data is used for analytics and improvements."
        },
        {
          question: "How secure is my payment and vehicle information?",
          answer: "All data is encrypted using bank-grade security protocols. We're PCI-DSS compliant and regularly undergo security audits to ensure data protection."
        }
      ]
    },
    {
      title: "Business & Partnerships",
      questions: [
        {
          question: "How can I integrate ezParks into my parking facility?",
          answer: "Contact our business team for a consultation. We'll assess your facility, provide a custom solution proposal, and handle the entire implementation process."
        },
        {
          question: "What are the installation and maintenance costs?",
          answer: "Costs vary based on facility size and requirements. We offer flexible pricing models including revenue sharing options. Contact us for a detailed quote."
        },
        {
          question: "How can ezParks increase my parking revenue?",
          answer: "Our system typically increases revenue by 25-30% through optimized space utilization, reduced operational costs, dynamic pricing, and improved user experience."
        },
        {
          question: "Do you offer API integration for third-party apps?",
          answer: "Yes, we provide secure APIs for integration with facility management systems, payment platforms, and other business applications."
        },
        {
          question: "Who should I contact for a partnership inquiry?",
          answer: "Email partners@ezparks.com or use our contact form. Our business development team will respond within 24 hours to discuss partnership opportunities."
        }
      ]
    }
  ];

  const filteredFAQs = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  return (
    <>
      <SEOHead
        title="Contact ezParks - Get Smart Parking Solutions"
        description="Contact ezParks for AI-powered parking solutions. Get a free demo of our smart parking system and transform your parking operations today."
        canonicalUrl="https://ezparks.com/contact"
      />
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl mb-8">
                Have questions about our smart parking solutions? We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <AnimatedSection className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <Phone className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Our team is available Monday to Friday, 9am to 6pm</p>
                <a href="tel:+919876543210" className="text-primary-500 font-bold text-lg">
                  +91 98765 43210
                </a>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">We'll respond to your inquiry within 24 hours</p>
                <a href="mailto:info@ezparks.com" className="text-primary-500 font-bold text-lg">
                  info@ezparks.com
                </a>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <MapPin className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our headquarters in Bengaluru</p>
                <p className="text-primary-500 font-bold">
                  123 Tech Park, Whitefield<br />
                  Bengaluru, Karnataka 560066
                </p>
              </AnimatedSection>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <div className="card p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {formStatus.submitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                      {formStatus.message}
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-primary flex items-center justify-center"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
              
              {/* Map */}
              <AnimatedSection delay={0.3}>
                <div className="h-full">
                  <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                  <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932904105726!2d77.74959007473559!3d12.97455001681283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1329c73049b1%3A0x81a6b79f5fc6423a!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1682345678901!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-primary-100 transition-colors"
                      >
                        <Linkedin className="h-6 w-6 text-primary-500" />
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-primary-100 transition-colors"
                      >
                        <Facebook className="h-6 w-6 text-primary-500" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-primary-100 transition-colors"
                      >
                        <Twitter className="h-6 w-6 text-primary-500" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-primary-100 transition-colors"
                      >
                        <Instagram className="h-6 w-6 text-primary-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Find quick answers to common questions about our services"
            />

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {faqCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.title ? null : category.title
                  )}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.title
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {filteredFAQs
                  .filter(category => !selectedCategory || category.title === selectedCategory)
                  .map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                      {category.questions.map((faq) => (
                        <AnimatedSection
                          key={faq.question}
                          className="card overflow-hidden"
                        >
                          <button
                            onClick={() => setExpandedQuestion(
                              expandedQuestion === faq.question ? null : faq.question
                            )}
                            className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium pr-8">{faq.question}</span>
                            {expandedQuestion === faq.question ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          
                          {expandedQuestion === faq.question && (
                            <div className="px-6 pb-6">
                              <div className="pt-4 border-t text-gray-600">
                                {faq.answer}
                              </div>
                            </div>
                          )}
                        </AnimatedSection>
                      ))}
                    </div>
                  ))}
              </div>

              {/* Still Have Questions CTA */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help you with any specific queries you might have.
                </p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn btn-primary"
                >
                  Contact Our Support Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;