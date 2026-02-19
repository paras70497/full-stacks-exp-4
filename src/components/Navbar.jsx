import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItems } = useCart();

    const isActive = (path) => {
        return location.pathname === path ? 'text-primary' : 'text-text-secondary hover:text-primary';
    }

    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e8f3] bg-background-light/80 backdrop-blur-md dark:border-gray-800 dark:bg-background-dark/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-[20px]">layers</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-text-main dark:text-white">SaaS App</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className={`text-sm font-medium transition-colors ${isActive('/')}`} to="/">Home</Link>
          <Link className={`text-sm font-medium transition-colors ${isActive('/about')}`} to="/about">About</Link>
          <Link className={`text-sm font-medium transition-colors ${isActive('/products')}`} to="/products">Products</Link>
        </nav>

        {/* Action Button & Cart */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 text-text-secondary hover:text-primary transition-colors">
             <span className="material-symbols-outlined">shopping_cart</span>
             {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {cartItemCount}
                </span>
             )}
          </Link>
          
          <div className="hidden md:flex">
             <Link to="/products" className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
                Get Started
             </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button 
                className="md:hidden flex items-center justify-center p-2 text-text-main dark:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-background-dark">
             <nav className="flex flex-col gap-4">
                <Link className={`text-sm font-medium transition-colors ${isActive('/')}`} to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link className={`text-sm font-medium transition-colors ${isActive('/about')}`} to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link className={`text-sm font-medium transition-colors ${isActive('/products')}`} to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link className={`text-sm font-medium transition-colors ${isActive('/cart')}`} to="/cart" onClick={() => setIsMenuOpen(false)}>
                   Cart ({cartItemCount})
                </Link>
             </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
