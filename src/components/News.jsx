import React from 'react'
import Blog from "../components/Blog";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";

function News() {
  return (
    <div className='flex-col mt-20'>
      
      <div className='flex justify-center'>
        <p className='text-purple-700 text-xl'>Quality features</p>
      </div>

      <div className='flex justify-center'>
        <p className='mt-5 text-3xl font-bold'>Tutorials that people love most</p>
      </div>
      
      <div className='flex justify-between pt-16 pb-20'>
        <Blog image={Image1} heading="How to work with prototype design with adobe xd featuring tools" 
          numberOfComments = "22"
        />
        <Blog image={Image2} heading="Create multiple artboard by using figma prototyping development" 
          numberOfComments = "15"
        />
        <Blog image={Image3} heading="Convert your web layout theming easily with sketch zeplin extension" 
          numberOfComments = "12"
        />
      </div>
    
    </div>
  );
}

export default News;
