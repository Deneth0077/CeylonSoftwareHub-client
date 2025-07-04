import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Download, 
  ShoppingCart, 
  Shield, 
  Monitor,
  HardDrive,
  Cpu,
  ArrowLeft,
  Check
} from 'lucide-react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: { url: string; alt: string }[];
  downloadUrl: string;
  systemRequirements: {
    os: string[];
    processor: string;
    memory: string;
    storage: string;
  };
  version: string;
  license: string;
  tags: string[];
  features: string[];
  rating: {
    average: number;
    count: number;
  };
  downloads: number;
  createdBy: { name: string };
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      toast.error('Product not found');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0]?.url || ''
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h2>
          <Link
            to="/products"
            className="text-sky-600 dark:text-sky-400 hover:underline"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
              <img
                src={product.images[selectedImage]?.url || `https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index 
                        ? 'border-sky-600 dark:border-sky-400' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-sky-100 dark:bg-sky-900/20 text-sky-800 dark:text-sky-400 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400">v{product.version}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(Math.round(product.rating.average))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">{product.downloads} downloads</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price and Purchase */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                    ${product.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    {product.license} license
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Secure Download</span>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
                Instant download after purchase
              </p>
            </div>

            {/* Features */}
            {product.features.length > 0 && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* System Requirements */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                System Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Monitor className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Operating System</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {product.systemRequirements.os.join(', ')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Cpu className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Processor</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {product.systemRequirements.processor}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <HardDrive className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Memory</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {product.systemRequirements.memory}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <HardDrive className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Storage</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {product.systemRequirements.storage}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;