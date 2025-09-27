import React, { useEffect, useState } from 'react'
import { countryList } from './Countreis'
import { useDispatch, useSelector } from 'react-redux'
import {  dismissbtn, RegisterAcc, removeLoginOut } from '../Feature'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
 import { useForm } from "react-hook-form"

export default function Signup() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {register,handleSubmit,formState:{errors}}=useForm()
  const AlreadyAcc=useSelector(state=>state.Procuct.Alreadyacc)
  
    function submit (data){
       const {name,password}=data
      dispatch(RegisterAcc({name,password}))
       

    }
    useEffect(() => {
      if(AlreadyAcc){
      navigate('/login');
       dispatch(removeLoginOut())
    }
    }, [AlreadyAcc,navigate,dispatch])
      
  return (

    <div className='container ' style={{marginTop:"7em"}}>
      
        <h3>Sign up</h3>
      <form className="row g-3 needs-noValidate" noValidate onSubmit={handleSubmit(submit)}>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01"   
      {...register('name',{required:"Name is required",minLength:{value:5,message:"at least 5 char required "}})}
    />
    {errors.name&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}}> {errors.name.message}</p>}
    
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02"
    {...register('lname',{required:"Last name is required",minLength:{value:3,message:"at least 3 char required "}})}

    />
    {errors.lname&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.lname.message}</p>}
  
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername"
      {...register('email',{required:"Email is required"})}
      
      />
      {errors.email&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.email.message}</p>}

      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom02" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" 
    {...register('city',{required:"city is required"})}

    />
    {errors.city&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.city.message}</p>}
    
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required 
     defaultValue=""
    >
      <option  >Choose...</option>
       {countryList.map(countries=>(
      <option key={countries} value={countries}>{countries}</option>

       ))}
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" 
    {...register('zip',{required:"zip is required"})}
    />
    {errors.zip&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.zip.message}</p>}
  
  </div>
  <div className="col-12">
   
    <div className="col-md-2">
    <label htmlFor="validationCustom03" className="form-label">Password</label>
    <input type="password" className="form-control" id="validationCustom035"  
    {...register('password',{required:"password is required",minLength:{value:5,message:"password must be 5 char"}

})}
   autoComplete='2' />
    {errors.password&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.password.message}</p>}
  
  </div>
  </div>
   <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
      <label  className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  <div className="col-13 flex d-flex flex-wrap">
    <button className="btn btn-primary" type="submit">Sign Up</button>
    <button className="btn btn-primary ms-2 mt-2" type="submit"   > <Link style={{color:"white",textDecoration:"none"}} to="/login" > Already have account</Link></button>
  </div>
   </form>
    </div>
  )
}
