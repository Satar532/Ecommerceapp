
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
        <table class="table" style={{overflow:"scroll",width:"100%", marginTop:"3em" }}>
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">product Name</th>
      <th scope="col">Product dec</th>
      <th scope="col">Product Price</th>
      <th scope="col">qty</th>
      <th scope="col">Total price</th>
      <th scope='col'> Remove </th>
    </tr>
  </thead>
  <tbody>
    {Loginuser?.Carts?.map((item,index)=>(
      <tr key={index}>
      <th scope="row"><img src={item.img} alt="only" width="30px" height="30px" /></th>
      <td>{item.title.slice(1,20)} </td>
      <td>{item.description.slice(1,20)}</td>
      <td>{item.price}</td>
      <td><input type="number" value={item.qty} style={{width:"40px"}} onChange={(e)=>dispatch(updateqty({id:item.id,qty:Number(e.target.value)}))} /> </td>
            <td> Rs {TotalPrice(item)}</td>
            <td><button onClick={()=>dispatch(Remove(item.id))} style={{backgroundColor:"red",color:"white",fontSize:"16px",border:"none",cursor:"pointer"}}>x</button> </td>
    </tr>
  
      ))}
  </tbody>
</table>
        <GrandTotal/>
</>):<h4 style={{marginTop:"2em"}}>Not Availalbe Cart Data</h4>

  )
}
