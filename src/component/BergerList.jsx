import b6 from './../assets/b6.jpg'
import b5 from './../assets/b5.jpg'
import b4 from './../assets/b4.jpg'
import b3 from './../assets/b3.jpg'
import b2 from './../assets/b2.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../service/api'

  export default function BurgertList() {
   
    const[order, setOrder]=useState(false)
    const[products, setProducts]=useState()
    let isAdmin=sessionStorage.getItem('isAdmin')
    let userId=sessionStorage.getItem('userId')
    
  async function Order(burgerId){
    let res=await API.orderedBurger({userId,burgerId});
    if(res.isSuccess){
      alert('You have successfully order your burger')
    }
}
   
   useEffect(()=>{
    const fetchData=async()=>{
        let res=await API.getAllBurger();
        if(res.isSuccess){
            setProducts(res.data)
        }
    }
    fetchData();
},[])
const deleteBurger=async(id)=>{
  const userConsent=confirm("Deleting this Burger!")
  if(userConsent){
    let res=await API.deleteBurger(id)
    if(res.isSuccess){
      alert("This burger is deleted..!")
    }
  }
}
console.log(products)
    return (
      <div className="bg-red-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Select  your burger to oder</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
           
           <div className={`${isAdmin==='true'?'block':'hidden'} aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80`}>
              <Link to='/create' className='flex flex-col justify-center items-center h-full cursor-pointer hover:bg-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"  className=' w-36 h-36'>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className='text-lg font-semibold text-gray-600'>Add your Food Items</div>
            </Link>
           </div>
            
            {products?.map((product) => (
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
                    <button onClick={()=>Order(product._id)}
                    className={`${isAdmin==='true'?'hidden':'block'} px-8 py-1 rounded-full bg-blue-600 text-lg font-semibold hover:bg-blue-700 text-white`} >Order </button>
                    <Link to={`update/${product._id}`} className={`${isAdmin!=='true'?'hidden':'block'} px-10 py-1 rounded-full bg-green-600 text-lg font-semibold hover:bg-green-800 text-white`} >Edit</Link>
                    <button onClick={()=>deleteBurger(product._id)}
                    className={`${isAdmin!=='true'?'hidden':'block'} px-8 py-1 rounded-full bg-red-600 text-lg font-semibold hover:bg-red-800 text-white`} >Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  