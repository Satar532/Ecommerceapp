import React from 'react'
import Header from '../Header'
// import Footer from '../Extra/Footer'
import Router from '../Router/Router'
import Footer from '../Extra/Footer'
import LoginProflie from '../LoginProflie'
import { useSelector } from 'react-redux'
export default function Layout() {
  const openProfile=useSelector(state=>state.Procuct.ToggleProfile)
  
  return (
    <>
    <Header/>
     {openProfile?<LoginProflie />: null}
    <main>
       {!openProfile? <Router/>:null}
    </main>
  <Footer/>
    

      
    </>
  )
}
