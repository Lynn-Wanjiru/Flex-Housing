import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='p-8 pt-28  bg-gradient-to-r from-[#cae6f5] to-[#a4e9f1]'>
      <h1 className='text-3xl font-semibold text-center pb-10 mb-8'>Our Services</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 '>
        <ServicesCard
          title='Housing Management'
          description='Our housing management service ensures that your property is well-maintained, tenants are satisfied, and all legal requirements are met.'
        />
        <ServicesCard
          title='Real-Time Market Visibility'
          description="With our real-time market visibility, you'll have access to up-to-date information on market trends, allowing you to make informed decisions."
        />
        <ServicesCard
          title='Fair Pricing'
          description='We ensure fair pricing for both tenants and property owners, based on market conditions and property value, fostering trust and satisfaction.'
        />
        <ServicesCard
          title='Transparent Communication'
          description='Transparent communication is at the core of our service, ensuring that all stakeholders are informed and involved throughout the property management process.'
        />
      </div>
    </div>
  );
};

export default Services