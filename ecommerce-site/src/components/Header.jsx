import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-50 bg-black/20 backdrop-blur-lg rounded-b-2xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
      >
        ModernShop
      </motion.div>
      
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {['Home', 'Products', 'Categories', 'About', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="cursor-pointer hover:text-pink-300 transition-colors relative group"
            >
              {item}
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.li>
          ))}
        </ul>
      </nav>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          Cart (0)
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;