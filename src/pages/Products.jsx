import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: Add simple alert or toast here
    // alert(`${product.name} added to cart!`);
  };

  const isInCart = (id) => {
     return cartItems.some(item => item.id === id);
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
       <main className="flex-grow">
          {/* Header Section */}
          <section className="bg-white py-12 dark:bg-background-dark md:py-20 border-b border-gray-100 dark:border-gray-800">
             <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-black tracking-tight text-text-main dark:text-white sm:text-5xl md:text-6xl">
                   Our Products
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary dark:text-gray-400">
                   Explore our suite of tools designed to help you build better software.
                </p>
             </div>
          </section>

          {/* Products Grid */}
          <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
             <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {productsData.map((product) => (
                   <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800/50 dark:ring-1 dark:ring-white/10">
                      <div className="aspect-[16/9] w-full bg-gray-200 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                         {/* Placeholder for image */}
                         <div className={`h-full w-full flex items-center justify-center text-4xl font-bold text-white uppercase ${product.color || 'bg-blue-500'}`}>
                            {product.name.substring(0, 2)}
                         </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                         <h3 className="text-xl font-bold text-text-main dark:text-white">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                         </h3>
                         <p className="mt-2 text-base text-text-secondary dark:text-gray-400 line-clamp-3">
                            {product.desc}
                         </p>
                         <div className="mt-6 flex items-center justify-between">
                            <span className="text-lg font-bold text-primary dark:text-white">{product.price}</span>
                            
                            <button 
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent Link from firing if wrapped (it's not here, but good practice)
                                    handleAddToCart(product);
                                }}
                                className="z-10 rounded-full bg-gray-100 p-2 text-gray-900 hover:bg-primary hover:text-white transition-colors"
                                title="Add to Cart"
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {isInCart(product.id) ? 'shopping_bag' : 'add_shopping_cart'}
                                </span>
                            </button>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </section>
       </main>
    </div>
  );
};

export default Products;
