import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'; // Footer yang baru diperbarui
import Notification from './Notification'; // Komponen notifikasi

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Semua halaman (Home, Catalog, dll.) akan muncul di sini */}
        <Outlet />
      </main>
      <Footer />
      <Notification />
    </div>
  );
}