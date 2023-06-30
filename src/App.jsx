import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './component/Hero'
import Header from './component/Header'
import CardWithLogin from './component/CardWithLogin'
import Login from './component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateBurger from './component/create/CreateBurger'
import UpdateBurger from './component/create/UpdateBurger'
import Order from './component/Order'
import AdminPanel from './component/AdminPanel'

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false)

  return (
    <>
          <BrowserRouter>
          <div className='bg-red-100 sticky top-0 z-10'>
                <Header/>
                <div className='flex justify-center'>
                    <div className=' w-[85%] bg-white h-1 '></div>
                </div>
          </div>
          <Routes>
            <Route path='/' element={
            <>
              
              <div className='bg-red-100 w-auto h-[100vh] flex justify-center relative'>
                  <Hero/>
              </div>
              <CardWithLogin/>
         </>
            }/>
             <Route path="/login" element={<Login setUserAuthenticated={setUserAuthenticated} />}/>
             <Route path="/create" element={<CreateBurger />}/>
             <Route path="/update/:id" element={<UpdateBurger />}/>
             <Route path="/order" element={<Order />}/>
             <Route path="/admin-panel" element={<AdminPanel />}/>
          </Routes>
          </BrowserRouter>
      
    </>
  )
}

export default App
