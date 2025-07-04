import React from 'react';
import { 
  Shield, 
  Users, 
  Award, 
  Target,
  Heart,
  Globe,
  Zap,
  CheckCircle,
  Star,
  TrendingUp,
  Code,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Software Products', value: '500+', icon: <Code className="h-6 w-6" /> },
    { label: 'Happy Customers', value: '10K+', icon: <Users className="h-6 w-6" /> },
    { label: 'Countries Served', value: '50+', icon: <Globe className="h-6 w-6" /> },
    { label: 'Years Experience', value: '5+', icon: <Award className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-sky-600 dark:text-sky-400" />,
      title: 'Security First',
      description: 'Every software solution we offer is thoroughly tested and verified for security vulnerabilities to protect your business.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: 'Customer Focused',
      description: 'Our customers are at the heart of everything we do. We listen, adapt, and deliver solutions that truly meet your needs.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      title: 'Innovation Driven',
      description: 'We constantly seek out the latest and most innovative software solutions to keep you ahead of the competition.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: 'Quality Assured',
      description: 'Every product in our catalog meets our strict quality standards and comes with comprehensive support.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Perera',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Visionary leader with 15+ years in software industry'
    },
    {
      name: 'Priya Silva',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Technical expert specializing in enterprise solutions'
    },
    {
      name: 'Amal Fernando',
      role: 'Head of Sales',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Customer relationship specialist with proven track record'
    },
    {
      name: 'Nisha Jayawardena',
      role: 'Head of Support',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Dedicated to ensuring exceptional customer experience'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Ceylon Software Hub was established with a vision to democratize access to premium software solutions.'
    },
    {
      year: '2020',
      title: 'First 1000 Customers',
      description: 'Reached our first major milestone of serving 1000 satisfied customers across various industries.'
    },
    {
      year: '2021',
      title: 'International Expansion',
      description: 'Expanded our services globally, now serving customers in over 50 countries worldwide.'
    },
    {
      year: '2022',
      title: 'Partnership Program',
      description: 'Launched our partner program, collaborating with leading software vendors and developers.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Integrated AI-powered recommendations and support systems to enhance customer experience.'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Became the leading software marketplace in South Asia with 10,000+ active customers.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
                {' '}Ceylon Software Hub
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to make premium software accessible to everyone. From startups to enterprises, 
              we provide the tools you need to succeed in the digital world.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-200 dark:bg-sky-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Our Mission & Vision
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-100 dark:bg-sky-900/20 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      To democratize access to premium software solutions by providing a secure, 
                      reliable, and user-friendly marketplace where businesses and individuals can 
                      find the tools they need to thrive in the digital age.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      To become the world's most trusted software marketplace, known for our 
                      commitment to quality, security, and exceptional customer service. We envision 
                      a future where every business has access to the software they need to succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape how we interact with our customers, 
              partners, and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts is passionate about technology and dedicated to 
              helping you find the perfect software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sky-600 dark:text-sky-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a small startup to a leading software marketplace, here's how we've grown 
              and evolved over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-600 to-emerald-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-sky-600 rounded-full"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Whether you're looking for software solutions or want to partner with us, 
            we'd love to hear from you and explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;