import React, { useState } from 'react'
import { countryList } from './Countreis'
import { useDispatch, useSelector } from 'react-redux'
import {  RegisterAcc, removeLoginOut } from '../Feature'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
 import { useForm } from "react-hook-form"

export default function Signup() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {register,handleSubmit,formState:{errors}}=useForm()
  const AlreadyAcc=useSelector(state=>state.Procuct.Alreadyacc)
  console.log(AlreadyAcc)
    function submit (data){
       const {name,password}=data
      dispatch(RegisterAcc({name,password}))
       

    }
    if(AlreadyAcc){
      navigate('/login');
       dispatch(removeLoginOut())
    }  
  return (

    <div className='container ' style={{marginTop:"7em"}}>
      
        <h3>Sign up</h3>
      <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit(submit)}>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01"   
      {...register('name',{required:"Name is required",minLength:{value:5,message:"at least 5 char required "}})}
    />
    {errors.name&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}}> {errors.name.message}</p>}
    
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02"
    {...register('lname',{required:"Last name is required",minLength:{value:3,message:"at least 3 char required "}})}

    />
    {errors.lname&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.lname.message}</p>}
  
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername"
      {...register('email',{required:"Email is required"})}
      
      />
      {errors.email&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.email.message}</p>}

      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" 
    {...register('city',{required:"city is required"})}

    />
    {errors.city&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.city.message}</p>}
    
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required onClick={(e)=>console.log(e)}>
      <option selected disabled value="">Choose...</option>
       {countryList.map(countries=>(
      <option key={countries} value={countries}>{countries}</option>

       ))}
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" 
    {...register('zip',{required:"zip is required"})}
    />
    {errors.zip&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.zip.message}</p>}
  
  </div>
  <div class="col-12">
   
    <div class="col-md-2">
    <label for="validationCustom03" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationCustom03"  
    {...register('password',{required:"password is required",minLength:{value:5,message:"password must be 5 char"}

})}
    />
    {errors.password&&<p style={{color:"red",fontSize:"15px",fontWeight:"570"}} > {errors.password.message}</p>}
  
  </div>
  </div>
   <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  <div class="col-13 flex d-flex flex-wrap">
    <button class="btn btn-primary" type="submit">Sign Up</button>
    <button class="btn btn-primary ms-2 mt-2" type="submit"   > <Link style={{color:"white",textDecoration:"none"}} to="/login" > Already have account</Link></button>
  </div>
   </form>
    </div>
  )
}
