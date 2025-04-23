import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  HelpCircle, 
  ArrowRight,
  Calculator
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [parkingSpaces, setParkingSpaces] = useState(100);
  const [occupancyRate, setOccupancyRate] = useState(70);
  const [hourlyRate, setHourlyRate] = useState(50);
  
  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small parking lots',
      monthlyPrice: 999,
      yearlyPrice: 899 * 12,
      features: [
        { name: 'Up to 100 parking spaces', included: true },
        { name: 'IoT sensors & basic hardware', included: true },
        { name: 'Mobile app for users', included: true },
        { name: 'Basic analytics dashboard', included: true },
        { name: 'Email support', included: true },
        { name: 'ANPR integration', included: false },
        { name: 'Dynamic pricing', included: false },
        { name: 'API access', included: false },
      ],
    },
    {
      name: 'Standard',
      description: 'Ideal for medium-sized facilities',
      monthlyPrice: 1999,
      yearlyPrice: 1799 * 12,
      popular: true,
      features: [
        { name: 'Up to 300 parking spaces', included: true },
        { name: 'IoT sensors & advanced hardware', included: true },
        { name: 'Mobile app for users', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Priority email & phone support', included: true },
        { name: 'ANPR integration', included: true },
        { name: 'Dynamic pricing', included: true },
        { name: 'API access', included: false },
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large parking facilities',
      monthlyPrice: 3999,
      yearlyPrice: 3599 * 12,
      features: [
        { name: 'Unlimited parking spaces', included: true },
        { name: 'IoT sensors & premium hardware', included: true },
        { name: 'Custom mobile app', included: true },
        { name: 'Enterprise analytics dashboard', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'ANPR integration', included: true },
        { name: 'Dynamic pricing', included: true },
        { name: 'API access', included: true },
      ],
    },
  ];

  // Calculate ROI
  const calculateMonthlyRevenue = () => {
    const dailyRevenue = (parkingSpaces * (occupancyRate / 100) * hourlyRate * 8);
    const monthlyRevenue = dailyRevenue * 30;
    return monthlyRevenue;
  };

  const calculateROI = () => {
    const currentMonthlyRevenue = calculateMonthlyRevenue();
    const improvedOccupancy = Math.min(occupancyRate + 15, 100);
    const improvedMonthlyRevenue = (parkingSpaces * (improvedOccupancy / 100) * hourlyRate * 8) * 30;
    const monthlyIncrease = improvedMonthlyRevenue - currentMonthlyRevenue;
    return {
      currentRevenue: currentMonthlyRevenue,
      improvedRevenue: improvedMonthlyRevenue,
      monthlyIncrease,
      yearlyIncrease: monthlyIncrease * 12,
    };
  };

  const roi = calculateROI();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <SEOHead
        title="Smart Parking Solutions Pricing - ezParks"
        description="View ezParks transparent pricing for AI-powered parking solutions. Calculate ROI and choose the perfect plan for your parking facility."
        canonicalUrl="https://ezparks.com/pricing"
      />
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl mb-8">
                Choose the plan that fits your parking facility needs
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="section">
          <div className="container">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                <button
                  className={`px-6 py-2 rounded-md ${
                    billingCycle === 'monthly'
                      ? 'bg-white shadow-md text-primary-500'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-md ${
                    billingCycle === 'yearly'
                      ? 'bg-white shadow-md text-primary-500'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setBillingCycle('yearly')}
                >
                  Yearly (10% off)
                </button>
              </div>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.2}
                  className={`card p-8 border ${
                    plan.popular
                      ? 'border-primary-500 relative'
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {formatCurrency(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12)}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-primary-500 mb-6">
                      Billed annually ({formatCurrency(plan.yearlyPrice)})
                    </p>
                  )}
                  
                  <Link
                    to="/contact"
                    className={`btn w-full mb-8 ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-outline'
                    }`}
                  >
                    Get Started
                  </Link>
                  
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? '' : 'text-gray-500'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="section bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="ROI Calculator" 
              subtitle="See how ParkSmart can increase your parking revenue"
            />
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Calculator className="h-8 w-8 text-primary-500 mr-3" />
                    <h3 className="text-2xl font-bold">Estimate Your Returns</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Parking Spaces
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        value={parkingSpaces}
                        onChange={(e) => setParkingSpaces(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>10</span>
                        <span>{parkingSpaces}</span>
                        <span>500</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Occupancy Rate (%)
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={occupancyRate}
                        onChange={(e) => setOccupancyRate(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>10%</span>
                        <span>{occupancyRate}%</span>
                        <span>90%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hourly Parking Rate (₹)
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="200"
                        step="10"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹20</span>
                        <span>₹{hourlyRate}</span>
                        <span>₹200</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <h3 className="text-2xl font-bold mb-6">Your Estimated Returns</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Current Monthly Revenue</p>
                      <p className="text-2xl font-bold">{formatCurrency(roi.currentRevenue)}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Projected Monthly Revenue with ezParks</p>
                      <p className="text-2xl font-bold text-primary-500">{formatCurrency(roi.improvedRevenue)}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">Monthly Increase</p>
                        <p className="font-bold text-green-500">{formatCurrency(roi.monthlyIncrease)}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium">Yearly Increase</p>
                        <p className="font-bold text-green-500">{formatCurrency(roi.yearlyIncrease)}</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                      <p className="text-primary-800">
                        <span className="font-bold">Note:</span> This calculator assumes an average 15% increase in occupancy rate and 8 hours of peak usage per day.
                      </p>
                    </div>
                    
                    <Link to="/contact" className="btn btn-primary w-full">
                      Get a Personalized Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about our pricing and services"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">What's included in the hardware setup?</h3>
                    <p className="text-gray-600">
                      Our hardware setup includes IoT sensors for each parking space, gateway devices for data transmission, ANPR cameras at entry/exit points, and digital displays. Installation and configuration are included in the pricing.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1} className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Are there any additional costs?</h3>
                    <p className="text-gray-600">
                      The monthly/yearly subscription covers hardware maintenance, software updates, and standard support. Additional costs may apply for custom integrations, premium support packages, or hardware replacements due to damage.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Can I upgrade my plan later?</h3>
                    <p className="text-gray-600">
                      Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining subscription period. Downgrading is available at the end of your billing cycle.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Do you offer custom solutions?</h3>
                    <p className="text-gray-600">
                      Yes, we offer custom solutions for unique parking facilities or specific requirements. Contact our sales team for a personalized quote based on your specific needs.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                    <p className="text-gray-600">
                      We accept all major credit cards, bank transfers, and UPI payments. For enterprise plans, we can also accommodate purchase orders and invoice-based payments.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="card p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Is there a contract or minimum commitment?</h3>
                    <p className="text-gray-600">
                      Monthly plans have no minimum commitment and can be canceled anytime. Annual plans require a 12-month commitment but offer a 10% discount. All plans include a 30-day money-back guarantee.
                    </p>
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
              Contact us today for a free consultation and personalized quote.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;