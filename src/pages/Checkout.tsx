import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Upload, Lock, CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';
import toast from 'react-hot-toast';

const CLOUDINARY_CLOUD_NAME = 'portfolio-mern';
const CLOUDINARY_UPLOAD_PRESET = 'unsigned_preset';

const Checkout: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer'>('card');
  const [loading, setLoading] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    street: user?.address?.street || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    zipCode: user?.address?.zipCode || '',
    country: user?.address?.country || ''
  });
  const [showSlipUpload, setShowSlipUpload] = useState(false);
  const [newOrderId, setNewOrderId] = useState<string | null>(null);
  const [slipUploading, setSlipUploading] = useState(false);
  const [slipUploadProgress, setSlipUploadProgress] = useState(0);
  const [slipUrl, setSlipUrl] = useState<string | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        items: items.map(item => ({
          productId: item._id,
          quantity: item.quantity
        })),
        paymentMethod,
        shippingAddress
      };

      const response = await api.post('/orders', orderData);
      const order = response.data.order;

      if (paymentMethod === 'card') {
        // Redirect to Stripe payment
        const paymentResponse = await api.post('/payments/create-payment-intent', {
          orderId: order._id
        });
        
        // In a real app, you would integrate with Stripe Elements here
        toast.success('Order created! Redirecting to payment...');
        navigate(`/orders`);
      } else {
        // Bank transfer - show slip upload section
        setShowSlipUpload(true);
        setNewOrderId(order._id);
        toast.success('Order created! Please upload your payment slip.');
      }

      clearCart();
    } catch (error: any) {
      console.error('Error creating order:', error);
      toast.error(error.response?.data?.message || 'Failed to create order');
    } finally {
      setLoading(false);
    }
  };

  // Cloudinary upload handler for payment slip
  const handleCloudinarySlipUpload = async (file: File) => {
    if (!newOrderId) return;
    setSlipUploading(true);
    setSlipUploadProgress(0);
    try {
      const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      const response = await api.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            setSlipUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          }
        },
      });
      const imageUrl = response.data.secure_url;
      setSlipUrl(imageUrl);
      // Send the Cloudinary URL to the backend
      await api.post(`/orders/${newOrderId}/payment-slip`, { url: imageUrl });
      toast.success('Payment slip uploaded successfully!');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to upload payment slip');
      console.error('Error uploading payment slip:', error);
    } finally {
      setSlipUploading(false);
      setSlipUploadProgress(0);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Checkout
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Complete your purchase securely
          </p>
        </div>

        {/* Slip Upload Section for Bank Transfer */}
        {showSlipUpload && newOrderId && (
          <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Upload Payment Slip</h2>
            <p className="text-blue-700 dark:text-blue-300 mb-4">After your bank transfer, upload your payment slip for verification. You can also do this later from your Orders page.</p>
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                id="slip-upload-input"
                className="hidden"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) handleCloudinarySlipUpload(file);
                }}
              />
              <label htmlFor="slip-upload-input" className="cursor-pointer bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mb-2">
                {slipUploading ? `Uploading... (${slipUploadProgress}%)` : 'Choose File'}
              </label>
              {slipUrl && (
                <div className="mt-4">
                  <img src={slipUrl} alt="Payment Slip" className="rounded-lg w-40 h-28 object-cover border" />
                  <p className="text-green-600 dark:text-green-400 mt-2 font-medium">Slip uploaded! You can now leave this page.</p>
                  <button
                    className="mt-4 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    onClick={() => navigate('/orders')}
                  >
                    Go to My Orders
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Billing Address
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.street}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    State/Province
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.state}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ZIP/Postal Code
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.zipCode}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.country}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Payment Method
              </h3>
              
              <div className="space-y-4">
                {/* Credit Card Option */}
                <label className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                    className="text-sky-600 focus:ring-sky-500"
                  />
                  <CreditCard className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Credit/Debit Card</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pay securely with Stripe</p>
                  </div>
                </label>

                {/* Bank Transfer Option */}
                <label className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'bank_transfer')}
                    className="text-sky-600 focus:ring-sky-500"
                  />
                  <Upload className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Bank Transfer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Upload payment slip for verification</p>
                  </div>
                </label>
              </div>

              {paymentMethod === 'bank_transfer' && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-400 mb-2">
                    Bank Transfer Details
                  </h4>
                  <div className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                    <p><strong>Bank:</strong> Ceylon Commercial Bank</p>
                    <p><strong>Account Name:</strong> Ceylon Software Hub</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>Swift Code:</strong> CCEYLKLX</p>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-400 mt-2">
                    After payment, you'll be able to upload your payment slip for verification.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    <span>Complete Order</span>
                  </>
                )}
              </button>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Secure & Encrypted</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;