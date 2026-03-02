import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useTheme } from '../context/ThemeContext';
import { useMemo, useState } from 'react';

const Checkout = () => {
    // Redux Toolkit: useSelector to read cart state
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    // useContext: reading theme
    const { theme } = useTheme();

    const [orderPlaced, setOrderPlaced] = useState(false);

    // useMemo: Derived calculations — recomputes only when cartItems change
    const orderSummary = useMemo(() => {
        const subtotal = cartItems.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return sum + price * item.quantity;
        }, 0);

        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        const shipping = cartItems.length > 0 ? 5.00 : 0;
        const tax = subtotal * 0.08; // 8% tax
        const grandTotal = subtotal + shipping + tax;

        // Category-wise breakdown (useMemo derived data)
        const categoryBreakdown = cartItems.reduce((acc, item) => {
            const cat = item.category || 'Other';
            if (!acc[cat]) {
                acc[cat] = { count: 0, total: 0 };
            }
            acc[cat].count += item.quantity;
            acc[cat].total += parseFloat(item.price.replace('$', '')) * item.quantity;
            return acc;
        }, {});

        return {
            subtotal: subtotal.toFixed(2),
            totalItems,
            shipping: shipping.toFixed(2),
            tax: tax.toFixed(2),
            grandTotal: grandTotal.toFixed(2),
            categoryBreakdown,
        };
    }, [cartItems]);

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        dispatch(clearCart());
    };

    // Order confirmation screen
    if (orderPlaced) {
        return (
            <div className="flex min-h-[70vh] flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-background-dark">
                <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-4 mb-6">
                    <span className="material-symbols-outlined text-5xl text-green-600 dark:text-green-400">check_circle</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Order Placed!</h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
                    Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                </p>
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                    Current theme: {theme}
                </p>
                <Link
                    to="/products"
                    className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    // Empty cart redirect
    if (cartItems.length === 0) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-background-dark">
                <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">receipt_long</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Nothing to checkout</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 mb-8">Add items to your cart first.</p>
                <Link to="/products" className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background-dark py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link to="/cart" className="text-sm text-primary hover:underline flex items-center gap-1 mb-4">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Cart
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Checkout</h1>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Review your order before placing it. Current theme: <span className="font-medium text-primary">{theme}</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Items Review  */}
                    <div className="lg:col-span-3 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Order Items ({orderSummary.totalItems})</h2>
                        
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                                <div className={`h-14 w-14 flex-shrink-0 flex items-center justify-center rounded-lg text-lg font-bold text-white uppercase ${item.color || 'bg-blue-500'}`}>
                                    {item.name.substring(0, 2)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.category} &middot; Qty: {item.quantity}</p>
                                </div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}

                        {/* Category Breakdown — derived via useMemo */}
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Category Breakdown</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {Object.entries(orderSummary.categoryBreakdown).map(([cat, data]) => (
                                    <div key={cat} className="bg-white dark:bg-surface-dark rounded-lg p-3 border border-gray-100 dark:border-gray-700 text-center">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{cat}</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">{data.count}</p>
                                        <p className="text-xs text-primary font-medium">${data.total.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Payment Summary</h2>

                            <dl className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <dt className="text-gray-600 dark:text-gray-400">Subtotal</dt>
                                    <dd className="font-medium text-gray-900 dark:text-white">${orderSummary.subtotal}</dd>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <dt className="text-gray-600 dark:text-gray-400">Shipping</dt>
                                    <dd className="font-medium text-gray-900 dark:text-white">${orderSummary.shipping}</dd>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <dt className="text-gray-600 dark:text-gray-400">Tax (8%)</dt>
                                    <dd className="font-medium text-gray-900 dark:text-white">${orderSummary.tax}</dd>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                    <dd className="text-base font-bold text-primary">${orderSummary.grandTotal}</dd>
                                </div>
                            </dl>

                            <button
                                onClick={handlePlaceOrder}
                                className="mt-6 w-full rounded-lg bg-primary px-4 py-3 text-base font-bold text-white shadow-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Place Order
                            </button>

                            <p className="mt-3 text-center text-xs text-gray-400 dark:text-gray-500">
                                Secure checkout &middot; 256-bit encryption
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
