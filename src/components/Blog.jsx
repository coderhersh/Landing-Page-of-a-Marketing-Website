import React from 'react';
import {BsFillChatLeftDotsFill} from "react-icons/bs";

export default function Blog({image, heading, numberOfComments}) {
  return (
    <div>
      <div className='w-full'>
        <img src={image}/>
      </div>
      <div className='mx-8 mt-8'>
        <p className='font-bold text-xl'>{heading}</p>
        <div className='flex mt-4'>
            <button><BsFillChatLeftDotsFill color='gray'/></button>
            <p className='ml-4 text-gray-500'>{numberOfComments} Comments</p>
        </div>
      </div>
    </div>
  );
}
