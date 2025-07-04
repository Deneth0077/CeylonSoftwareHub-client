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
      icon: <Shield className="w-8 h-8 text-sky-600 dark:text-sky-400" />,
      title: 'Secure Software',
      description: 'All software is tested and verified for security and performance.'
    },
    {
      icon: <Download className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Instant Download',
      description: 'Get your software immediately after purchase with secure download links.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: '24/7 Support',
      description: 'Our dedicated support team is always ready to help you.'
    },
    {
      icon: <Lock className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
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
      <section className="relative px-4 py-20 bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl dark:text-white">
              Premium Software
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
                {' '}Solutions
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Discover, purchase, and download the best software solutions for your business and personal needs. 
              Quality guaranteed with instant access.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
              <Link
                to="/products"
                className="flex items-center px-8 py-4 space-x-2 font-semibold text-white bg-sky-600 rounded-xl transition-all duration-300 transform group hover:bg-sky-700 hover:scale-105"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/register"
                className="px-8 py-4 font-semibold text-sky-600 rounded-xl border-2 border-sky-600 transition-all duration-300 dark:text-sky-400 hover:bg-sky-600 hover:text-white"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute left-10 top-20 w-20 h-20 bg-sky-200 rounded-full opacity-20 animate-pulse dark:bg-sky-800"></div>
        <div className="absolute right-10 bottom-20 w-32 h-32 bg-emerald-200 rounded-full opacity-20 delay-1000 animate-pulse dark:bg-emerald-800"></div>
      </section>

      {/* Shop By Categories Section */}
      <section className="px-4 py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-bold text-left text-gray-900 md:text-4xl dark:text-white">
            Shop By Categories
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {/* Productivity */}
            <Link to="/products?category=productivity" className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow transition-all dark:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
              <img src="/images/categories/productivity.png" alt="Productivity" className="object-contain mb-4 h-24" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Productivity</div>
                <div className="text-sm text-gray-500">12 Sub Categories</div>
              </div>
            </Link>
            {/* Development */}
            <Link to="/products?category=development" className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow transition-all dark:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
              <img src="/images/categories/development.png" alt="Development" className="object-contain mb-4 h-24" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Development</div>
                <div className="text-sm text-gray-500">15 Sub Categories</div>
              </div>
            </Link>
            {/* Design */}
            <Link to="/products?category=design" className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow transition-all dark:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
              <img src="/images/categories/design.png" alt="Design" className="object-contain mb-4 h-24" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Design</div>
                <div className="text-sm text-gray-500">8 Sub Categories</div>
              </div>
            </Link>
            {/* Security */}
            <Link to="/products?category=security" className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow transition-all dark:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
              <img src="/images/categories/security.png" alt="Security" className="object-contain mb-4 h-24" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Security</div>
                <div className="text-sm text-gray-500">6 Sub Categories</div>
              </div>
            </Link>
            {/* Games */}
            <Link to="/products?category=games" className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow transition-all dark:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
              <img src="/images/categories/games.png" alt="Games" className="object-contain mb-4 h-24" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Games</div>
                <div className="text-sm text-gray-500">10 Sub Categories</div>
              </div>
            </Link>
            {/* Utility */}
            <Link to="/products?category=utility" className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow transition-all dark:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
              <img src="/images/categories/utility.png" alt="Utility" className="object-contain mb-4 h-24" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Utility</div>
                <div className="text-sm text-gray-500">7 Sub Categories</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Why Choose Ceylon Software Hub?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              We provide the best software solutions with unmatched quality and service.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl transition-all duration-300 transform dark:bg-gray-700 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-sky-600 to-emerald-600">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 text-center md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="mb-2 text-4xl font-bold md:text-5xl">
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
      <section className="px-4 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our most popular software categories
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: 'Productivity', icon: <Zap className="w-12 h-12" />, count: '150+' },
              { name: 'Development', icon: <Shield className="w-12 h-12" />, count: '200+' },
              { name: 'Design', icon: <Star className="w-12 h-12" />, count: '100+' }
            ].map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 transform group dark:bg-gray-800 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="mb-4 text-sky-600 transition-transform duration-300 dark:text-sky-400 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
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
      <section className="px-4 py-20 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied customers and discover premium software solutions today.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white bg-gradient-to-r from-sky-600 to-emerald-600 rounded-xl transition-all duration-300 transform hover:from-sky-700 hover:to-emerald-700 hover:scale-105"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-sky-600 rounded-xl border-2 border-sky-600 transition-all duration-300 dark:text-sky-400 hover:bg-sky-600 hover:text-white"
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