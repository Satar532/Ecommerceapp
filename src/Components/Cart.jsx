
import { useDispatch, useSelector } from 'react-redux'
import { FetchDate } from '..'
import { Remove, restlength, updateqty } from '../Feature'
import GrandTotal from './GrandTotal'
export default function Cart() {
  const CartData=useSelector(state=>state.Procuct.users);
  const currentuser=useSelector(state=>state.Procuct.currentuser)
      const Loginuser=CartData?.find(item=>item?.name===currentuser)
  const dispatch=useDispatch()
  dispatch(restlength())
    const TotalPrice=(item)=>item.qty*item.price
  return (
       Loginuser?.Carts?.length>0?(
        
       
    <>     
        <table style={{width:"100%",border:"1px solid white",paddingRight:"5em",paddingLeft:"4em",overflowX:"auto",display:"flex",flexDirection:"column"}}>
        <thead style={{backgroundColor:"blue",color:"white"}} >
          <tr style={{display:"flex",justifyContent:"space-between",padding:"9px, 0px",textAlign:"center",height:"30px",flexDirection:"column"}}>
          <th> Img</th>
          <th> Product Name</th>
          <th> Product Desc</th>
          <th> Product price</th>
          <th> qty</th>
          <th> Total Rs</th>
          <th> Remove</th>
          </tr>
        </thead>
        <tbody>
          {Loginuser?.Carts?.map((item,index)=>(
           <tr  key={index} style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid gray",padding:"9px 0px",textAlign:"center"}}>
            <td> <img src={item.img} alt="only" width="30px" height="30px" /></td>
            <td> {item.title.slice(1,20)}</td>
            <td> {item.description.slice(1,20)}</td>
            <td> {item.price}</td>
            <td> <input type="number" value={item.qty} style={{width:"40px"}} onChange={(e)=>dispatch(updateqty({id:item.id,qty:Number(e.target.value)}))} /> </td>
            <td> Rs {TotalPrice(item)}</td>
             <td> <button onClick={()=>dispatch(Remove(item.id))} style={{backgroundColor:"red",color:"white",fontSize:"16px",border:"none",cursor:"pointer"}}>x</button></td>
          </tr>

          ))}
          

        </tbody>

        </table>
        <GrandTotal/>
</>):<h4 style={{marginTop:"2em"}}>Not Availalbe Cart Data</h4>

  )
}
