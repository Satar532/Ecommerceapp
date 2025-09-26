import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Addtocart } from '../Feature'
import Cart from './Cart'
import {useNavigate} from 'react-router-dom'
export default function FeaturePr() {
  const navigate=useNavigate()
    const TopTrendProduct=useSelector(state=>state.Procuct.PrductList)
    const users=useSelector(state=>state.Procuct.users)

    const isLogined=useSelector(state=>state.Procuct.isLogined)
    const dispatch=useDispatch()
   const addCart=(item)=>{
        if(!isLogined){
          alert("Please first logn");
       navigate('/login')
       return
        }
       dispatch(Addtocart(item))
   }
  return (
    <div style={{opacity:!isLogined?"1":"1"}}>
      <h1> Feature Products</h1>
      <div className="allitem" style={{display:"flex",flexWrap:"wrap",gap:"2em",justifyContent:"center"}}>
      {TopTrendProduct?.map((item,index)=>(
        <>
        

          <div key={index}  className="item" style={{width:"300px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",gap:"3px",boxShadow:"1px 1px 1px 1px gray",marginTop:"3em",padding:'1em'}}  >
            <h5> <span class="badge text-bg-secondary">New</span></h5>
           <img src={item.image}  width="150px" height="140px" alt="" />
             <button style={{width:"100%",padding:"7px 9px",backgroundColor:"black",color:"white",border:"none",fontSize:"17px"}} onClick={()=> addCart({ id:item.id, title:item.title,description:item.description,price:item.price,qty:1,img:item.image})} disabled={!isLogined}> Add to cart</button>
           <p>{item.title}</p>
           <p>{item.description.slice(1,50)}</p>
           <span> Rs: {item.price}</span> 
           <p>Rating:{item.rating.rate}</p>
         </div> 

          </>
          ))}
    </div>          
    
    </div>
  )
}
