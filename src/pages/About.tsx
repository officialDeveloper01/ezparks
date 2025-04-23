import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Newspaper
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';

const About = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      bio: 'Former Smart City consultant with 15+ years of experience in urban mobility solutions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO',
      bio: 'IoT expert with a background in embedded systems and AI. Led technology teams at top tech companies.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Vikram Singh',
      position: 'COO',
      bio: 'Operations specialist with experience scaling startups across India. MBA from IIM Ahmedabad.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Ananya Patel',
      position: 'Head of Product',
      bio: 'Product leader with expertise in UX design and customer experience optimization.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const awards = [
    {
      title: 'Smart City Innovation Award 2024',
      organization: 'Urban Mobility Council of India',
      description: 'Recognized for innovative use of IoT in urban parking management.'
    },
    {
      title: 'Tech Startup of the Year 2023',
      organization: 'India Technology Forum',
      description: 'Awarded for outstanding contribution to smart city infrastructure.'
    },
    {
      title: 'Sustainability Excellence Award 2023',
      organization: 'Green Business Association',
      description: 'For reducing carbon emissions through efficient parking solutions.'
    }
  ];

  const mediaFeatures = [
    {
      publication: 'The Economic Times',
      title: 'ParkSmart Raises $5M to Expand Smart Parking Solutions',
      date: 'March 2024'
    },
    {
      publication: 'YourStory',
      title: 'How ParkSmart is Revolutionizing Urban Parking in India',
      date: 'January 2024'
    },
    {
      publication: 'Tech Today',
      title: 'ParkSmart: The AI-Powered Solution to India\'s Parking Woes',
      date: 'November 2023'
    }
  ];

  return (
    <>
      <SEOHead
        title="About ParkSmart India - Leading Smart Parking Provider"
        description="Learn about ParkSmart India's journey in revolutionizing parking management with AI and IoT solutions. Trusted by leading businesses and smart cities across India."
        canonicalUrl="https://parksmartindia.com/about"
      />
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About ParkSmart India
              </h1>
              <p className="text-xl mb-8">
                Transforming parking management with innovative technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                  alt="Modern Office Building" 
                  className="rounded-xl shadow-lg"
                />
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <Target className="h-8 w-8 text-primary-500 mr-3" />
                      <h2 className="text-3xl font-bold">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-600">
                      To revolutionize parking management in India through innovative technology solutions that reduce congestion, optimize revenue, and enhance user experience.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <Users className="h-8 w-8 text-primary-500 mr-3" />
                      <h2 className="text-3xl font-bold">Our Vision</h2>
                    </div>
                    <p className="text-lg text-gray-600">
                      To become the leading smart parking solution provider in Asia, creating smarter cities where finding and paying for parking is seamless, efficient, and stress-free.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-3">Our Values</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span><strong>Innovation:</strong> Constantly pushing the boundaries of what's possible in parking technology.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span><strong>Reliability:</strong> Building robust solutions that our clients can depend on 24/7.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span><strong>Sustainability:</strong> Creating eco-friendly solutions that reduce emissions and congestion.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span><strong>Customer-Centric:</strong> Putting our clients' needs at the center of everything we do.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Our Story" 
              subtitle="The journey of ParkSmart from idea to India's leading parking solution"
            />
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 text-lg text-gray-600">
                <AnimatedSection>
                  <p>
                    ParkSmart was founded in 2020 by Rajesh Kumar, a smart city consultant who experienced firsthand the challenges of urban parking in India's rapidly growing cities. After spending 45 minutes searching for parking in Mumbai's business district, Rajesh envisioned a technology solution that could transform the parking experience.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <p>
                    Starting with a small team of engineers and IoT experts, ParkSmart developed its first prototype in a Bengaluru tech incubator. The initial pilot at a shopping mall demonstrated a 40% reduction in parking search time and a 25% increase in parking revenue.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <p>
                    By 2022, ParkSmart had secured its first round of funding and expanded to 10 cities across India. Today, our solutions are deployed in over 50 cities, managing more than 100,000 parking spaces for malls, corporate campuses, hospitals, and municipal authorities.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection delay={0.6}>
                  <p>
                    Our team has grown to 120+ professionals across engineering, operations, sales, and customer support. We continue to innovate, with recent launches including FASTag integration, dynamic pricing algorithms, and advanced analytics for parking operators.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="container">
            <SectionTitle 
              title="Meet Our Leadership Team" 
              subtitle="The experts behind ParkSmart's innovative parking solutions"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1} className="card overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-500 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Awards & Recognition" 
              subtitle="Celebrating our achievements in innovation and excellence"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <AnimatedSection key={index} delay={index * 0.2} className="card p-8">
                  <Award className="h-12 w-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-primary-500 font-medium mb-3">{award.organization}</p>
                  <p className="text-gray-600">{award.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Media Mentions */}
        <section className="section">
          <div className="container">
            <SectionTitle 
              title="Media Mentions" 
              subtitle="ParkSmart in the news"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaFeatures.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.2} className="card p-8">
                  <Newspaper className="h-8 w-8 text-secondary-500 mb-4" />
                  <p className="text-sm text-gray-500 mb-2">{feature.publication} • {feature.date}</p>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <a href="#" className="text-secondary-500 font-medium flex items-center">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section bg-primary-500 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <AnimatedSection className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <p className="text-xl">Cities</p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
                <p className="text-xl">Parking Spaces</p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="text-xl">Clients</p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.6} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">5M+</div>
                <p className="text-xl">Monthly Users</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the ParkSmart Revolution</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Ready to transform your parking operations with cutting-edge technology? Contact us today to schedule a demo.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
               <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;