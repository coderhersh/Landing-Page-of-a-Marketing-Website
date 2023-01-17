import React from 'react';

function Advert() {
  return (
    <div className='flex justify-around items-center bg-purple-700 rounded-md w-full h-40'> 
      <div className=''>
        <p className='text-3xl text-white font-bold'>Hire the world’s best developers <br/>
          and designers around!</p>
      </div>
      <div className=''>
        <button className='bg-white hover:bg-black text-purple-700 hover:delay-100
        hover:ease-linear-in hover:text-white px-6 py-5 
        rounded-md font-semibold'>HIRE DEVELOPERS</button>
      </div>
    </div>
  );
}

export default Advert;
