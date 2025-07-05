import React, { useState, useEffect } from 'react';

export default function IntroScreen({ onFinish }) {
  // State untuk mengontrol animasi fade-out saat keluar
  const [isExiting, setIsExiting] = useState(false);
  // State untuk memunculkan teks setelah delay, agar lebih dramatis
  const [showContent, setShowContent] = useState(false);

  // Efek ini berjalan sekali saat komponen dimuat
  useEffect(() => {
    // Tampilkan teks setelah 2 detik agar video terlihat lebih dulu
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(contentTimer);
    };
  }, []);

  // Fungsi yang dipanggil saat video selesai atau layar diklik
  const handleFinish = () => {
    if (isExiting) return; // Mencegah klik ganda saat animasi keluar sedang berjalan

    setIsExiting(true); // Memicu animasi fade-out

    // Tunggu animasi fade-out (700ms) selesai, baru panggil onFinish
    setTimeout(onFinish, 700);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black cursor-pointer transition-opacity duration-700 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleFinish}
    >
      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        onEnded={handleFinish}
      />
      {/* Overlay untuk menggelapkan video dan membuat teks lebih terbaca */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Konten Teks di Tengah */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-serif tracking-widest uppercase drop-shadow-lg">
          DESCEND
        </h1>
        <div className="w-24 h-px bg-white/50 mt-4 mb-2 animate-pulse" />
        <p className="text-sm tracking-wider text-white/70">
          Click or wait to begin
        </p>
      </div>
    </div>
  );
}