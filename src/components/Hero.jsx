import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] '>
        <img src="https://images5.alphacoders.com/372/thumb-1920-372649.jpg" 
        alt="heroimg" 
        className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Travel Up</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta sequi a aperiam suscipit obcaecati, expedita cupiditate voluptate veniam in!</p>
            </div>
        </div>
    </div>
  )
}

export default Hero