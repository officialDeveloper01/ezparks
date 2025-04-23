import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Car, 
  Smartphone, 
  CreditCard, 
  BarChart3, 
  Clock, 
  MapPin,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';

const Home = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-primary-500" />,
      title: 'IoT Sensors',
      description: 'Advanced sensors detect vehicle presence and monitor parking spaces in real-time.'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary-500" />,
      title: 'AI Analytics',
      description: 'Smart algorithms analyze parking patterns to optimize space utilization and revenue.'
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary-500" />,
      title: 'Digital Payments',
      description: 'Seamless payment options including QR codes, FASTag, and mobile wallets.'
    }
  ];

  const benefits = [
    {
      title: 'Revenue Optimization',
      description: 'Increase parking revenue by up to 30% through dynamic pricing and reduced operational costs.'
    },
    {
      title: 'Reduced Congestion',
      description: 'Cut traffic congestion by 40% with real-time availability information and guided parking.'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor occupancy, violations, and revenue in real-time through an intuitive dashboard.'
    }
  ];

  const testimonials = [
    {
      quote: "ezParks has transformed our mall's parking experience. Customer complaints have reduced by 60% and our parking revenue has increased by 25%.",
      author: "Rajiv Mehta",
      position: "Operations Director, Metropolis Mall"
    },
    {
      quote: "Implementing ezParks's solution in our corporate campus has significantly improved employee satisfaction and reduced the time spent finding parking spots.",
      author: "Priya Sharma",
      position: "Facility Manager, TechPark India"
    }
  ];

  const partners = [
    "Metropolis Mall",
    "TechPark India",
    "Bengaluru Municipal Corporation",
    "Chennai Smart City Ltd",
    "Hyderabad Airport"
  ];

  return (
    <>
      <SEOHead
        title="Smart Parking Solutions with AI & IoT Technology"
        description="Transform your parking operations with ezParks's AI-powered smart parking solutions. Leading provider of IoT parking systems in India for smart cities and businesses."
      />
      <div>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Smart City Parking" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>
          
          <div className="container relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Revolutionizing Parking with AI & IoT
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Smart parking solutions for modern cities and businesses. Reduce congestion, increase revenue, and enhance user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Get a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/solutions" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Our Smart Parking Services" 
              subtitle="Comprehensive solutions powered by cutting-edge technology to transform parking management"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.2} className="card p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why ezParks */}
        <section className="section">
          <div className="container">
            <SectionTitle 
              title="Why Choose ezParks?" 
              subtitle="Our innovative solutions deliver measurable results for cities and businesses"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.2} className="card p-8 border-t-4 border-primary-500">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary-500 text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your parking experience?</h2>
                <p className="text-xl text-primary-100">Join hundreds of satisfied clients across India.</p>
              </div>
              <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100 shadow-md hover:shadow-lg">
                Schedule a Free Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="What Our Clients Say" 
              subtitle="Hear from businesses and organizations that have transformed their parking operations"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 0.2} className="card p-8">
                  <div className="text-4xl text-primary-300 mb-4">"</div>
                  <p className="text-lg mb-6 italic text-gray-700">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="section">
          <div className="container">
            <SectionTitle 
              title="Trusted By" 
              subtitle="Leading organizations across India rely on our smart parking solutions"
            />
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map((partner, index) => (
                <AnimatedSection key={index} delay={index * 0.1} className="text-xl font-bold text-gray-500">
                  {partner}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Key Features" 
              subtitle="Comprehensive parking management solutions for modern businesses"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Real-time Occupancy</h3>
                  <p className="text-gray-600">Monitor parking availability in real-time with accurate sensors.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Automated Payments</h3>
                  <p className="text-gray-600">Contactless payment options for seamless transactions.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Dynamic Pricing</h3>
                  <p className="text-gray-600">Optimize revenue with demand-based pricing strategies.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">ANPR Integration</h3>
                  <p className="text-gray-600">Automatic number plate recognition for enhanced security.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Mobile App</h3>
                  <p className="text-gray-600">User-friendly app for finding and paying for parking.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600">Comprehensive insights and reports for data-driven decisions.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;