import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-28">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              {/* Hero Content */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 self-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary lg:self-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  New version 6.0 released
                </div>
                <h1 className="text-4xl font-black tracking-tight text-text-main sm:text-5xl md:text-6xl lg:leading-tight">
                  Build Faster with <span className="text-primary">React Router v6</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-text-secondary lg:mx-0">
                  Experience the next generation of routing. Simple, powerful, and designed for modern web applications. Focus on your product, not the plumbing.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Link to="/products" className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40">
                    <span>Start Building</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                  <button className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-text-main transition-all hover:border-gray-300 hover:bg-gray-50">
                    <span className="material-symbols-outlined text-[20px] text-text-secondary">play_circle</span>
                    <span>Watch Demo</span>
                  </button>
                </div>
                <div className="flex items-center justify-center gap-6 lg:justify-start pt-4">
                  <div className="flex -space-x-2">
                    <img alt="User portrait" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ixoqaBspgLiYom60e2WeMUFiWkIZl23pcLTryX5K8DRYV85UJ4IDO8DLdQBVJ4UVr3_NkWpixHfQ4VK9mv1FbJICctDMjGAHoXOHXgcRRlGFxYyzpVfaOPOw_HFAYlLbzVJ_UGeTnhgPiEzcLKAWQLtuDnIlbPS--xB3XTDDdFH77m-vtrmB__oOSaSJ3QIv9YCVbEWFTvOeyg_16wNAJOvm23N2XzIruGUiKLw_E7xdaUyIef5pfpn59XvyjKNobE8kaCynTjXO" />
                    <img alt="User portrait" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBomVMf9HESjHtJkLOxp6lP_iZDYupMoOogiTlkHZWCC4Dm8w2B3qCZKSeAdO6aOmeRs-xH7-pZJMgdY3jI17h5MvMJBkPwi7yp3OhPneNTUOR0wHf3gUDX2ouqxJ75bwE6gbJHHhad_48wRlFXW4UNWAxOZIzOUY4x1mP7-6alvr_anWI4MsExVvO-ue0QAnnXcxbk05IVUieFNa8S5xg6xXEzhu8Bxyia-tyNtMdBhqOoy0orCU3CznmVWHtifpsr1Dpjs06-mDD-" />
                    <img alt="User portrait" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8afAPcke_CQ3fAVevpYLm3syV1Y16TXHItdG4CjLfGTvQCNhdYimtJW2mvjvgyPpqosRsOxX_hjfthmDQbOfIdUar3NLYuEOJ_wBW4vcNW2fLEZksVfHfLc5co1k8Ynv9yYO5-aDG5auYerw_1FPv-g4i9Mkzi8GiVhTJPOspcz7gsloBS_JTJjn9bZLLSOMzZcKiZIDIcd3U535AoIufPuOuQeXGJDH6vtZHfP3au3kRyeeKzxRPciEDU41P70oXUpOSyF_BAvch" />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white text-[10px] font-bold text-gray-500">+2k</div>
                  </div>
                  <div className="text-sm font-medium text-text-secondary">
                    Trusted by developers worldwide
                  </div>
                </div>
              </div>
              {/* Hero Visual */}
              <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
                <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/10">
                  <div className="absolute -top-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10"></div>
                  <div className="overflow-hidden rounded-xl bg-gray-50 aspect-[4/3] relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                      <img alt="Dashboard analytics preview" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3-J9hSQeeusPCsQQD6Kzl3eH2Io4YGiKUqK6N0tjyKnTp5_KBMVsvzyESxgbB_PwWfDTX_CsbOa3MezrNEMMJk1zkq7bKlIrFBI_ylwHB2_HRe6aD5TtGOIPP2I0C4lmF2k_UIz3moYloZoEi1BfCHLnZRDKyBjm-c9eomZaBLsQMrlGVzkYbMwe18C6VaCXU1mtpMjskDxsDS1QxgIvVYPe8CmjSmbjsGrn1jci2llEr0LIAi3VneCkh2BM7dMwIvBVbLHVP__d0" />
                    </div>
                    {/* Floating Element 1 */}
                    <div className="absolute top-6 left-6 flex items-center gap-3 rounded-lg bg-white p-3 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500">Status</p>
                        <p className="text-sm font-bold text-gray-900">Route Active</p>
                      </div>
                    </div>
                    {/* Floating Element 2 */}
                    <div className="absolute bottom-8 right-8 flex items-center gap-3 rounded-lg bg-white p-3 shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <span className="material-symbols-outlined">bolt</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500">Performance</p>
                        <p className="text-sm font-bold text-gray-900">98% Faster</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Grid (Why Choose Us) */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Why Choose Us</h2>
              <p className="mt-4 text-lg text-text-secondary">We provide the best tools for your development needs, focusing on what matters most.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group relative rounded-2xl border border-gray-100 bg-background-light p-8 transition-all hover:border-primary/20 hover:bg-white hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-main">Blazing Speed</h3>
                <p className="text-text-secondary">Optimized for performance with minimal overhead, ensuring your app loads instantly.</p>
              </div>
              {/* Feature 2 */}
              <div className="group relative rounded-2xl border border-gray-100 bg-background-light p-8 transition-all hover:border-primary/20 hover:bg-white hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-main">Enterprise Security</h3>
                <p className="text-text-secondary">Built-in protection against common vulnerabilities to keep your data safe and secure.</p>
              </div>
              {/* Feature 3 */}
              <div className="group relative rounded-2xl border border-gray-100 bg-background-light p-8 transition-all hover:border-primary/20 hover:bg-white hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-main">Infinite Scalability</h3>
                <p className="text-text-secondary">Whether you have 10 users or 10 million, our infrastructure grows with your needs.</p>
              </div>
            </div>
            {/* Added for identification */}
            <div className="mt-12 text-center text-sm text-text-secondary">
               Name is Paras UID 23BAI70497
            </div>
          </div>
        </section>
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

export default Home;
