import React, { useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Gallery = () => {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        },
      ]; 

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

      return (
        <div id="gallery" className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <h2 className='text-center text-gray-700 mb-4'> Gallery </h2>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
            <BsArrowLeftShort onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
            <BsArrowRightShort onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Gallery