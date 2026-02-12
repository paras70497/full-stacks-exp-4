import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f0f0f0' }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        Products
      </NavLink>
      {user && (
         <NavLink
         to="/contact"
         style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
       >
         Contact
       </NavLink>
      )}
      {!user ? (
        <NavLink
          to="/login"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
        >
          Login
        </NavLink>
      ) : (
        <button onClick={handleLogout}>Logout ({user.name})</button>
      )}
    </nav>
  );
};

export default Navbar;
