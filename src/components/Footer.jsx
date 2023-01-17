import React from 'react';
import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className='flex justify-between self-center mb-10 py-10'>
      <div className='flex justify-between items-center'>
        <div><img src={Logo} alt='Startup Landing'/></div>
        <div><p className='ml-5'>© 2023 All right reserved - Design & Developed by RedQ, Inc</p></div>
      </div>
      <div className='flex self-center'>
        <button className='mx-4 hover:text-purple-600 hover:delay-300 hover:ease-in-out'><h1>Home</h1></button>
        <button className='mx-4 hover:text-purple-600 hover:delay-300 hover:ease-in-out'><h1>Advertise</h1></button>
        <button className='mx-4 hover:text-purple-600 hover:delay-300 hover:ease-in-out'><h1>Supporters</h1></button>
        <button className='mx-4 hover:text-purple-600 hover:delay-300 hover:ease-in-out'><h1>Marketing</h1></button>
        <button className='mx-4 hover:text-purple-600 hover:delay-300 hover:ease-in-out'><h1>FAQs</h1></button>
      </div>
    </div>
  );
}

export default Footer;
