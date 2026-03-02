import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className='flex min-h-screen flex-col bg-background-light dark:bg-background-dark transition-colors duration-300'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <footer className='border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark py-8 text-center text-sm text-gray-500 dark:text-gray-400'>
        &copy; {new Date().getFullYear()} SaaS App. All rights reserved. | Theme: {theme}
      </footer>
    </div>
  );
};

export default MainLayout;
