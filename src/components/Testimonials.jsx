import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import PersonUsingPhone from "../assets/person-using-phone.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Testimonials() {
  return (
    <div className='flex-col my-20'>
      <div className='flex justify-center'>
        <p className='text-purple-700 text-xl'>Customer Comments</p>
      </div>

      <div className='flex justify-center'>
        <p className='mt-5 text-3xl font-bold text-gray-900'>Why customers love us</p>
      </div>

      <TestimonialSlider />

      <div className='flex'>
        <div className='flex-col w-5/12 pt-60'>
          <div>
            <h1 className='text-3xl font-bold pb-3 text-gray-900'>
              Free Customer Support to <br /> ensure what you like to expect</h1>
            
            <p className='pt-5 text-gray-800 leading-loose text-lg'>
              We offer a risk-free trial period of up to two weeks. You will only <br /> have to pay if
              you are happy with the developer and wish to <br /> continue. If you are unsatisfied, we’ll
              refund payment or fix <br /> issues on our dime period customers.
            </p>

            <p className='text-gray-500 py-5 text-lg'>
              If you are happy with the developer and wish to continue.
              If you <br /> are unsatisfied, we’ll refund payment or fix issues.
            </p>
          </div>

          <div className='flex self-center'>
            <a href='#' className='text-purple-800 font-bold'>Learn More</a>
            <button><MdOutlineKeyboardArrowRight size='24' color='purple' /></button>
          </div>

        </div>

        <div className='w-7/12 pl-16'>
          <img src={PersonUsingPhone} />
        </div>

      </div>

    </div>
  )
}

export default Testimonials
