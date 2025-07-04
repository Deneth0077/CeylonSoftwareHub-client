import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Download, 
  Users, 
  Star,
  ArrowRight,
  Zap,
  Lock,
  Headphones
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-sky-600 dark:text-sky-400" />,
      title: 'Secure Software',
      description: 'All software is tested and verified for security and performance.'
    },
    {
      icon: <Download className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Instant Download',
      description: 'Get your software immediately after purchase with secure download links.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: '24/7 Support',
      description: 'Our dedicated support team is always ready to help you.'
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
      title: 'Licensed Software',
      description: 'All software comes with proper licensing and documentation.'
    }
  ];

  const stats = [
    { label: 'Software Products', value: '500+' },
    { label: 'Happy Customers', value: '10K+' },
    { label: 'Downloads', value: '50K+' },
    { label: 'Years Experience', value: '5+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Premium Software
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover, purchase, and download the best software solutions for your business and personal needs. 
              Quality guaranteed with instant access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="group bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register"
                className="border-2 border-sky-600 text-sky-600 dark:text-sky-400 hover:bg-sky-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-200 dark:bg-sky-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Ceylon Software Hub?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide the best software solutions with unmatched quality and service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-600 to-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-xl opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our most popular software categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Productivity', icon: <Zap className="h-12 w-12" />, count: '150+' },
              { name: 'Development', icon: <Shield className="h-12 w-12" />, count: '200+' },
              { name: 'Design', icon: <Star className="h-12 w-12" />, count: '100+' }
            ].map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-sky-600 dark:text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.count} products available
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of satisfied customers and discover premium software solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 border-2 border-sky-600 text-sky-600 dark:text-sky-400 hover:bg-sky-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;