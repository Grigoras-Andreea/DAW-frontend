import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
        <div className='logo'>MySite</div>
        <nav className='navbar'>
            <Link to='/home' className='el'>Home</Link>
            <Link to='/create' className='el'>Create Recipie</Link>
            <Link to='/contact' className='el'>Contact</Link>
            <Link to='/' className='el'>Logout</Link>
        </nav>
    </header>
  );
};

export default Navbar;
