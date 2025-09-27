import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
 import personIcon from './person.png'
 import passwordicon  from './password.png'
 import email from './email.png' 
 import { dismissbtn, Logins } from '../Feature';
  import {useNavigate} from 'react-router-dom'
 import { useForm } from "react-hook-form"
function Login() {
  const [name,setname]=useState('')
  const [password,setpassword]=useState('')
  const [emails,setemail]=useState('')
  const {register,handleSubmit , formState:{errors}}=useForm()
  const navigate=useNavigate()
  const Logined=useSelector(state=>state.Procuct.isLogined)
  const error=useSelector(state=>state.Procuct.errors)
  
    const dispatch=useDispatch()
   if(Logined)navigate('/home')

  const submit=(data)=>{
     const {name,password}=data
    dispatch(Logins({name,password}))

  }

  return (
    <div className='container'style={{marginTop:"3em"}}>
     {error&& <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{error} </strong>
  <button type="button" class="btn-close" onClick={()=>dispatch(dismissbtn())}>X</button>
  </div>}
        <h2>Login </h2>
        <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1 "  aria-describedby="emailHelp" 
    {...register('name',{required:"Name is required",minLength:{value:5,message:"at least 5 char required "}})} onChange={(e)=>setname(e.target.value)}  />
    {!name.length>0 && <img src={personIcon} alt="" style={{position:"relative",bottom:"2em",left:"0.4em"}}  />}
    
          
    <div id="emailHelp" className="form-text">{errors.name&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}}> {errors.name.message}</p>}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    {...register('email',{required:"Email is required",minLength:{value:5,message:"at least 5 char required "}})}
     onChange={(e)=>setemail(e.target.value)}
    />
    {!emails.length>0 && <img src={email} alt="" style={{position:"relative",bottom:"2em",left:"0.4em"}}  />}
    
    <div id="emailHelp" className="form-text">{errors.email&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}}> {errors.email.message}</p>}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2
    "  {...register('password',{required:"password is required",minLength:{value:5,message:"password must  5 char required "}})} onChange={(e)=>setpassword(e.target.value)} autoComplete=''  />  
    {!password.length>0&& <img src={passwordicon} alt="" style={{position:"relative",bottom:"2em",left:"0.4em"}}  />}
    {errors.password&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}}> {errors.password.message}</p>}
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Login</button>
  <button type="submit" className="btn btn-primary ms-2" onClick={()=>navigate('/signup')}>Don't have any account </button>
</form>

      
    </div>
  )
}

export default Login

