import React, { useState } from 'react'
  import icon from './person.png'
import { useDispatch ,useSelector} from 'react-redux'
import { toggleProfile} from '../Feature'
function ProfileImg() {
 const currentuserprofile=useSelector(state=>state.Procuct.users)
 const currentuser=useSelector(state=>state.Procuct.currentuser)
  const ProfileIMg=currentuserprofile.find(user=>user.name===currentuser)
    const Image=ProfileIMg?.primage

    const [toggle,settoggle]=useState(false)
     const dispatch=useDispatch()
    const togglepr=()=>{
         settoggle(!toggle)
         dispatch(toggleProfile(toggle))

    }
  return (
    <div>
     <img src={Image?Image:icon} alt="" onClick={togglepr}  style={{borderRadius:"50%",border:"2px solid red",padding:"4px 4px" }} width="40px" height="40px" /> 
     
    </div>
  )
}
  
export default ProfileImg
