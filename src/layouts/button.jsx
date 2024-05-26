import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className='px-6 py-1 border-white bg-[#85f7cb] hover:text-white transition-all duration-300 rounded-full'>
        {props.title}
      </button>
    </div>
  );
}

export default Button;

