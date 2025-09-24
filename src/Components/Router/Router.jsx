import React from 'react'
import { Routes,Route } from 'react-router-dom'
 import Home from '../Home'
 import Aboutus from '../Aboutus'
 import Product from '../Product'
 import Shop from '../Shop'
 import Cart from '../Cart'
 import Signus from '../Signup'
import Login from '../Login'
import PageNotfound from '../PageNotfound'



export default function Router() {
  return (
    <>
    
    <Routes>
      
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/about' element={<Aboutus/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/signup' element={<Signus/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='*' element={<PageNotfound/>}/>

   </Routes>
    
    </>
  )
}
