import React, { useState } from 'react'
import Bag from './nobg.webp'
import Slide from './Slide'
import FeaturePr from './FeaturePr'

export default function Home() {
  const [width,setwidth]=useState(3)

    window.addEventListener('resize',()=>{
       if(window.innerWidth<=640){
         setwidth(1)
       }
       else{
        setwidth(3)
       }
    })
  return (
    <>
    <div className='maindev' >
    <div class="card" >
  <div class="card-body" >
    <h1 class="card-title" >We Care About
Daily Load</h1>
    <p class="card-text" style={{textWrap:"wrap"}}>Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.</p>
    <a href="#" class="btn btn-primary" style={{width:"100px",backgroundColor:"#E11D48",color:"white",border:"none"}}>Shop Now</a>
  </div>
</div>
<div class="card" id='image' >
  <img src={Bag} class="card-img-top"  alt="..."/>
  {}
  
</div>
    </div>
    
    <Slide  width={width} />
    <FeaturePr/>
    </>
  )
}
