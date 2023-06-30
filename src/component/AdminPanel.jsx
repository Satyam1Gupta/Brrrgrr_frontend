import React,{useEffect,useState} from 'react'
import { API } from '../service/api'

export default function AdminPanel() {
    const[burgers,setBurgers]=useState([])

    useEffect(()=>{
        const getOrder=async()=>{
            let res=await API.getBurgerWithCustomerDetail()
            if(res.isSuccess){
                setBurgers(res.data)
                console.log(res.data)
            }
        }
        getOrder()
    },[])
  return (
    <div >
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className=" md:text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    S. No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Customer Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Food Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
       {
        burgers.map((customer)=>(
           customer.burgerId.map((burger,index)=>(
            <tbody key={burger._id} >
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {index+1}
                </th>
                <td className="px-6 py-4">
                    {customer.customerId.name}
                </td>
                <td className="px-6 py-4">
                {customer.customerId.username}
                </td>
                <td className="px-6 py-4">
                    {burger.name}
                </td>
                <td className="px-6 py-4">
                ₹{burger.price}
                </td>
            </tr>
        </tbody>
           ))
        ))
       }
    </table>
</div>

    </div>
  )
}
