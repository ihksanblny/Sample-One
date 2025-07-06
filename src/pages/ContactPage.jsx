import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

// Baris-baris teks yang akan muncul satu per satu
const logSequence = [
  'INITIALIZING CONNECTION...',
  'AUTHENTICATING NODE...',
  'ENCRYPTION PROTOCOL: AES-256 GCM',
  'STATUS: SECURE',
  'CHANNEL OPEN.',
];

export default function ContactPage() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Membersihkan timeout jika komponen di-unmount
    const timeouts = [];

    // Tampilkan setiap baris dengan jeda waktu
    logSequence.forEach((line, index) => {
      const timeoutId = setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, 700 * (index + 1));
      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // Tentukan apakah animasi sudah selesai untuk menampilkan tombol
  const animationComplete = lines.length === logSequence.length;

  return (
    // Kita buat layout di tengah layar secara vertikal dan horizontal
    <div className="bg-black text-white h-screen flex items-center justify-center p-4 scanlines">
      <div className="w-full max-w-2xl">
        <div className="bg-black/80 border border-gray-800 rounded-lg p-6 md:p-8 backdrop-blur-sm">
          
          {/* Header Terminal */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
            <ShieldCheck className="text-green-500" size={18} />
            <h1 className="font-mono text-sm text-green-500">SECURE_TRANSMISSION_CHANNEL</h1>
          </div>

          {/* Log yang Muncul Bertahap */}
          <div className="font-mono text-sm text-gray-400 space-y-2 h-36">
            {lines.map((line, index) => (
              <p key={index} className="animate-fade-in">&gt; {line}</p>
            ))}
          </div>

          {/* Tombol Aksi yang Muncul Terakhir */}
          <div className={`mt-8 transition-opacity duration-500 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-white mb-4">
              Our channel is open for inquiries, collaborations, or transmissions from the void.
            </p>
            <a 
              href="mailto:contact@darkwear.co?subject=Inquiry from DARKWEAR Site"
              className="group inline-flex items-center gap-3 font-mono text-xl text-red-500 hover:text-white transition-colors duration-300"
            >
              <span className="glitch" data-text="[ INITIATE CONTACT ]">[ INITIATE CONTACT ]</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">_</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}