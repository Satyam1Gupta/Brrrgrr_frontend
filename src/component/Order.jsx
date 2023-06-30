import React,{useState,useEffect} from 'react'
import { API } from '../service/api'

export default function Order() {
    const[burgers,setBurgers]=useState([])

    let userId=sessionStorage.getItem('userId')
    console.log(userId)
    useEffect(()=>{
        const getOrder=async()=>{
            let res=await API.getBurger(userId)
            if(res.isSuccess){
                setBurgers(res.data.burgerId)
            }
        }
        getOrder();
    },[])
  return (
    <div className='bg-red-100'>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Your Orders</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        {burgers?.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none  lg:h-80">
                  <img
                    src={product.picture}
                   
                    className="hover:opacity-75 h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg mb-2 text-gray-700">
                        {product.name}
                    </h3>
                  </div>
                  <p className="text-2xl font-medium text-gray-900">₹{product.price}</p>
                </div >
                <div className='flex justify-center space-x-2'>
                    <button 
                    className={` px-8 py-1 rounded-full bg-blue-600 text-lg font-semibold hover:bg-blue-700 text-white`} >Cancel Order </button>
                   
                </div>
              </div>
            ))}
         </div>
      </div>

    </div>
  )
}
