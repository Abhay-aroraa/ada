import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();
  
     
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-lg text-gray-600">No items in cart</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cart.map((product, index) => (
                        <div key={index} className="border rounded-lg shadow-md overflow-hidden">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="object-contain h-48 w-full" 
                            />
                            <div className="p-4 flex flex-col">
                                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-600 mb-2">{product.category}</p>
                                <p className="text-xl font-bold mb-2">Price: ${product.price.toFixed(2)}</p>
                                <button onClick={() => removeFromCart(product.id)} className="mt-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition duration-200">
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
