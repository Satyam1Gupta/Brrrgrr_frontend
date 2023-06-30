'use client';

import { Button, Card } from 'flowbite-react';
import Contact from './Contact'
import Footerr from './Footer';
import ContactUs from './ContactUs';
import BurgertList from './BergerList';
import { Link } from 'react-router-dom';

export default function CardWithLogin({isAdmin}) {
  return (
<div id="about"className=' bg-red-100'>
   <div className='flex flex-col justify-evenly md:flex-row p-5'>
     <Card className="max-w-4xl rounded-xl md:ml-14">
      <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        <h4>
        Discover Brrrgrrr: <span className='text-blue-500'>The Ultimate Burger Ordering Website</span>
        </h4>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <p className='text-lg '>
        Introducing Brrrgrrr, the ultimate burger ordering website! With a diverse menu and customizable options, Brrrgrrr lets you create your 
        perfect burger with just a few clicks. Whether you prefer classic cheeseburgers or spicy alternatives, Brrrgrrr has something for everyone.
         Enjoy a user-friendly experience, choose delivery or pickup, and rest assured knowing your personal information is secure. Visit Brrrgrrr 
         today and embark on a mouthwatering burger journey like never before.
        </p>
      </div>
    
    </Card>
   
   </div>
  {/* Burger list for order*/}
   
    <div>
      <BurgertList/>
    </div>
   
    {/* Contact Us */}
    <Contact/>
    <ContactUs/>
    <Footerr/>
</div>
  )
}


