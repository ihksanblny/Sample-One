import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../data/product'; // Asumsikan ini adalah data produk Anda

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Kita gunakan padding yang sangat besar (pt-32, pb-24) 
        untuk menciptakan 'negative space' yang luas, memberi kesan mewah dan fokus.
      */}
      <main className="container mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-24">

        {/* 1. Judul Asimetris & Minimalis */}
        <div className="mb-16 text-left">
          <p className="font-mono text-xs text-gray-500"> DARKWEAR / COLLECTION</p>
          <h1 className="text-5xl md:text-6xl font-medium text-white mt-2">
            All Products
          </h1>
        </div>

        {/* 2. Product Grid yang Bersih */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </main>
      
      <Footer />
    </div>
  );
}