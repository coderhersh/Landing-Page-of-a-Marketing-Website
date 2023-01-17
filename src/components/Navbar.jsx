import React from 'react';
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='flex py-5 justify-between sticky top-0 bg-white'>
      <div className='flex'>
        <img src={Logo}/>
      </div>
      
      <div className='flex'>
        <button className='mx-6 hover:text-purple-600 hover:delay-300 hover:ease-in-out'>Home</button>
        <button className='mx-6 hover:text-purple-600 hover:delay-300 hover:ease-in-out'>Services</button>
        <button className='mx-6 hover:text-purple-600 hover:delay-300 hover:ease-in-out'>Testimonials</button>
        <button className='mx-6 hover:text-purple-600 hover:delay-300 hover:ease-in-out'>News</button>
      </div>
      
      <div className='flex justify-center content-center'>
        <button className='bg-none border-2 border-purple-800 text-purple-800
         rounded-md px-5 py-2.5 font-semibold 
         hover:bg-purple-800 hover:text-white hover:ease-linear'>Register Now</button>
      </div>
    </div>
  );
}

export default Navbar;
