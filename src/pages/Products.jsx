import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { useAuth } from '../context/AuthContext';

const Products = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
       {/* Navbar */}
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-[#e8e8f3] bg-white/80 px-6 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-background-dark/90 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">layers</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-text-main dark:text-white">SaaS App</h2>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end gap-8">
          <nav className="flex items-center gap-8">
            <Link className="text-sm font-medium text-text-secondary hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-white" to="/">Home</Link>
            <Link className="text-sm font-bold text-primary dark:text-white" to="/products">Products</Link>
            <Link className="text-sm font-medium text-text-secondary hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-white" to="#">Pricing</Link>
            <Link className="text-sm font-medium text-text-secondary hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-white" to="/about">About Us</Link>
          </nav>
          <div className="flex gap-3">
             {user ? (
               <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-text-main dark:text-white">Hi, {user.name}</span>
                   <Link to="/dashboard" className="hidden h-10 items-center justify-center rounded-lg px-4 text-sm font-bold text-text-main transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 md:flex">
                     Dashboard
                  </Link>
                  <button onClick={logout} className="flex h-10 items-center justify-center rounded-lg px-4 text-sm font-bold text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10">
                    Logout
                  </button>
               </div>
            ) : (
                <div className="flex gap-3">
                    <Link to="/login" className="flex h-10 items-center justify-center rounded-lg px-6 text-sm font-bold text-text-main transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">
                    Log In
                    </Link>
                    <button className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40 active:scale-95">
                    Sign Up
                    </button>
                </div>
            )}
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <button className="md:hidden flex items-center justify-center p-2 text-text-main dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 px-4 py-8 md:px-10 lg:px-20 xl:px-40">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
            <Link className="hover:text-primary hover:underline transition-colors" to="/">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="font-semibold text-text-main dark:text-white">Products</span>
          </nav>

          {/* Page Header */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-black tracking-tight text-text-main dark:text-white md:text-5xl">Our Products</h1>
              <p className="mt-3 text-lg text-text-secondary dark:text-gray-400">
                Explore our comprehensive suite of tools designed to streamline your workflow and boost productivity.
              </p>
            </div>
            {/* Filter/Sort Controls */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-text-main shadow-sm hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <span className="material-symbols-outlined text-[20px]">tune</span>
                <span>Filters</span>
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-text-main shadow-sm hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <span>Sort by: Featured</span>
                <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {productsData.map((product) => (
              <div key={product.id} className="group flex flex-col rounded-xl bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover dark:bg-gray-800 border border-transparent hover:border-primary/10">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/20 transition-colors group-hover:text-primary/30">
                    <span className="material-symbols-outlined text-6xl">{product.icon}</span>
                  </div>
                  <img alt={product.name} className="h-full w-full object-cover transition-opacity duration-500" src={product.image} />
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 shadow-sm dark:bg-black/50 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-xl text-gray-400 hover:text-red-500 cursor-pointer transition-colors">favorite</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{product.category}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                      <span className="text-xs font-medium text-text-secondary dark:text-gray-400">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-text-main dark:text-white">{product.name}</h3>
                  <p className="mb-4 text-sm text-text-secondary line-clamp-2 dark:text-gray-400">{product.desc}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                    <div className="flex flex-col">
                      <span className="text-xs text-text-secondary dark:text-gray-500">Starting at</span>
                      <span className="text-lg font-bold text-text-main dark:text-white">{product.price}<span className="text-sm font-normal text-text-secondary dark:text-gray-400">/mo</span></span>
                    </div>
                    <Link to={`/products/${product.id}`} className="flex items-center gap-1 rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
                      Details
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center">
             <nav className="flex items-center gap-2 rounded-full bg-white p-2 shadow-sm dark:bg-gray-800">
                 <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-gray-100 hover:text-primary dark:text-gray-400 transition-colors" disabled><span className="material-symbols-outlined">chevron_left</span></button>
                 <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/20">1</button>
                 <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-gray-100 hover:text-primary">2</button>
                 <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-gray-100 hover:text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
             </nav>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="mt-auto border-t border-[#e8e8f3] bg-white py-12 dark:border-gray-800 dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-sm text-text-secondary">© 2024 SaaS App Inc. All rights reserved.</p>
           <div className="flex gap-6">
              <Link to="#" className="text-sm text-text-secondary hover:text-primary">Privacy Policy</Link>
              <Link to="#" className="text-sm text-text-secondary hover:text-primary">Terms of Service</Link>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
