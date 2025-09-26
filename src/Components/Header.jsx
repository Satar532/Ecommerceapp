import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.webp'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../Feature'
  import ProfileImg from './ProfileImg'
  import './Index.css'
export default function Header() {
  const lengths=useSelector((state)=>state.Procuct.leng)
  const Islogined=useSelector((state)=>state.Procuct.isLogined)
   const dispatch=useDispatch()
  const [theme,settheme]=useState('white')
   const Tooglethem=()=>{
       if(theme==="white"){
        settheme('black')
        document.querySelector('body').style.backgroundColor='black'
        document.querySelector('body').style.color='white'
       }
       else{
        settheme("white")
        document.querySelector('body').style.backgroundColor='white'
        document.querySelector('body').style.color='black'
        
       }
    
      }
      useEffect(() => {
    
      }, [theme])
  
  return (
    <div style={{display:""}}>

    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"
      ,alignItems:"center",fontSize:"17px",fontWeight:"600",cursor:"pointer",position:"fixed",zIndex:"100",marginTop:"-26px",backgroundColor:"white",border:"1px solid white",width:"100%",boxShadow:"0.1px 0.1px 1px 1px gray",}}>
      <div classNameName="logo"><img src={logo} alt="" width="100px" height="70px" style={{zIndex:"100"}} /></div>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:"white"}}>
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">  <Link className="nav-link active" to="/about">about</Link> </li>
        <li className="nav-item">  <a className="nav-link active" href="/product">Contact us</a> </li>
        
        
              </ul>
      
    
  <div classNameName="profileArea"style={{display:"flex",justifyContent:'space-between',paddingRight:"2em",gap:"24px",alignItems:"center"}}> <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={()=>Tooglethem()} />
  <label className="form-check-label" htmlFor="switchCheckDefault"></label>
</div>
<Link to="/cart"><i className='fas fa-cart-plus' style={{fontSize:"28px",color:"red ",  }} id='icon'  ><button type="button" className="btn  position-relative">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill "style={{backgroundColor:lengths===0?"white":"red"}}>

    <span className="visually-hidden" >unread messages</span>
    {lengths}
  </span>
</button>    </i></Link>
  {!Islogined ?  <> <button  className='signup_btn'  style={{padding:"8px 20px",height:"39px",backgroundColor:"#E11D48",border:"none",color:"white",fontSize:"17px",boxShadow:"0.1px 0.1px 0.1px 0.1px gray",borderRadius:"3px"}}> <Link to="/signup" style={{textDecoration:"none",color:"white"}} >  Sign Up</Link></button>
  <button  style={{padding:"0px 6px",height:"37px",border:"none",color:"red",backgroundColor:'white',fontWeight:"550"}}> <Link to='/login'style={{textDecoration:"none"}} > Sign In</Link>  <i className="fas fa-sign-in  text-black"></i> </button></> :<> <ProfileImg/>  <button style={{padding:"8px 20px",height:"39px",backgroundColor:"#E11D48",border:"none",color:"white",fontSize:"17px",boxShadow:"0.1px 0.1px 0.1px 0.1px gray",borderRadius:"3px"}} onClick={()=> dispatch(Logout()) } > Logout </button> </>}
  
  </div>
  </div>
  </div>
</nav>
    </div>
    <hr style={{position:"relative",bottom:"0.8em"}}/>
  
    </div>
  )
}
