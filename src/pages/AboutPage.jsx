import React from 'react';
import { Link } from 'react-router-dom';

// Komponen 'Window' untuk membuat panel-panel yang bisa tumpang tindih
const Window = ({ children, className }) => (
  <div className={`bg-black border border-gray-800 p-6 md:p-8 backdrop-blur-sm bg-opacity-80 ${className}`}>
    {children}
  </div>
);

export default function AboutUsPage() {
  return (
    // Kontainer utama dengan scroll horizontal dan efek scanlines
    <div className="fixed inset-0 bg-black text-white overflow-x-auto overflow-y-hidden scanlines">
      {/* Wrapper untuk semua panel dengan lebar yang sangat besar */}
      <div className="flex items-center h-full w-max px-10 md:px-24">
        
        {/* PANEL 1: ENTRY POINT */}
        <section className="flex-shrink-0 w-screen md:w-[80vw] h-full flex flex-col justify-center text-left pr-10">
          <p className="font-mono text-sm text-red-500 mb-2"> STATUS: CONNECTION UNSTABLE</p>
          <h1 data-text="MANIFESTO" className="glitch text-6xl md:text-8xl font-black uppercase tracking-tighter">
            MANIFESTO
          </h1>
          <p className="font-mono text-gray-500 mt-4 max-w-lg">
            [SCROLL_HORIZONTAL] to decrypt data fragments...
          </p>
        </section>

        {/* PANEL 2: PHILOSOPHY */}
        <section className="flex-shrink-0 w-[90vw] md:w-[60vw] relative pr-10">
          <Window className="relative z-10">
            <h2 className="font-mono text-red-500 text-sm mb-4"> FRAGMENT_01: PHILOSOPHY</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              DARKWEAR is not a brand. It's a protocol. An armor for the urban soul navigating the space between light and shadow. We reject fleeting trends for timeless forms, functional design, and uncompromising quality.
            </p>
          </Window>
          {/* Gambar terdistorsi yang tumpang tindih */}
          <img 
            src="https://source.unsplash.com/random/800x1200?dark,glitch,cyberpunk"
            className="absolute top-1/2 -translate-y-1/2 -right-20 w-80 h-auto opacity-30 mix-blend-lighten"
            alt="Corrupted data"
          />
        </section>

        {/* PANEL 3: PRINCIPLES (Layout Rusak) */}
        <section className="flex-shrink-0 w-[100vw] md:w-[70vw] relative h-full flex items-center pr-10">
          <div className="relative w-full h-auto">
            <Window className="w-3/4 mb-4">
              <h3 className="font-mono text-sm text-red-500"> 01. UNSEEN_QUALITY</h3>
              <p className="text-gray-400 mt-2">Details felt, not seen. Materials built to outlast seasons.</p>
            </Window>
            <Window className="w-3/4 ml-auto mb-4 transform translate-x-4">
              <h3 className="font-mono text-sm text-red-500"> 02. ELEGANT_UTILITY</h3>
              <p className="text-gray-400 mt-2">Aesthetics born from function. Every pocket, every seam, every purpose.</p>
            </Window>
            <Window className="w-3/4">
              <h3 className="font-mono text-sm text-red-500"> 03. MINIMALIST_FORM</h3>
              <p className="text-gray-400 mt-2">We discard the unnecessary. The wearer is the focus.</p>
            </Window>
          </div>
        </section>
        
        {/* PANEL 4: CALL TO ACTION */}
        <section className="flex-shrink-0 w-screen md:w-[80vw] h-full flex flex-col justify-center text-left pl-10">
          <h2 className="text-5xl font-black uppercase">The Archive is Open.</h2>
          <p className="text-gray-400 my-4 max-w-md">Data stream ends here. Further exploration required.</p>
          <Link to="/katalog" className="group font-mono text-xl text-red-500 flex items-center gap-4 hover:text-white transition-colors">
            <span>&gt; EXECUTE: view_collection</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span>
          </Link>
        </section>

      </div>
    </div>
  );
}