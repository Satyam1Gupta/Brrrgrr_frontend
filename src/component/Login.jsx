import React,{useState, useEffect} from 'react'
import { API } from '../service/api';
import{useNavigate} from 'react-router-dom'

import car from './../assets/car.jpg'

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const signUpInitialValue={
    name:'',
    username:'',
    password:'',
    isAdmin:false
    };
export default function Login({setUserAuthenticated}) {

    const navigate=useNavigate();

    const[isRegister, setIsRegister]=useState(false)
    const[signUp,setSignUp]=useState(signUpInitialValue);
   const[login,setLogin]=useState({username:'',password:''})

    function registerClick(){
        isRegister?setIsRegister(false): setIsRegister(true)
    }
    
   const onChangeInput=(e)=>{
    //console.log(e.target.name, e.target.value);
    setSignUp({...signUp,[e.target.name]:e.target.value});
  }
  
  const onChangeValue=(e)=>{
     setLogin({...login,[e.target.name]:e.target.value});
    }

   //console.log(signUp);
   const signupUser=async()=>{
    let res= await API.userSignup(signUp);
    //let re= res.json();
    console.log(res);
    if(res.isSuccess){
      setSignUp(signUpInitialValue);
      alert("You have successfully registered!")
    } else{
     setError('Something went wrong, please try again later...!')
    }
   }

   const loginUser=async()=>{
    let res=await API.userLogin(login);
    if(res.isSuccess){

      sessionStorage.setItem('accessToken',`${res.data.accessToken}`);
      sessionStorage.setItem('refreshToken',`Bearer${res.data.refreshToken}`);
      sessionStorage.setItem('name',res.data.name);
      sessionStorage.setItem('userId',res.data.userId);
      sessionStorage.setItem('isAdmin',res.data.isAdmin);
    alert('You have successfully logged in!')
      setUserAuthenticated(true);

      navigate('/')

    } else{
     setError('Something went wrong, please try again later...!')
    }
   }

  return (
    <div>
      <div className="flex justify-center my-16 ">
        <div className="flex m-16 md:m-1 flex-col justify-center items-center md:flex-row shadow rounded-xl md:w-[80%] lg:w-[60%] h-96 md:h-[33rem]">
            <div className=" hidden md:block h-[94%] w-full   bg-center  bg-cover rounded-lg"
                 style={{backgroundImage:`url(${car})`}}
                >
                <div className="text-lg lg:text-xl text-center mt-16 space-x-5"> 
                    <a href="#">
                        <i className="fa-brands fa-facebook-f text-blue-500  bg-white rounded-full px-[14px] py-[10px] " ></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-twitter text-cyan-400 bg-white rounded-full px-[10px] py-[10px] "></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-google-plus-g text-red-500 bg-white rounded-full px-[10px] py-[10px] "></i>
                    </a>
                </div>
                <div onClick={registerClick} className="text-white text-base font-semibold text-center my-10 space-y-2">
                    <h1 className="">{isRegister? "Already registered" :"Don't have an account ?"}</h1>
                     <button  className="underline underline-offset-4 tracking-wide hover:text-blue-400">{isRegister? "Login" :"Signup"}</button>
                </div>

            </div>
            {
                isRegister &&
                <div className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-t from-blue-950 via-blue-500 to-violet-400">
                <div className=" md:w-auto w-[90%]  p-8 rounded-xl  flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
                    <div className="text-xl  flex flex-col justify-center items-center ">
                        <h1 className="font-semibold text-3xl text-gray-200 ">Register</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center  md:mt-1 space-y-1 md:space-y-1">
                        <div className="">
                            <div className="m-1 text-lg text-gray-200 text-semibold">Name</div>
                            <input type="text" name='name' onChange={(e)=>onChangeInput(e)}
                                className="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                        </div>
                        <div className="">
                            <div className="m-1 text-lg text-gray-200 text-semibold">Username/Email</div>
                            <input type="text" name='username' onChange={(e)=>onChangeInput(e)}
                                className="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                        </div>
                        <div className="">
                            <div className="m-1 text-lg text-gray-200 text-semibold">Password</div>
                            <input type="password" name='password'onChange={(e)=>onChangeInput(e)}
                                className="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                        </div>
                        
                    </div>
                    <div className="text-center mt-4">
                        <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-full text-white bg-gradient-to-t from-stone-900
                         via-purple-900 to-violet-600  font-medium"onClick={()=>signupUser()}>REGISTER</button>
                    </div>
                </div>
                <div className="text-center my-6 flex flex-col">
                    <div className='text-gray-200 text-sm font-semibold'> Registered User?</div>
                    <button onClick={registerClick} className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                        Login here
                    </button>
                </div>
            
            </div> 
            }
            {
                !isRegister &&
            <div className="flex flex-col justify-center items-center rounded-lg bg-gradient-to-t from-blue-950 via-blue-500 to-violet-400">
            <div className=" md:w-auto w-[90%]  p-8 rounded-xl  flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
                <div className="text-xl  flex flex-col justify-center items-center ">
                    <h1 className="font-semibold text-3xl text-gray-200 m-2">Log In</h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                    <div className="">
                        <div className="m-1 text-lg text-gray-200 text-semibold">Username/Email</div>
                        <input type="text" name='username'onChange={(e)=>onChangeValue(e)}
                            className="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                    </div>
                    <div className="">
                        <div className="m-1 text-lg text-gray-200 text-semibold">Password</div>
                        <input type="password" name='password'onChange={(e)=>onChangeValue(e)}
                            className="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                    </div>
                    
                </div>
                <div className="text-center mt-7">
                    <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-full text-white bg-gradient-to-t from-stone-900
                     via-purple-900 to-violet-600  font-medium" onClick={()=>loginUser()}>LOGIN</button>
                </div>
            </div>
            <div className="text-center my-6 flex flex-col">
                <div className='text-gray-200 text-sm font-semibold'> Not a User?</div>
                <button onClick={registerClick} className="text-lg font-bold text-gray-400 hover:text-violet-500 m-1">
                    Create New Account
                </button>
            </div>
        
        </div> 
         }
        </div>
    </div>                            
    </div>
  )
}


