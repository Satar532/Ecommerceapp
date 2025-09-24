import React,{useState} from 'react'
// import images from'./pexels-thngocbich-1714341.jpg'
 import {useDispatch,useSelector} from 'react-redux'
import { setprofileimage } from '../Feature'
export default function LoginProflie() {
  const [toggle,settoggle]=useState(false)
   const [pass,showpass]=useState('password')
 const dispatch=useDispatch()
 const currentuserprofile=useSelector(state=>state.Procuct.users)
 const currentuser=useSelector(state=>state.Procuct.currentuser)
 const Islogined=useSelector(state=>state.Procuct.isLogined)
    const ProfileIMg=currentuserprofile.find(user=>user.name===currentuser)
    const Image=ProfileIMg?.primage
  const hangleUploadimg=(e)=>{
     const confrim=window.confirm("do you want to change profile image")
     if(confrim){
    const file=e.target.files[0];
    if(!file) return;
    const reader= new FileReader();
    reader.onload=()=>{
      dispatch(setprofileimage(reader.result))

    }
    reader.readAsDataURL(file)
    }
  }
  return (
    Islogined&&
    <div  className='profilede'  style={{display:"flex",justifyContent:"flex-end",marginTop:"3em",flexWrap:"wrap"}}>
     {toggle &&  <div className="form" style={{position:"absolute",top:"5em",left:"5em",width:"500px",padding:"19px",boxShadow:"1px 1px 1px 2px gray", }}>
        <h3>Change Profile</h3>
   <form  >
  <div class="mb-1">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type={pass} class="form-control" id="exampleInputPassword1"/>
    <span style={{position:"absolute",right:"1em",paddingTop:"0.5em",cursor:"pointer"}} onClick={()=>showpass(pass==='password'?'text':'password')}> Show password</span>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Change</button>
</form>
</div>
}

<div class="card " style={{width:" 24rem",boxShadow:"1px 1px 1px 1px gray"}}>
    <div className="img" style={{width:"100px",display:"flex",justifyContent:"center",alignContent:"center",border:"2px solid white",marginLeft:"5em",borderRadius:"50%",flexDirection:"column",rowGap:"9px"}}>
  <img src={Image} class="card-img-top" alt="upload" width="100px" height="90px" style={{borderRadius:"50%"}} />
   <input type="file" name="" id="" accept='images/**' onChange={hangleUploadimg} /> Upload pic
  </div>
  <div class="card-body">
    <h5>User Details</h5>
    <h5 class="card-tit"> <p> name : {currentuser}</p></h5>
    <p class="card-text">Email : satarkhansatrakhan@gmail.com</p>
    <p class="card-text">mobile no : +3479310892</p>
    <p class="card-text">mobile no : +3479310892</p>
    <button class="btn btn-primary" onClick={()=>settoggle(!toggle)}>
      {toggle?"hide profile":"Change Profie"}
      </button>
     {!toggle&& <a href="#" class="btn btn-primary m-2">Go back</a>}
  </div>
</div>
      
    </div>
  )
}
