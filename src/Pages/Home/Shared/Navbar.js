import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/banner/logo.png'

const Navbar = () => {
    const navMenu = <React.Fragment>
         <li><Link to='/' className='font-bold'> Home</Link></li>
         <li><Link to='/about-Us' className='font-bold'> About Us</Link></li>
         <li><Link to='/Blog' className='font-bold'> Blog</Link></li>
         <li><Link to='/contacts' className='font-bold'> Contacts</Link></li>
         

    </React.Fragment>

// #cebd88
        
    

    return (
        <div className="navbar bg-sky-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navMenu}
      </ul>
    </div>
    <Link to='/' className=" normal-case text-2xl  font-bold italic    "><img src={logo} alt='' className='w-20 h-20 '/></Link >
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navMenu}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;