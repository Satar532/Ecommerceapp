import React, { useState } from 'react'
import { countryList } from './Countreis'
import { useDispatch, useSelector } from 'react-redux'
import {  RegisterAcc, removeLoginOut } from '../Feature'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
export default function Signup() {
  const navigate=useNavigate()
  const [name,setname]=useState('')
  const [password,setpassword]=useState()
  const dispatch=useDispatch()
 
  const AlreadyAcc=useSelector(state=>state.Procuct.Alreadyacc)
  console.log(AlreadyAcc)
    function submit (e){
      e.preventDefault()
      dispatch(RegisterAcc({name,password}))
       

    }
    if(AlreadyAcc){
      navigate('/login');
       dispatch(removeLoginOut())
    }  
  return (

    <div className='container ' style={{marginTop:"7em"}}>
      <form action=""/>
        <h3>Sign up</h3>
      <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01"  required  onChange={(e)=>setname(e.target.value)}/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
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
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
   
    <div class="col-md-2">
    <label for="validationCustom03" class="form-label">Password</label>
    <input type="text" class="form-control" id="validationCustom03" required onChange={(e)=>setpassword(Number.parseInt(e.target.value))} />
    <div class="invalid-feedback" >
      
    </div>
  </div>
  </div>
   <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  <div class="col-13 flex d-flex flex-wrap">
    <button class="btn btn-primary" type="submit" onClick={(e)=>submit(e)}>Sign Up</button>
    <button class="btn btn-primary ms-2 mt-2" type="submit"   > <Link style={{color:"white",textDecoration:"none"}} to="/login" > Already have account</Link></button>
  </div>
   </form>
    </div>
  )
}
