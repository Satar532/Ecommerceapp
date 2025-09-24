import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addtocart, Rangeapply, SortlowtoHigh } from '../Feature'

export default function Shop() {
    const [range,setrange]=useState(20)
      const dispatch= useDispatch()
      const RangeSerData=useSelector(state=>state.Procuct.rangeData)
      const StoreCatgory=useSelector(state=>state.Procuct.PrductList)
      // console.log(RangeSerData)
        const Catogery=["men's clothing","jewelery","electronics","women's clothing"]
      useEffect(() => {
      dispatch(Rangeapply(range))
             
      }, [range])
      
      // const Catgory=
  
      const RangeSearchData=useSelector(state=>state.Procuct.rangeData)
      const addCart=(item)=>dispatch(Addtocart(item))     

  return (
    <div style={{marginTop:"12em",display:"flex",columnGap:"1em",flexWrap:"wrap",rowGap:"4em"}}>
       <div id="pricerange" className="item" style={{border:"1px solid white",width:"330px",height:"340px",display:"flex",flexDirection:"column",gap:"3em",boxShadow:'1px 1px 1px 1px gray'}}>
        <div className="range" style={{display:"flex",justifyContent:"flex-start",gap:"1em",paddingLeft:"0.6em",}} >
        <label htmlFor="range">Range</label>
     <input type="range" name="range" id="range" min={0}  max={1000}  onChange={(e)=>setrange(e.target.value) } value={range} style={{border:"1px solid red",backgroundColor:"red",width:"200px"}}/> Rs {range}
         </div>
         <div>
     {Catogery.map((Ctgr,index)=>(
     <ul key={index}>
      <li style={{listStyle:"none",cursor:"pointer",color:"blue"}} onClick={()=>dispatch(Rangeapply(Ctgr))}>{Ctgr} </li>
     </ul>

     ))}
     </div>
     <div className="Sorting">
      <label htmlFor="sort">Choose Sort</label>
      <select id='sort' onChange={(e)=>dispatch(SortlowtoHigh(e.target.value))}>
        <option value="">Select Sort</option>
        <option value="low to high" >Low To High</option>
        <option value="high to low">Hight To Low</option>
      </select>
     </div>

       </div>
       <div id="product" className="item" style={{border:"1px solid white",width:"850px",display:"flex",flexWrap:"wrap",justifyContent:"center",rowGap:"3em",gap:"16px"}}>
         {RangeSerData.map((item,index)=>(
         <div key={index} className="item" style={{width:"270px",border:"1px solid white",padding:"10px 7px",boxShadow:"1px 1px 1px 1px gray",gap:"2em", }}>
             <div className="image" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
             <img src={item.image}  width="150px" height="140px" alt="" />
             </div>
             <button style={{width:"100%",padding:"7px 9px",backgroundColor:"black",color:"white",border:"none",fontSize:"17px"}} onClick={()=> addCart({ id:item.id, title:item.title,description:item.description,price:item.price,qty:1,img:item.image})}> Add to cart</button>
           <p>{item.title}</p>
           <p>{item.description.slice(1,50)}</p>
           <span> Rs: {item.price}</span> 
           <p>Rating:{item.rating.rate}</p>

         </div>

         ))}

       </div>

        </div>
  )
}
