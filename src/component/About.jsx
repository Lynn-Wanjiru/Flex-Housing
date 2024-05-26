import React from 'react'
import img from '../assets/img/about.jpg'
import Button from '../layouts/button'

const About = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-r from-[#b5dbef] to-[#ebf4f5]'>
      <h1 className='font-semibold text-center text-black text-4xl lg:mt-14 mb-8'>About Us</h1>
      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4'>
          <img className='rounded-lg w-full lg:h-auto' src={img} alt='About Us' />
        </div>
        <div className='w-full lg:w-2/4 p-4 space-y-3'>
          <h2 className='font-semibold text-3xl'>What makes our services and houses special</h2>
          <p>We provide exceptional services and beautifully crafted houses.</p>
          <p>Our attention to detail sets us apart from the rest.</p>
          <Button title='Learn More'>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default About