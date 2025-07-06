import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    // Kontainer utama yang menangani scroll dan efek latar.
    // Mobile: overflow-y-auto (scroll vertikal).
    // Desktop: overflow-x-auto (scroll horizontal).
    <div className="fixed inset-0 z-10 bg-black text-white scanlines overflow-y-auto md:overflow-x-auto md:overflow-y-hidden">
      
      {/* Wrapper untuk semua panel. */}
      {/* Mobile: block biasa, panel akan tersusun ke bawah. */}
      {/* Desktop: menjadi flexbox untuk susunan horizontal. */}
      <div className="md:flex md:h-full md:w-max">
        
        {/* PANEL 1: Manifesto */}
        <section className="h-screen w-screen flex flex-col justify-center items-center text-center p-6 md:flex-shrink-0 md:snap-center">
          <div>
            <p className="font-mono text-sm text-red-500 mb-2">// STATUS: CONNECTION ESTABLISHED</p>
            <h1 data-text="MANIFESTO" className="glitch text-6xl md:text-8xl font-black uppercase tracking-tighter">
              MANIFESTO
            </h1>
            <p className="font-mono text-gray-500 mt-4 max-w-lg">
              [SCROLL] to decrypt data fragments...
            </p>
          </div>
        </section>

        {/* PANEL 2: Philosophy - Layout diubah menjadi 2 kolom teks */}
        <section className="min-h-screen w-screen flex items-center p-6 md:flex-shrink-0 md:w-[90vw] md:snap-center">
          <div className="w-full max-w-5xl mx-auto grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="font-mono text-red-500 text-lg">// FRAGMENT_01: <br/> PHILOSOPHY</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                DARKWEAR is not a brand. It's a protocol. An armor for the urban soul navigating the space between light and shadow. We reject fleeting trends for timeless forms, functional design, and uncompromising quality.
              </p>
            </div>
          </div>
        </section>

        {/* PANEL 3: Principles - Layout dibuat lebih rapi */}
        <section className="min-h-screen w-screen flex flex-col justify-center p-6 md:flex-shrink-0 md:w-[90vw] md:snap-center">
          <div className="w-full max-w-5xl mx-auto">
             <h2 className="text-3xl font-bold text-center mb-16">Our Core Protocols</h2>
             <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="border-t-2 border-red-500 pt-6">
                  <h3 className="text-xl font-bold mb-2">01. Unseen Quality</h3>
                  <p className="text-gray-400">Details felt, not seen. Materials built to outlast seasons.</p>
                </div>
                <div className="border-t-2 border-red-500 pt-6">
                  <h3 className="text-xl font-bold mb-2">02. Elegant Utility</h3>
                  <p className="text-gray-400">Aesthetics born from function. Every pocket, every seam, every purpose.</p>
                </div>
                <div className="border-t-2 border-red-500 pt-6">
                  <h3 className="text-xl font-bold mb-2">03. Minimalist Form</h3>
                  <p className="text-gray-400">We discard the unnecessary. The wearer is the focus.</p>
                </div>
             </div>
          </div>
        </section>
        
        {/* PANEL 4: Call to Action */}
        <section className="h-screen w-screen flex flex-col justify-center items-center text-center p-6 md:flex-shrink-0 md:snap-center">
          <h2 className="text-5xl font-black uppercase">The Archive is Open.</h2>
          <p className="text-gray-400 my-4 max-w-md">Data stream ends here. Further exploration required.</p>
          <Link to="/katalog" className="group font-mono text-xl text-red-500 flex items-center gap-4 hover:text-white transition-colors">
            <span>&gt; EXECUTE: view_collection</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">_</span>
          </Link>
        </section>

      </div>
    </div>
  );
}