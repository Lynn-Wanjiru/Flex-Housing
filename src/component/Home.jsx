import Button from '../layouts/button'
import img from '../assets/img/houseimg.jpg'
import Services from './Services';
import About from './About';
import Footer from './Footer';
import React, { useState } from 'react'
import { FcHome } from 'react-icons/fc'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'

const Home = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <div className='fixed w-full z-50 bg-gradient-to-r from-backgroundcolor to-brightcolor shadow-md'> 
        <div className='flex flex-row justify-between p-5 lg:px-32 px-5'>
          <div className='flex flex-row items-center cursor-pointer space-x-2'>
            <FcHome size={35} />
            <h1 className='text-xl font-bold'>Flex Nest</h1>
          </div>

          <nav className='hidden md:flex flex-row items-center text-lg font-medium space-x-8'>
            <a href='#' className='group relative inline-block cursor-pointer hover:text-white'>
              Home
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </a>
            <a href='#services' className='group relative inline-block cursor-pointer hover:text-white'>
              Our Services
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </a>
            <a href='#about' className='group relative inline-block cursor-pointer hover:text-white'>
              About Us
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </a>
            <a href='#contact' className='group relative inline-block cursor-pointer hover:text-white'>
              Contact Us
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </a>
          </nav>

          <div className='hidden lg:flex'>
            <Button title='Login'>Login</Button>
          </div>

          <div className='md:hidden flex items-center'>
            {menu ? (
              <AiOutlineClose size={35} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={35} onClick={handleChange} />
            )}
          </div>
        </div>

        <div className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <ul className='flex flex-col items-center space-y-8'>
            <li>
              <a href='/' className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
                Home
                <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
              </a>
            </li>
            <li>
              <a href='#services' className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
                Our Services
                <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
              </a>
            </li>
            <li>
              <a href='#about' className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
                About Us
                <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
              </a>
            </li>
            <li>
              <a href='#contact' className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
                Contact Us
                <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
              </a>
            </li>
            <li>
              <Button title='Login'>Login</Button>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#cae6f5] to-[#a4e9f1]'>
          <div className='w-full lg:w-2/4 space-y-4'>
            <h1 className='font-semibold text-5xl lg:text-6xl text-center lg:text-start leading-tight max-w-4xl md:mt-4 mt-20'>FlexNest</h1>
            <p className='text-center lg:text-start max-w-4xl'>Efficient housing solution for Tenants and Landlords.</p>
            <p className='text-center lg:text-start max-w-4xl'>Flexible housing options and a comfortable, nurturing environment.</p>
            <div className='flex justify-center lg:justify-start'>
              <Button title='APPLY NOW' />
            </div>
          </div>
          <div className='flex justify-center lg:justify-end'>
            <img src={img} alt='img' style={{ maxWidth: '100%', maxHeight: '15%' }} />
          </div>
        </div>

        {/* our services */}
        <div id='services'>
          <Services />
        </div>

        {/* about us */}
        <div id='about'>
          <About />
        </div>

        {/* contact/footer */}
        <div id='contact'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
