import React from 'react';
import { useCart } from '../logic/CardContext';
import { Terminal, X } from 'lucide-react'; // Ganti ikon menjadi lebih 'techy'

export default function Notification() {
  // Tambahkan fungsi closeNotification dari context
  const { notification, closeNotification } = useCart(); 

  // Style untuk 'status bar' yang muncul dari bawah
  const notificationClasses = `
    fixed bottom-0 left-0 right-0 z-50
    transition-all duration-500 ease-in-out
    ${notification.visible ? 'transform-none opacity-100' : 'translate-y-full opacity-0'}
  `;

  return (
    <div className={notificationClasses} role="alert">
      <div className="container mx-auto">
        <div className="
          flex items-center justify-between gap-4 
          bg-black/50 backdrop-blur-lg 
          border-t border-gray-800 
          max-w-4xl mx-auto
          py-4 px-6 mb-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <Terminal className="text-red-500" size={20} />
            <p className="font-mono text-sm text-white">{notification.message}</p>
          </div>
          <button onClick={closeNotification} className="text-gray-500 hover:text-white">
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}