import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Ikon untuk TikTok (menggunakan SVG path karena tidak ada di Lucide)
const TikTokIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 7.4c-0.3-0.2-0.6-0.3-1-0.3h-2.5c0-2.4-1.9-4.4-4.4-4.4S8.7 4.7 8.7 7.1h-2.5c-0.4 0-0.7 0.1-1 0.3-1.6 0.9-2.2 2.9-1.3 4.5 0.3 0.6 0.8 1.1 1.4 1.4 1.6 0.9 3.6 0.2 4.5-1.3l0.1-0.2c0.2-0.4 0.3-0.8 0.3-1.2h2.4c0.1 3.2 2.7 5.8 5.9 5.8 2.8 0 5.1-1.9 5.8-4.4 0.1-0.4 0.2-0.8 0.2-1.2 0-1.8-1.5-3.3-3.3-3.3z"></path>
  </svg>
);

const Logo = () => (
  <NavLink to="/" className="font-semibold text-2xl tracking-widest uppercase cursor-pointer group">
    <span className="group-hover:text-red-400 transition-colors duration-300">DARK</span>
    <span className="text-gray-500 group-hover:text-white transition-colors duration-300">WEAR</span>
  </NavLink>
);


export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50 text-gray-400">
      <div className="container mx-auto py-12 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Kolom 1: Logo & Copyright */}
          <div className="md:col-span-5 lg:col-span-6">
            <Logo />
            <p className="mt-4 text-sm text-gray-500 max-w-sm">
              Armor for the modern soul, designed for those who find beauty in the shadows.
            </p>
            <p className="text-xs mt-8 text-gray-600">
              &copy; {new Date().getFullYear()} DARKWEAR. All Rights Reserved.
            </p>
          </div>

          {/* Kolom 2: Link Navigasi */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-4">
              Sitemap
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/produk" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-5">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-white transition-colors">
                <TikTokIcon size={22} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}