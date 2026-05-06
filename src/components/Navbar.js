import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const linkStyle = ({ isActive }) => ({
  marginRight: '1rem',
  textDecoration: 'none',
  color: isActive ? '#fff' : '#aac8e8',
  fontWeight: isActive ? 'bold' : 'normal',
});

function Navbar() {
 

  return (
    
    
    <nav style={{ background: '#1A3C6E', padding: '1rem 2rem', display: 'flex', alignItems: 'center' }}>
      <NavLink to='/'        style={linkStyle}>Home</NavLink>
      <NavLink to='/products' style={linkStyle}>Products</NavLink>
      <NavLink to='/dashboard' style={linkStyle}>Dashboard</NavLink>
      
    </nav>
  );
}
export default Navbar;
