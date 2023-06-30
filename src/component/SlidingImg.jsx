'use client';
import b1 from './../assets/b1.jpg'
import b2 from './../assets/b2.jpg'
import b3 from './../assets/b3.jpg'
import b4 from './../assets/b4.jpg'
import b5 from './../assets/b5.jpg'
import b6 from './../assets/b6.jpg'
import { Carousel } from 'flowbite-react';

export default function SlidingImg() {
  return (
   <>
     <Carousel className='-mt-16 p-5 sm:w-3/4 sm:h-3/4  sm:mt-10' >    
      <img
      className='rounded-lg'
        alt="..."
        src={b1}
      />
      <img
      className='rounded-lg'
        alt="..."
        src={b2}
      />
      <img
      className='rounded-lg'
        alt="..."
        src={b4}
      />
      <img
      className='rounded-lg'
        alt="..."
        src={b3}
        />
      <img
        alt="..."
        src={b5}
      />
    
    
    </Carousel>
    </>
  )
}


