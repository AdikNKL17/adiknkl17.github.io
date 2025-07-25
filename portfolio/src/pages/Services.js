import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Palette, Smartphone, Monitor, Grid, Users, Lightbulb, Target, Zap } from 'lucide-react';
import { services } from '../data/projects';

const Services = () => {
  const iconMap = {
    Palette,
    Smartphone,
    Monitor,
    Grid
  };

  const processSteps = [
    {
      icon: Users,
      title: 'Discovery & Research',
      description: 'We start by understanding your business goals, target audience, and market landscape through comprehensive research and stakeholder interviews.',
      duration: '1-2 weeks'
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Planning',
      description: 'Based on research insights, we develop a design strategy that aligns with your business objectives and user needs.',
      duration: '1 week'
    },
    {
      icon: Target,
      title: 'Design & Prototyping',
      description: 'Creating wireframes, high-fidelity designs, and interactive prototypes that bring your vision to life.',
      duration: '2-4 weeks'
    },
    {
      icon: Zap,
      title: 'Testing & Refinement',
      description: 'User testing and iterative improvements ensure the final design meets both user expectations and business goals.',
      duration: '1-2 weeks'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$2,500',
      description: 'Perfect for small projects and startups',
      features: [
        'Up to 5 pages/screens',
        'Mobile responsive design',
        'Basic user research',
        '2 rounds of revisions',
        'Style guide included',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages/screens',
        'Mobile & tablet responsive',
        'Comprehensive user research',
        'Interactive prototypes',
        '4 rounds of revisions',
        'Complete design system',
        'Priority support',
        'User testing session'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages/screens',
        'Multi-platform design',
        'Advanced user research',
        'Multiple prototypes',
        'Unlimited revisions',
        'Complete design system',
        'Dedicated support',
        'Multiple testing sessions',
        'Team training included'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Design Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            I offer comprehensive design services that help businesses create exceptional 
            digital experiences. From initial concept to final implementation, I'll guide 
            you through every step of the design process.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized design services tailored to meet your unique business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="card p-8 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check size={16} className="text-primary-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project outcomes and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-8 text-center h-full">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-sm text-primary-600 font-medium">{step.duration}</div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing that scales with your project needs. All packages include 
              ongoing support and consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card p-8 relative ${
                  pkg.popular ? 'ring-2 ring-primary-600 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check size={16} className="text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full justify-center ${
                    pkg.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about my design services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary depending on scope and complexity. A simple website design 
                might take 2-4 weeks, while a comprehensive mobile app design could take 6-12 weeks. 
                I always provide detailed timelines during the initial consultation.
              </p>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you work with developers?
              </h3>
              <p className="text-gray-600">
                Yes! I regularly collaborate with development teams and can provide detailed design 
                specifications, assets, and ongoing support during the development phase. I also 
                have a network of trusted developers I can recommend if needed.
              </p>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What's included in the design deliverables?
              </h3>
              <p className="text-gray-600">
                Deliverables typically include high-fidelity designs, interactive prototypes, 
                style guides, design systems, and all necessary assets for development. The exact 
                deliverables depend on your chosen package and project requirements.
              </p>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you offer ongoing support after project completion?
              </h3>
              <p className="text-gray-600">
                Absolutely! I provide 30 days of complimentary support after project completion. 
                For ongoing design needs, I offer monthly retainer packages and can discuss 
                long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how my design services can help you 
            achieve your business goals. I'm excited to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;