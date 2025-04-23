import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  BarChart3, 
  CreditCard, 
  Camera, 
  Smartphone, 
  ArrowRight 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';

const Solutions = () => {
  return (
    <>
      <SEOHead
        title="AI & IoT Parking Management Solutions"
        description="Discover ParkSmart's comprehensive smart parking solutions featuring IoT sensors, AI analytics, and digital payments. Transform your parking operations with our innovative technology."
        canonicalUrl="https://parksmartindia.com/solutions"
      />
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Parking Solutions
              </h1>
              <p className="text-xl mb-8">
                Comprehensive, AI-powered parking management systems for modern cities and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Smart Parking System */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <img 
                  src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                  alt="Smart Parking System" 
                  className="rounded-xl shadow-lg"
                />
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl font-bold mb-6">Smart Parking System</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive parking management system uses IoT sensors, AI analytics, and mobile technology to transform parking operations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Car className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">IoT-based Slot Detection</h3>
                      <p className="text-gray-600">Ultrasonic sensors detect vehicle presence with 99.8% accuracy, providing real-time occupancy data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Smartphone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Real-time Tracking</h3>
                      <p className="text-gray-600">Monitor parking availability, duration, and violations in real-time through our cloud platform.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Camera className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">ANPR Cameras</h3>
                      <p className="text-gray-600">Automatic Number Plate Recognition for seamless entry/exit and enhanced security.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Dashboard & Analytics */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Dashboard & Analytics</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI-powered analytics dashboard provides comprehensive insights to optimize parking operations and maximize revenue.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-100 p-3 rounded-full">
                      <BarChart3 className="h-6 w-6 text-secondary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Occupancy Analytics</h3>
                      <p className="text-gray-600">Track usage patterns, peak hours, and average parking duration to optimize space allocation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-100 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-secondary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Revenue Tracking</h3>
                      <p className="text-gray-600">Monitor earnings, payment methods, and financial performance with detailed reports.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="ParkSmart Dashboard Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                  alt="Analytics Dashboard" 
                  className="rounded-xl shadow-lg"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Seamless Payments */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                  alt="Digital Payments" 
                  className="rounded-xl shadow-lg"
                />
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl font-bold mb-6">Seamless Payments</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Multiple payment options for a frictionless parking experience, reducing queues and improving customer satisfaction.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">QR Code Payments</h3>
                      <p className="text-gray-600">Scan and pay using popular UPI apps like Google Pay, PhonePe, and Paytm.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Car className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">FASTag Integration</h3>
                      <p className="text-gray-600">Automatic deduction from FASTag for completely contactless entry and exit.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Smartphone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Mobile App Payments</h3>
                      <p className="text-gray-600">Pay through our dedicated app with saved payment methods for regular users.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your parking operations?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses across India that have revolutionized their parking management with ParkSmart.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Solutions;