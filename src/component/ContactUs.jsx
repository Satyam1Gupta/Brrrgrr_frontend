import React from 'react'

export default function ContactUs() {
  return (
    <div>
        <div id="contact"className="flex justify-center my-16">
<div className="flex md:flex-row flex-col justify-center max-w-6xl m-4 ">
    <div className="lg:w-1/2 bg-black ">
        <div className="flex justify-center flex-col items-center">
            <div className="text-white m-6 text-xl z-200"> Contact Us </div>
            <div className="text-white p-5 z-200"> We are always here to help out whatever way we can :) </div>
            <div className="text-white m-6 z-200">
                <div className="flex m-2">
                    <ion-icon name="person-outline" className="m-"></ion-icon> <input placeholder="Name"
                        className="bg-gray-800 p-2 rounded-3xl"/>
                </div>
                <div className="flex m-2">
                    <ion-icon name="mail-outline" className="m-"></ion-icon> <input placeholder="E-mail"
                        className="bg-gray-800 p-2 rounded-3xl"/>
                </div>
                <div className="flex m-2">
                    <ion-icon name="call-outline" className="m"></ion-icon> <input placeholder="Phone"
                        className="bg-gray-800 p-2 rounded-3xl"/>
                </div>
                <div className="flex m-2">
                    <ion-icon name="create-outline" className="m-"></ion-icon> <input
                        placeholder="Type your message" className="bg-gray-800 p-2 rounded-3xl"/>
                </div>
                <div className="block m-2justify-center">
                    <div className="bg-blue-700 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer ">
                        <div className="flex justify-center"> Send </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-6/7 lg:w-3/4 ">
        <div className="w-3/4 lg:w-1/2 overflow-contain h-min"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1456.2250226711674!2d92.75068003799153!3d24.684913069241265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m3!3m2!1d24.6849301!2d92.7507605!4m0!5e1!3m2!1sen!2sin!4v1687976248847!5m2!1sen!2sin"
            className='w-[380px] h-[400px] md:w-[500px] md:h-[500px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
    </div>
</div>
</div>
</div>
  )
}
