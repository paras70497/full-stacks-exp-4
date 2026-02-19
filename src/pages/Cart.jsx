import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useMemo } from 'react';
import { productsData } from '../data/products';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    // useMemo: Calculate total price efficiently
    // This derived calculation only re-runs when cartItems changes
    const { totalPrice, totalItems } = useMemo(() => {
        const total = cartItems.reduce((sum, item) => {
            // Remove '$' and convert to number
            const price = parseFloat(item.price.replace('$', ''));
            return sum + price * item.quantity;
        }, 0);
        
        const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        return { 
            totalPrice: total.toFixed(2), 
            totalItems: count 
        };
    }, [cartItems]);

    if (cartItems.length === 0) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center bg-gray-50">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">shopping_cart_off</span>
                <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
                <p className="mt-2 text-gray-600 mb-8">Looks like you haven't added anything yet.</p>
                <Link to="/products" className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
                
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                    {/* Cart Items List */}
                    <section className="lg:col-span-7">
                        <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex py-6 bg-white px-4 sm:px-6 rounded-lg mb-4 shadow-sm border border-gray-100">
                                    {/* Product Info */}
                                    <div className="flex-shrink-0">
                                       <div className={`h-24 w-24 flex items-center justify-center rounded-md text-2xl font-bold text-white uppercase ${item.color || 'bg-blue-500'}`}>
                                            {item.name.substring(0, 2)}
                                        </div>
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm">
                                                        <Link to="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                            {item.name}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="mt-1 flex text-sm">
                                                    <p className="text-gray-500">{item.category}</p>
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-gray-900">{item.price}</p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity, {item.name}</label>
                                                <div className="flex items-center gap-2">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <span className="material-symbols-outlined text-sm">remove</span>
                                                    </button>
                                                    <span className="font-medium w-8 text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 rounded-full hover:bg-gray-100"
                                                    >
                                                        <span className="material-symbols-outlined text-sm">add</span>
                                                    </button>
                                                </div>

                                                <div className="absolute top-0 right-0">
                                                    <button 
                                                        onClick={() => removeFromCart(item.id)}
                                                        type="button" 
                                                        className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                                    >
                                                        <span className="sr-only">Remove</span>
                                                        <span className="material-symbols-outlined">close</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex justify-end">
                             <button 
                                onClick={clearCart}
                                className="text-sm font-medium text-red-600 hover:text-red-500 hover:underline"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </section>

                    {/* Order Summary */}
                    <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 bg-white shadow-lg border border-gray-100 sticky top-24">
                        <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Subtotal ({totalItems} items)</dt>
                                <dd className="text-sm font-medium text-gray-900">${totalPrice}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Shipping estimate</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-gray-900">Order total</dt>
                                <dd className="text-base font-medium text-gray-900">${(parseFloat(totalPrice) + 5).toFixed(2)}</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <button
                                type="button"
                                className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 bg-indigo-600"
                            >
                                Checkout
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cart;
