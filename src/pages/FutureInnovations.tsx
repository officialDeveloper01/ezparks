import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Car, 
  Zap, 
  Link as LinkIcon,
  Calendar,
  Rocket,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';

const FutureInnovations = () => {
  const innovations = [
    {
      icon: <Brain className="h-12 w-12 text-primary-500" />,
      title: 'AI-Powered Predictive Parking 📊',
      description: 'Our advanced AI algorithms analyze historical data, traffic patterns, and events to predict parking availability before you arrive. Reserve your spot with confidence, knowing exactly where to park.',
      features: [
        'Real-time occupancy prediction with 95% accuracy',
        'Personalized parking recommendations based on user history',
        'Dynamic route optimization to available spaces',
        'Automated reservation system integrated with calendar apps'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    },
    {
      icon: <Car className="h-12 w-12 text-primary-500" />,
      title: 'Smart Valet Parking 🚘',
      description: 'Reimagining valet parking with AI-powered driver assignment and real-time vehicle tracking. Drop your car at designated points and track its location throughout your stay via our mobile app.',
      features: [
        'AI-optimized valet driver assignments',
        'Real-time vehicle location tracking',
        'Secure digital key management',
        'Automated retrieval requests with predictive timing'
      ],
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    },
    {
      icon: <Zap className="h-12 w-12 text-primary-500" />,
      title: 'EV Charging + Parking ⚡',
      description: 'Seamlessly integrate electric vehicle charging with parking. Our smart system identifies your vehicle, initiates charging automatically, and optimizes energy usage based on your planned stay duration.',
      features: [
        'Automatic EV detection and charging initiation',
        'Dynamic pricing based on energy demand and grid load',
        'Renewable energy integration with solar canopies',
        'Battery health monitoring and optimization'
      ],
      image: 'https://images.unsplash.com/photo-1558425281-b2e5c2dde42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    },
    {
      icon: <LinkIcon className="h-12 w-12 text-primary-500" />,
      title: 'Blockchain-Powered Parking Security 🔗',
      description: 'Utilizing blockchain technology to create tamper-proof transaction records and secure payment systems. Enhance transparency, reduce fraud, and enable new ownership models for parking assets.',
      features: [
        'Immutable transaction records for all parking sessions',
        'Decentralized identity verification for enhanced security',
        'Smart contracts for automated enforcement and payments',
        'Tokenized parking assets for fractional ownership'
      ],
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    }
  ];

  const roadmapItems = [
    {
      year: '2024',
      title: 'AI Predictive Parking Beta',
      description: 'Launch of our AI-powered parking prediction system in select cities, with machine learning algorithms that improve over time.',
      status: 'In Progress'
    },
    {
      year: '2025',
      title: 'Smart Valet System Rollout',
      description: 'Introduction of our revolutionary valet parking system with real-time tracking and automated driver assignment.',
      status: 'Planned'
    },
    {
      year: '2026',
      title: 'Integrated EV Charging Network',
      description: 'Deployment of smart EV charging stations across major cities, with dynamic pricing and renewable energy integration.',
      status: 'Planned'
    },
    {
      year: '2027',
      title: 'Blockchain Security Implementation',
      description: 'Full implementation of blockchain technology for secure transactions, smart contracts, and decentralized identity verification.',
      status: 'Planned'
    },
    {
      year: '2028',
      title: 'Autonomous Vehicle Integration',
      description: 'Complete ecosystem for autonomous vehicles, including self-parking capabilities and dedicated AV zones in parking facilities.',
      status: 'Vision'
    }
  ];

  return (
    <>
      <SEOHead
        title="Future of Smart Parking - AI, IoT & Blockchain Innovation"
        description="Explore ezParks's future innovations in smart parking, including AI prediction, EV charging integration, and blockchain security. Shape the future of urban mobility."
        canonicalUrl="https://ezparks.com/future-innovations"
      />
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Rocket className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future of Smart Parking 🚀
              </h1>
              <p className="text-xl mb-8">
                ezParks is committed to advancing urban mobility through cutting-edge innovations in AI, IoT, EV integration, and blockchain technology.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Overview */}
        <section className="section">
          <div className="container">
            <SectionTitle 
              title="Tomorrow's Parking Solutions, Today" 
              subtitle="Discover our upcoming technologies that will revolutionize the parking experience"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <AnimatedSection className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary-500 mr-3" />
                  <h2 className="text-2xl font-bold">Our Innovation Philosophy</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  At ezParks, we believe that the future of parking lies at the intersection of artificial intelligence, connected devices, and sustainable energy. Our R&D team is constantly pushing the boundaries of what's possible in urban mobility.
                </p>
                <p className="text-lg text-gray-600">
                  Each innovation we develop aims to solve real problems faced by cities, businesses, and drivers. By combining cutting-edge technology with practical applications, we're creating solutions that make parking smarter, more efficient, and environmentally friendly.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                  alt="Innovation Lab" 
                  className="rounded-xl shadow-lg h-full object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Innovation Cards */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Upcoming Innovations" 
              subtitle="Explore the groundbreaking technologies we're developing to transform parking management"
            />
            
            <div className="space-y-16">
              {innovations.map((innovation, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="bg-primary-100 p-4 rounded-full mr-4">
                            {innovation.icon}
                          </div>
                          <h3 className="text-2xl font-bold">{innovation.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-6">
                          {innovation.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          {innovation.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <Sparkles className="h-5 w-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="h-64 lg:h-auto">
                        <img 
                          src={innovation.image} 
                          alt={innovation.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="section">
          <div className="container">
            <SectionTitle 
              title="Innovation Roadmap" 
              subtitle="Our strategic plan for developing and deploying next-generation parking technologies"
            />
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform md:translate-x-0"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {roadmapItems.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.2} className="relative">
                    <div className="flex items-center absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                      <div className="bg-white p-1 rounded-full z-10">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                          item.status === 'In Progress' ? 'bg-primary-500' : 
                          item.status === 'Planned' ? 'bg-secondary-500' : 'bg-gray-400'
                        }`}>
                          <Calendar className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-12 md:ml-0">
                      <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <div className="text-sm font-medium text-primary-500 mb-1">{item.year}</div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-3">{item.description}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            item.status === 'In Progress' ? 'bg-primary-100 text-primary-700' : 
                            item.status === 'Planned' ? 'bg-secondary-100 text-secondary-700' : 
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className={index % 2 === 1 ? 'md:order-1' : ''}></div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Partnerships */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Research & Partnerships" 
              subtitle="Collaborating with leading institutions to accelerate innovation"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection className="card p-8">
                <h3 className="text-xl font-bold mb-4">Academic Collaborations</h3>
                <p className="text-gray-600 mb-6">
                  We're partnering with top engineering institutions like IIT Bombay and IISc Bangalore to research advanced AI algorithms for parking optimization and traffic flow prediction.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Academic Research" 
                    className="rounded-lg h-48 object-cover"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="card p-8">
                <h3 className="text-xl font-bold mb-4">Industry Alliances</h3>
                <p className="text-gray-600 mb-6">
                  Strategic partnerships with automotive manufacturers, EV charging networks, and smart city initiatives to create integrated mobility solutions for the future.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Industry Partnerships" 
                    className="rounded-lg h-48 object-cover"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="card p-8">
                <h3 className="text-xl font-bold mb-4">Government Initiatives</h3>
                <p className="text-gray-600 mb-6">
                  Working closely with Smart Cities Mission and urban development authorities to implement pilot projects and shape policies for future mobility infrastructure.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Government Initiatives" 
                    className="rounded-lg h-48 object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead with Smart Parking</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be among the first to implement our cutting-edge parking solutions and gain a competitive advantage in urban mobility.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Contact Us to Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default FutureInnovations;