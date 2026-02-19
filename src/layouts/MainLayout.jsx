import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      {/* Optional Footer */}
      <footer className='border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} SaaS App. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
