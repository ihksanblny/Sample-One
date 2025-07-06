import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/product';      // Data produk lengkap Anda
import categories from '../data/categories';  // Data kategori yang baru kita buat

export default function CatalogPage() {
  // State untuk melacak kategori mana yang sedang aktif.
  // Kita set default kategori pertama saat halaman dimuat.
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Cari produk yang sesuai dengan productId dari kategori yang aktif
  const activeProduct = products.find(p => p.id === activeCategory.productId);

  return (
    // Padding atas yang besar untuk memberikan kesan lapang dan elegan
    <div className="container mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-24">
      <div className="grid md:grid-cols-12 gap-12">

        {/* KOLOM KIRI: Daftar Kategori (Indeks) */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-32">
            <h2 className="font-mono text-sm uppercase text-gray-500 mb-6">
              INDEX
            </h2>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-left w-full font-mono uppercase tracking-wider py-3 text-lg transition-colors duration-300 ${
                      activeCategory.id === category.id 
                        ? 'text-white' // Style untuk kategori aktif
                        : 'text-gray-600 hover:text-white' // Style untuk yang tidak aktif
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* KOLOM KANAN: Detail & Produk */}
        <main className="md:col-span-8 lg:col-span-9">
          {/* Gunakan key untuk memicu animasi saat state berubah */}
          <div key={activeCategory.id} className="animate-fade-in">
            <p className="font-mono text-red-500 mb-2">{activeCategory.id}</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              {activeCategory.name}
            </h1>
            <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
              {activeCategory.description}
            </p>
            
            <div className="mt-12">
              {/* Pastikan produk ditemukan sebelum merender kartu */}
              {activeProduct ? (
                <div className="max-w-sm">
                  <ProductCard product={activeProduct} />
                </div>
              ) : (
                <p className="text-gray-500">Produk untuk kategori ini tidak ditemukan.</p>
              )}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}