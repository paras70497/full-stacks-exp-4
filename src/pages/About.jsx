import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const About = () => {
    const { user, logout } = useAuth();

    return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
       {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e8e8f3] bg-background-light/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-[20px]">layers</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-text-main">SaaS App</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" to="/about">About</Link>
            <Link className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" to="/products">Products</Link>
            <Link className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" to="/contact">Contact</Link>
          </nav>
          {/* Actions */}
          <div className="flex items-center gap-4">
             {user ? (
               <div className="flex items-center gap-4">
                   <span className="text-sm font-medium text-text-main">Hi, {user.name}</span>
                   <Link to="/dashboard" className="hidden text-sm font-medium text-text-main hover:text-primary md:block">
                     Dashboard
                  </Link>
                   <button onClick={logout} className="text-sm font-medium text-red-600 hover:text-red-700">
                    Logout
                  </button>
               </div>
            ) : (
                <Link to="/login" className="hidden text-sm font-medium text-text-main hover:text-primary md:block">
                  Login
                </Link>
            )}
            <Link to="/products" className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by worldwide creators</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Creators on the platform</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">8,000+</dd>
                        </div>
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Flat platform fee</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">3%</dd>
                        </div>
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Uptime guarantee</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">99.9%</dd>
                        </div>
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Paid out to creators</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">$70M</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-[#e8e8f3] bg-background-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-[14px]">layers</span>
              </div>
              <span className="text-lg font-bold text-text-main">SaaS App</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a className="text-sm text-text-secondary hover:text-primary" href="#">Privacy Policy</a>
              <a className="text-sm text-text-secondary hover:text-primary" href="#">Terms of Service</a>
              <Link className="text-sm text-text-secondary hover:text-primary" to="/contact">Contact Us</Link>
            </div>
            <div className="flex gap-4">
              <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">cruelty_free</span> {/* Placeholder icon for social */}
              </a>
              <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">public</span> {/* Placeholder icon for social */}
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-text-secondary sm:text-left">
            © 2023 SaaS App Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    );
};

export default About;
