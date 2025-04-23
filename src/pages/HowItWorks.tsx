import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Smartphone, 
  CreditCard, 
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <Car className="h-16 w-16 text-primary-500" />,
      title: "IoT Sensors Detect Empty Slots",
      description: "Our advanced ultrasonic sensors installed in each parking slot detect vehicle presence with 99.8% accuracy. The data is transmitted in real-time to our cloud platform.",
      image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      icon: <Smartphone className="h-16 w-16 text-primary-500" />,
      title: "Users Check Availability on App",
      description: "Drivers use our mobile app to check real-time parking availability, reserve spots, and get directions to the nearest available parking space.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      icon: <CreditCard className="h-16 w-16 text-primary-500" />,
      title: "Digital Entry & Auto-Payments",
      description: "ANPR cameras recognize vehicle number plates for seamless entry. Payments are processed automatically through FASTag, QR codes, or the mobile app.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      icon: <BarChart3 className="h-16 w-16 text-primary-500" />,
      title: "Business Dashboard Optimizes Revenue",
      description: "Parking operators access a comprehensive dashboard with analytics on occupancy, revenue, and user behavior to optimize operations and pricing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How ParkSmart Works
            </h1>
            <p className="text-xl mb-8">
              A seamless end-to-end solution for modern parking management
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Our Smart Parking Process" 
            subtitle="A comprehensive, end-to-end solution that transforms parking management"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.2} 
                className={`card p-6 text-center cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'border-2 border-primary-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Interactive Carousel */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  {steps[activeStep].icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {steps[activeStep].title}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {steps[activeStep].description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={prevStep}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-primary-500" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          activeStep === index ? 'bg-primary-500 w-6' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextStep}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-primary-500" />
                  </button>
                </div>
              </div>
              
              <div className="h-64 lg:h-auto">
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Technology Stack" 
            subtitle="Cutting-edge technologies powering our smart parking solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="card p-8">
              <h3 className="text-xl font-bold mb-4">IoT Infrastructure</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Ultrasonic sensors with 99.8% accuracy
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Low-power LoRaWAN network for data transmission
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Battery life of up to 5 years
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Weather-resistant hardware for outdoor use
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="card p-8">
              <h3 className="text-xl font-bold mb-4">AI & Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Machine learning for occupancy prediction
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Computer vision for ANPR and vehicle detection
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Predictive analytics for demand forecasting
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Real-time data processing and visualization
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="card p-8">
              <h3 className="text-xl font-bold mb-4">Mobile & Web Apps</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Cross-platform mobile apps (iOS & Android)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Real-time availability updates
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Secure payment gateway integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Responsive web dashboard for operators
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Implementation Process" 
            subtitle="A smooth, hassle-free deployment process from consultation to ongoing support"
          />
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <AnimatedSection className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-xl font-bold mb-2">1. Initial Consultation</h3>
                    <p className="text-gray-600">We assess your parking facility, understand your requirements, and propose a customized solution.</p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Consultation" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="text-xl font-bold mb-2">2. Site Survey & Planning</h3>
                    <p className="text-gray-600">Our engineers conduct a detailed site survey and create an implementation plan with timelines.</p>
                  </div>
                  <div className="md:pr-12 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Site Survey" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-xl font-bold mb-2">3. Installation & Setup</h3>
                    <p className="text-gray-600">Our team installs sensors, cameras, and other hardware components with minimal disruption to operations.</p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Installation" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.6} className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="text-xl font-bold mb-2">4. Training & Handover</h3>
                    <p className="text-gray-600">We provide comprehensive training to your staff and ensure a smooth transition to the new system.</p>
                  </div>
                  <div className="md:pr-12 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Training" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.8} className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-xl font-bold mb-2">5. Ongoing Support</h3>
                    <p className="text-gray-600">We provide 24/7 technical support, regular maintenance, and system updates to ensure optimal performance.</p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Support" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and see how ParkSmart can transform your parking operations.
          </p>
          <Link to="/contact" className="btn bg-white text-secondary-500 hover:bg-gray-100">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;