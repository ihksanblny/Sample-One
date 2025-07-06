import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, X } from 'lucide-react';
import { useCart } from '../logic/CardContext';

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, } = useCart();

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/Rp|\./g, ''));
    return sum + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center py-40 px-4">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/produk" 
          className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-md uppercase tracking-wider hover:bg-red-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-24">
      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
        Shopping Cart
      </h1>
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <div className="border-b border-gray-800 pb-4 mb-4">
            <div className="grid grid-cols-6 gap-4 font-mono text-xs uppercase text-gray-500">
              <div className="col-span-3">Product</div>
              <div className="col-span-1 text-center">Quantity</div>
              <div className="col-span-1 text-right">Total</div>
              <div className="col-span-1"></div>
            </div>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="grid grid-cols-6 gap-4 items-center border-b border-gray-800 py-6">
              <div className="col-span-3 flex items-center gap-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="font-mono text-sm text-gray-400">{item.price}</p>
                </div>
              </div>

              <div className="col-span-1 flex justify-center items-center border border-gray-700 rounded-md p-1">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 text-gray-400 hover:text-white"><Minus size={16} /></button>
                <span className="px-2 font-mono text-white">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-2 text-gray-400 hover:text-white"><Plus size={16} /></button>
              </div>

              <div className="col-span-1 text-right font-mono text-white">
                Rp {(parseInt(item.price.replace(/Rp|\./g, '')) * item.quantity).toLocaleString('id-ID')}
              </div>

              <div className="col-span-1 text-right">
                <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-32 bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold uppercase mb-6">Order Summary</h2>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-white">Calculated at next step</span>
              </div>
              <div className="flex justify-between border-t border-gray-700 pt-4 mt-4 text-base font-bold">
                <span className="text-white uppercase">Total</span>
                <span className="text-white">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-red-600 text-white font-bold py-3 rounded-md uppercase tracking-wider hover:bg-red-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
