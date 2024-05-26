import React from 'react'

const ServicesCard = ({title,description}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100 cursor-pointer'>
      <h2 className='text-x1 font-semibold mb-2'>{title}</h2>
      <p className='text-gray-600'>{description}</p>
    </div>
  )
}

export default ServicesCard