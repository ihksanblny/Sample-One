import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/product'; // Pastikan Anda memiliki data produk
import { ArrowRight } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black text-white">
      

      <main>
        {/* ===== Hero Section ===== */}
        <section
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/picture-home.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="z-10 max-w-2xl px-4 text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase drop-shadow-lg">
              Conquer The Shadows
            </h1>
            <p className="mt-4 text-lg text-gray-300 drop-shadow-md">
              Our new collection has arrived. Wear your darkness with pride.
            </p>
            <a
              href="#products"
              className="mt-8 inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-md uppercase tracking-wider hover:bg-red-700 transition-colors duration-300"
            >
              Explore Collection
            </a>
          </div>
        </section>

        {/* ===== Featured Product Section ===== */}
        <section id="products" className="py-20 px-4 sm:px-10">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
                Featured Collection
              </h2>
              <a href="/produk" className="group flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-red-500 transition-colors duration-300">
                <span>MORE</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Menampilkan 6 produk pertama sebagai fitur */}
              {products.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== [KONTEN BARU] Lookbook Teaser Section ===== */}
        <section className="container mx-auto px-4 sm:px-10 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-[600px] bg-cover bg-center rounded-lg" style={{backgroundImage: "url('/www.jpeg')"}}>
                    {/* Gambar Lookbook */}
                </div>
                <div className="text-left">
                    <p className="font-mono text-sm text-red-500 tracking-widest">STYLE IN FRAME</p>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4">
                        Urban Canvas
                    </h2>
                    <p className="mt-6 text-gray-400 leading-relaxed">
                        Beyond clothing, we provide a canvas. Each piece is an invitation to express your narrative against the urban landscape. See how our collection comes to life in the wild.
                    </p>
                    <a href="/lookbook" className="mt-8 inline-block text-white font-bold border-b-2 border-red-600 hover:text-red-500 transition-colors duration-300">
                        View Lookbook
                    </a>
                </div>
            </div>
        </section>

        {/* ===== [KONTEN BARU] Brand Philosophy Section ===== */}
        <section className="py-24 bg-gray-900/50">
            <div className="container mx-auto px-10 text-center max-w-3xl">
                <h3 className="text-3xl font-medium leading-tight">
                    “We don't just sell clothes. We craft armor for the modern soul, designed for those who find beauty in the shadows.”
                </h3>
                <p className="font-mono text-sm uppercase mt-6 text-gray-500">— The DARKWEAR Creed</p>
            </div>
        </section>

      </main>

      
    </div>
  );
}