import React,{useState,useEffect} from 'react'
import { API } from '../../service/api'
import { useNavigate } from 'react-router-dom';

import b2 from './../../assets/b2.jpg'


const initialPost={
 name:'',
 price:'',
 picture:'',
  createDate:new Date()
};
export default function CreateBurger() {

  const [post,setPost]=useState(initialPost);
  const[file,setFile]=useState('');
  const navigate=useNavigate();
  
  
  const handleChange=(e)=>{
      setPost({...post,[e.target.name]:e.target.value})
     
  }

  const savePost=async()=>{
     const res=  await API.createBurger(post);
     if(res.isSuccess){
      navigate('/')
     }
  }

  useEffect(()=>{
      const getImage=async()=>{
          if(file){
              const data=new FormData();
              data.append('name',file.name);
              data.append('file',file);
               //API CALL
               console.log(file);
               const response= await API.uploadFile(data);

              post.picture=response.data;
          }
      }
      getImage();
  },[file])
console.log(post)
  const url=post.picture?post.picture:b2
  
  return (
    <div className=' p-5 w-full '>
      <div className='flex flex-col items-center space-y-8'>
        <img className=' p-4 md:w-4/5 md:h-80'
        src={url} alt="" />
        <div className='flex flex-col md:flex-row md:space-x-6'>
          <div>
            <p>Berger Image</p>
            <input type="file" name='file' 
            className='mt-2' 
            onChange={(e)=>setFile(e.target.files[0])}
            />
          </div>
          <input type="text" name='name' className='h-10 mt-6'
          placeholder='Burger Name/variant'
          onChange={(e)=>handleChange(e)}
          />
          <input type="text" name='price' className='h-10 mt-6'
          placeholder='Price... '
          onChange={(e)=>handleChange(e)}
          />
          <button onClick={()=>savePost()}
          className='h-10 rounded-full mt-4 px-8 py-2 bg-blue-600 hover:bg-blue-800 text-white font-bold'>POST</button>
        </div>
      </div>
      
    </div>
  )
}
