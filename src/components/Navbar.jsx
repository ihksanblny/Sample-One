import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Logo = () => (
  <NavLink to="/" className="font-semibold text-2xl tracking-widest uppercase cursor-pointer group">
    <span className="group-hover:text-red-400 transition-colors duration-300">DARK</span>
    <span className="text-gray-500 group-hover:text-white transition-colors duration-300">WEAR</span>
  </NavLink>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Product', to: '/produk' },
    { name: 'Catalog', to: '/katalog' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 text-white py-4 px-6 md:px-12 z-50 transition-all duration-300 ease-in-out ${
          hasScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-red-500/5' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between relative">
          <Logo />

          <ul className="hidden md:flex items-center space-x-8 font-mono text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive ? 'text-red-400' : 'hover:text-red-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="hidden md:block hover:text-red-400 transition-colors duration-300">
              <Search size={22} />
            </button>
            <Link to="/keranjang" className="hidden md:block hover:text-red-400 transition-colors duration-300">
              <ShoppingBag size={22} />
            </Link>
            <div className="md:hidden z-50" onClick={toggleMenu}>
              {isOpen ? <X size={28} className="text-red-400" /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black transition-transform duration-500 ease-in-out ${
          isOpen ? 'transform-none' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <X size={28} onClick={toggleMenu} className="text-red-400" />
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-mono">
          <li>
            <button onClick={toggleSearch} className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">
              <Search size={22} /> Search
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${isActive ? 'text-red-400' : 'hover:text-red-400'}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="pt-8">
            <button className="flex items-center gap-2 border border-red-400/50 px-4 py-2 rounded-md hover:bg-red-400/10 transition-colors duration-300">
              <ShoppingBag size={22} />
              <span>Keranjang</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-lg z-40 transition-opacity duration-300 flex items-start justify-center pt-24 md:pt-32 ${
          isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative w-full max-w-xl px-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent border-b border-gray-600 focus:border-red-400 text-2xl md:text-3xl text-white placeholder-gray-500 outline-none transition-colors duration-300 py-2"
            autoFocus
          />
          <button onClick={toggleSearch} className="absolute top-0 -right-2 md:-right-8 text-gray-500 hover:text-white transition-colors">
            <X size={32} />
          </button>
        </div>
      </div>
    </>
  );
}
