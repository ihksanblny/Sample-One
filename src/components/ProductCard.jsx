import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../logic/CardContext'; // Pastikan path sesuai struktur proyek Anda

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300">
      
      {/* Gambar sebagai Latar Belakang Utama */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Overlay Gelap untuk Kontras Teks */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Elemen-elemen yang Ditumpuk di Atas Gambar */}
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col">
        
        {/* Harga di Pojok Kanan Atas */}
        <div className="absolute top-4 right-4">
          <div className="bg-red-600 text-white font-mono font-bold text-sm py-1 px-3 transform rotate-6">
            {product.price}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Nama Produk */}
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase leading-tight tracking-tighter" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          {product.name}
        </h2>

        {/* Tombol Tambah ke Keranjang */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => addToCart(product)}
            className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            aria-label="Add to cart"
          >
            <ShoppingBag size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
