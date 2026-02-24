import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden group relative"
    >
      <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
        <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center z-10">
          <span className="text-4xl">{product.icon}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${product.price}</span>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;