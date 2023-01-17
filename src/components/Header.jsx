import React from 'react';
import PersonSittingOnChair from "../assets/person-sitting-on-chair.png";
import PayPal from "../assets/paypal.png";
import Google from "../assets/google.png";
import DropBox from "../assets/dropbox.png";

function Header() {
  return (
    <div className=''>
      <div className='flex pt-2 pb-20'>
        <div className='flex flex-col justify-end w-5/12 pb-10'>
          
          <div className='py-5 text-5xl text-gray-900 font-semibold'>
            <p>Great software is built with amazing developers</p>
          </div>
          
          <div className='py-5 my-4 text-xl font-normal'>
            <p>We help build and manage a team of world-class
            developers to bring your vision to life</p>
          </div>
          
          <div className='flex h-12 w-fit'>
            <input className='px-6 py-3 mr-2 bg-white rounded-md outline-none' placeholder='Subscribe newsletter'/>
            <div>
              <button className='flex justify-center content-center px-5 py-2 
                rounded-md text-white text-xl font-semibold 
                bg-purple-800 hover:bg-purple-900 hover:ease-linear'>Subscribe</button>
            </div>
          </div>
          
          <div className='flex pt-20 pb-10'>
            <p className='text-black-100'>Sponsored by: </p>
            <img className='px-3' src={PayPal} alt='PayPal'/>
            <img className='px-3' src={Google} alt='Google'/>
            <img className='px-3' src={DropBox} alt='DropBox'/>
          </div>

        </div>
        
        <div className='w-7/12 pr-8 '>
          <img src={PersonSittingOnChair} />
        </div>

      </div>
      
    </div>
  )
}

export default Header;
