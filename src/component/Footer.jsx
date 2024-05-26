import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='text-black p-2 '>
      <div className='p-4 mt-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='col-span-1'>
            <h2 className='group relative inline-block cursor-pointer text-xl font-bold mb-2'>
              Contact Information
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </h2>
            <p>Nairobi, Kenya</p>
            <p>Phone: <a href="tel:+254740513504" className='text-blue-500'>+254 740-513-504</a></p>
            <p>Email: <a href="mailto:josephkaranga0@gmail.com" className='text-blue-500'>josephkaranga0@gmail.com</a></p>
          </div>
          <div className='col-span-1'>
            <h2 className='group relative inline-block cursor-pointer text-xl font-bold mb-2'>
              Follow Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </h2>
            <div className='flex space-x-4'>
              <a href="#" aria-label="Facebook" className='text-black hover:text-[#3361eb]'>
                <FaFacebookF size={24} />
              </a>
              <a href="#" aria-label='Twitter' className='text-black hover:text-blue-400'>
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label='Instagram' className='text-black hover:text-[#833AB4]'>
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className='col-span-1'>
            <h2 className='group relative inline-block cursor-pointer text-xl font-bold mb-2'>
              Get to know Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </h2>
            <p>We are a company dedicated to providing the best products and services to our customers. Follow us on social media to stay updated with our latest news and offers.</p>
          </div>
        </div>
        <div className='mt-8 border-t border-grey-800 pt-4 text-center'>
          <p>&copy; {new Date().getFullYear()} FlexNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer