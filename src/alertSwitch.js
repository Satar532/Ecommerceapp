import {useDispatch,useSelector} from 'react-redux'
import { dismissbtn } from './Feature'

export const  Switchalert=()=>{
   const error=useSelector(state=>state.Procuct.errors)
    const dispatch=useDispatch()
      if(error){
         setTimeout(() => {
             dispatch(dismissbtn())
         },3000)
         
      }

}