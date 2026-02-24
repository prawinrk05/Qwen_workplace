import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      id: 1,
      name: "Smartphone X",
      description: "Latest model with advanced features",
      price: "699.99",
      icon: "📱"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      description: "Noise cancelling with premium sound",
      price: "199.99",
      icon: "🎧"
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Track fitness and stay connected",
      price: "299.99",
      icon: "⌚"
    },
    {
      id: 4,
      name: "Laptop Pro",
      description: "Powerful performance for professionals",
      price: "1299.99",
      icon: "💻"
    },
    {
      id: 5,
      name: "Camera DSLR",
      description: "Professional photography kit",
      price: "899.99",
      icon: "📷"
    },
    {
      id: 6,
      name: "Gaming Console",
      description: "Next-gen gaming experience",
      price: "499.99",
      icon: "🎮"
    },
    {
      id: 7,
      name: "VR Headset",
      description: "Immersive virtual reality",
      price: "399.99",
      icon: "👓"
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      description: "360° surround sound",
      price: "129.99",
      icon: "🔊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Discover Amazing <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Products</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl mb-8 text-gray-200 max-w-lg"
            >
              Shop the latest trends with our premium collection of products designed for you. Quality and style guaranteed.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <motion.div 
              className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden"
              whileHover={{ rotate: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-xl p-8 text-center z-10">
                <motion.div 
                  className="w-32 h-32 mx-auto bg-white/30 rounded-full flex items-center justify-center mb-4"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <span className="text-4xl">🛍️</span>
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Premium Collection
                </motion.h3>
                <motion.p 
                  className="mt-2 text-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Limited Edition Items
                </motion.p>
              </div>
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Products</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our handpicked selection of premium products
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Animated CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-pink-600/30 to-purple-600/30 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/20"
        >
          <motion.h3 
            className="text-4xl font-bold mb-4"
            animate={{ 
              backgroundPosition: ['0%', '100%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            style={{
              background: 'linear-gradient(90deg, #ff6b6b, #ffa500, #ff6b6b)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Special Offer Just For You!
          </motion.h3>
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get 25% off on your first purchase. Limited time offer!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            Claim Your Discount
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-16 border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">ModernShop</h4>
            <p className="text-gray-400">Premium shopping experience with cutting-edge technology.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'Products', 'About Us', 'Contact'].map((link) => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              {['Electronics', 'Fashion', 'Home & Kitchen', 'Sports'].map((category) => (
                <li key={category} className="hover:text-white cursor-pointer transition-colors">{category}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2 text-gray-400">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <li key={social} className="hover:text-white cursor-pointer transition-colors">{social}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          <p>© 2026 ModernShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
