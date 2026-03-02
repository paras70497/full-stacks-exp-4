import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl z-0 pointer-events-none"></div>

      <main className="flex-grow z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              {/* Hero Content */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 self-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary lg:self-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Experiment 5 — Redux Toolkit
                </div>
                <h1 className="text-4xl font-black tracking-tight text-text-main dark:text-white sm:text-5xl md:text-6xl lg:leading-tight">
                  Build <span className="text-primary">Scalable React Apps</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-text-secondary dark:text-gray-400 lg:mx-0">
                  A full-stack SaaS demo with Redux Toolkit, Context API, React Router, and performance-optimized components.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Link to="/products" className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40">
                    <span>View Products</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                  <Link to="/about" className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-6 text-base font-bold text-text-main dark:text-white transition-all hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <span>About Us</span>
                  </Link>
                </div>
              </div>
              
              {/* Hero Image / Placeholder */}
               <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900">
                        <span className="material-symbols-outlined text-9xl text-primary/20">dashboard_customize</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
