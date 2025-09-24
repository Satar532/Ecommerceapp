import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
 import personIcon from './person.png'
 import passwordicon  from './password.png' 
 import { Logins } from '../Feature';
  import {useNavigate} from 'react-router-dom'
function Login() {
  const navigate=useNavigate()
  const Logined=useSelector(state=>state.Procuct.isLogined)
  const [name,setname]=useState("")
  const [password,setpassword]=useState("");
    const dispatch=useDispatch()
   if(Logined)navigate('/home')

  const submit=(e)=>{
    e.preventDefault()
    dispatch(Logins({name,password}))

  }

  return (
    <div className='container'style={{marginTop:"3em"}}>
        <h2>Login </h2>
        <form>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1 "  aria-describedby="emailHelp" onChange={(e)=>setname(e.target.value)} />
    {!name.length>0 && <img src={personIcon} alt="" style={{position:"relative",bottom:"2em",left:"0.4em"}}  />}
    
          
    <div id="emailHelp" className="form-text">username must should contain capital and specil char</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e)=>setpassword(e.target.value)} />  
    {!password.length>0&& <img src={passwordicon} alt="" style={{position:"relative",bottom:"2em",left:"0.4em"}}  />}
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={(e)=>submit(e)}>Login</button>
  <button type="submit" className="btn btn-primary ms-2">Don't have any account </button>
</form>
      
    </div>
  )
}

export default Login

