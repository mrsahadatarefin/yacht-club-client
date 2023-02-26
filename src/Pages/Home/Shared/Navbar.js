import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/banner/logo.png'
import { AuthContext } from '../../../Context/ContextProvider/ContextProvider';

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)
   const handleLogout = ()=>{
  logOut()
  .then(()=>{

  })
  .catch(err => console.log(err))

   }
   
   const navMenu = <React.Fragment>
         <li><Link to='/' className='  text-xl'> Home</Link></li>
         <li><Link to='/services' className='  text-xl'> Services</Link></li>
         <li><Link to='/aboutUs' className='  text-xl'> About Us</Link></li>
         <li><Link to='/blog' className='  text-xl'> Blog</Link></li>
         <li><Link to='/contact' className='  text-xl'> Contacts</Link></li>
         {
          
          user?.uid?
          
          <>
          <li><Link to ='/myReviews' className='text-xl'> My reviews</Link> </li>
          <li><Link to ='/addService' className='text-xl'>Add service</Link> </li>
          <li>  <Link  className='  text-xl' onClick={handleLogout}> logout</Link></li>
          </>
          
          
          
          
          
          
            
            
            
          :
          
          
          <>
          
          <li><Link to='/login' className='  text-xl'> login</Link></li>
         <li><Link to='/signup' className='  text-xl'> sign up</Link></li>
          
          </>
         
         }
         
        

    </React.Fragment>

// #cebd88
        
    

    return (
        <div className="navbar w-full bg-sky-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navMenu}
      </ul>
    </div>
    <Link to='/' className=" normal-case   px-5 lg:px-16    "><img src={logo} alt='' className='  w-[100px]  h-[50px] lg:w-[100px] lg:h-[100px] '/></Link >
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navMenu}
    </ul>
  </div>
  <div className="navbar-end  lg:p-5  ">
    <Link className="btn btn-outline ">Booking Now</Link>
  </div>
</div>
    );
};

export default Navbar;