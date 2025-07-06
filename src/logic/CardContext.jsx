import { createContext, useContext, useState } from 'react';

// Ganti nama menjadi CartContext agar lebih jelas
const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }){
    const [cartItems, setCartItems] = useState([]);

    const [notification, setNotification] = useState({
        message: '',
        visible: false,
    });

    const showNotification = (message) => {
        setNotification({ message, visible: true });
        // Sembunyikan notifikasi setelah 3 detik
        // Menggunakan functional update untuk mencegah bug 'stale state'
        setTimeout(() => {
                setNotification(prev => ({ ...prev, visible: false }));
        }, 3000);
    };

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing){
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        showNotification(`${product.name} added to cart.`);
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
        showNotification(`Item has been removed from cart.`);
    }

    const increaseQuantity = (productId) => {
        setCartItems(prev => prev.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (productId) => {
        setCartItems(prev => prev.map(item =>
            // Jika kuantitas lebih dari 1, kurangi. Jika tidak, biarkan 1.
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // 1. Definisikan 'value' secara eksplisit agar lebih mudah dibaca
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        notification, // 2. Pastikan 'notification' dimasukkan ke dalam value
    };

    return (
        // 3. Gunakan const 'value' di sini
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}