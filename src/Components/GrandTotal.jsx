import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
 import { useDispatch } from 'react-redux'
import { AddtoDB } from './OrderSlice/Orderclice'
export default function GrandTotal() {
  
    const Cartproduct=useSelector(state=>state.Procuct.users)
    const currentuser=useSelector(state=>state.Procuct.currentuser)
       const user=Cartproduct.find(user=>user.name===currentuser)

     const TotalPrice=()=>user.Carts.reduce((sum,item)=>sum+item.price*item.qty,0)
  return (

    <div style={{display:"Flex",justifyContent:"center",paddingRight:"3em",fontWeight:"normal",fontFamily:"revert-layer",flexDirection:"column",alignItems:"center",marginTop:"1em ",flexWrap:"wrap"}}>
        <div className="formHangle" style={{width:"400px",padding:"0px 9px",boxShadow:"1px 1px 1px 1px gray"}}>
            <h2> Order Form</h2>
        <form style={{display:"flex",flexDirection:"column",rowGap:"0.7em"}}>
         <label htmlFor="name"> Name</label>
          <input type="text" placeholder='Enter ur name ' id='name' required  style={{padding:"9px"}}/>
          <label htmlFor="add"> Address</label>
          <input type="text" placeholder='Enter ur address ' id='add'style={{padding:"9px"}} />
          <label htmlFor="course">Select Your City </label>
          <select id='course' name='course' style={{padding:"9px"}}> 
           <option value="">Chose Course </option>
           <option value="pesh">Kpk </option>
           <option value="lhr">Lahore </option>
           <option value="lhr">Karchi </option>
           <option value="lhr">Quetta </option>
          </select>
          

        </form>
      <div className="price">
         <h5> Total Product {Cartproduct?.length} </h5>
         <p>Discount 50 :</p>
         <h3> Total Price :{TotalPrice()} </h3>
        </div> 
        </div> 
    </div>
  )
}
