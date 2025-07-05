import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

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


export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 text-gray-500">
      <div className="container mx-auto py-6 px-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} DARKWEAR. All Rights Reserved.
        </p>
        
        {/* Ganti teks dengan ikon */}
        <div className="flex space-x-6">
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-white transition-colors">
            <TikTokIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}