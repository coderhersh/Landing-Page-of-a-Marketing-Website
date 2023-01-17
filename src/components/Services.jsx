import React from 'react'
import ReactPlayer from 'react-player'
import VideoThumbnail from '../assets/video-thumbnail.png';
import PersonOnTheRocket from '../assets/man-on-the-rocket.png';
import {MdCheckCircle} from 'react-icons/md';
import Icon1 from '../assets/pen-icon.svg';
import Icon2 from '../assets/vector-icon.svg';
import Icon3 from '../assets/edit-icon.svg';
import Icon4 from '../assets/prize-icon.svg';

function Services() {
  const ServicesList = [
    [
      {Icon1},
      'Unlimited Customization',
      'Get your blood tests delivered at home collect a sample from the your blood tests.'
    ],
    [
      {Icon2},
      'Vector shape & resizable',
      'Get your blood tests delivered at home collect a sample from the your blood tests.'
    ],
    [
      {Icon3},
      'Editing freedom',
      'Get your blood tests delivered at home collect a sample from the your blood tests.'
    ],
    [
      {Icon4},
      'Best Award history',
      'Get your blood tests delivered at home collect a sample from the your blood tests.'
    ],
  ];

  return (
    <div className='py-20'>
      <div className='flex justify-center'>
        <p className='text-purple-700 text-xl'>Quality features</p>
      </div>

      <div className='flex justify-center pb-10'>
        <p className='my-5 text-3xl font-bold text-gray-900'>Meet exciting feature of app</p>
      </div>

      <div className='flex justify-between mt-5 mb-60'>
        <div className='px-5 py-2'>
          <div className='flex justify-center my-3'>
            <img src={Icon1}/>
          </div>
          <p className='text-2xl py-2 font-semibold'>{ServicesList[0][1]}</p>
          <p className=''>{ServicesList[0][2]}</p>
        </div>

        <div className='px-5 py-2'>
          <div className='flex justify-center my-3'>
            <img src={Icon2}/>
          </div>
          <p className='text-2xl py-2 font-semibold'>{ServicesList[1][1]}</p>
          <p className=''>{ServicesList[1][2]}</p>
        </div>

        <div className='px-5 py-2'>
          <div className='flex justify-center my-3'>
            <img src={Icon3}/>
          </div>
          <p className='text-2xl py-2 font-semibold'>{ServicesList[2][1]}</p>
          <p className=''>{ServicesList[2][2]}</p>
        </div>

        <div className='px-5 py-2'>
          <div className='flex justify-center my-3'>
            <img src={Icon4}/>
          </div>
          <p className='text-2xl py-2 font-semibold'>{ServicesList[3][1]}</p>
          <p className=''>{ServicesList[3][2]}</p>
        </div>

      </div>

      <div className='flex justify-center'>
        <div className='pl-5'>
          <img src={PersonOnTheRocket}/>
        </div>
        <div>
          <h1 className='text-4xl pt-28 font-semibold leading-relaxed'>Boost your agencies by choosing <br/>
          Ninja Developers</h1>
          <p className='text-gray-800 leading-loose pt-3 pb-1'>Create custom landing pages with Shades that convert <br/>
          more visitors than any website, no coding required.</p>
          <div className='flex py-2'>
            <button><MdCheckCircle color='gray' size="15"/></button>
            <p className='pl-2'>Unlimited design possibility</p>
          </div>
          
          <div className='flex py-2'>
            <button><MdCheckCircle color='gray' size="15"/></button>
            <p className='pl-2'>Completely responsive features</p>
          </div>

          <div className='flex py-2'>
            <button><MdCheckCircle color='gray' size="15"/></button>
            <p className='pl-2'>Easy to customize plugins</p>
          </div>

          <div className='mt-2'>
            <a href='#' className='text-purple-800'>Learn More &gt;</a>
          </div>
        </div>
      </div>
      
      <div className='flex justify-center pt-5 text-gray-800 text-3xl font-semibold'>
        <h1>Leading companies trust us <br/>
        to develop software</h1>
      </div>

      <div className='flex justify-center text-lg text-gray-600 pt-7'>  
        <p>We believe it’s important for everyone to have access to software <br/>
        especially when it comes to digital learning be navigate.</p>
      </div>

      <div className='flex justify-center'>
        <a href='#' className='text-purple-800 font-bold py-10'>
          Explore Details &gt;
        </a>
      </div>

      <div className='flex justify-between'>
        <ReactPlayer url="https://www.youtube.com/watch?v=bMknfKXIFA8"
        light={VideoThumbnail}
        style={{borderRadius: '5px'}}
        />
      </div>
    </div>
  )
}

export default Services
