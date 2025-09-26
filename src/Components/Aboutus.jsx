import React, { useState,useEffect } from 'react'
import AboutIMg from './WhatsApp Image 2025-09-24 at 06.03.50_bd33545b.jpg'
export default function Aboutus() {
 const Language=["C++","Jave","React js ","Node js"]
    const [lan,setlan]=useState("C++")

    useEffect(() => {
      const clearint=setInterval(() => {
      setlan('')
      const random=Math.floor(Math.random()*4)
  
      const languge=Language[random]
      setlan(languge)
      
    }, 1000)

      return () => {
       clearInterval(clearint)
      };
    }, [lan])
    
  
  return (
    <div style={{marginTop:"7em",display:"flex",justifyContent:"center",gap:"3em",flexWrap:"wrap"}}>
         

 <div className="intrCard" style={{border:"1px solid white",width:"760px",padding:"1em",boxShadow:"1px 1px 1px 1px gray"}} >
  <h4> About Me</h4>
  <p style={{fontSize:"16px",fontFamily:"revert-layer"}}>
**Professional Introduction:**

I am a skilled Full Stack Developer with 2 years of experience specializing in modern web application development using **React.js**, **Node.js**, and **JavaScript**. I have a strong command of both front-end and back-end technologies, with a proven ability to build responsive, user-friendly interfaces using **Bootstrap**, and scalable server-side solutions powered by **Node.js** and **SQL** databases. I also work with **Appwrite** to deliver secure and efficient backend services. My focus is on writing clean, maintainable code and delivering high-performance applications that align with business goals. I’m passionate about continuous learning and always stay updated with the latest trends in full stack development.
</p>
<p><h3> <span style={{color:"red", textShadow:"2px 2px 5px blue",letterSpacing:"1px"}}> i am Full stack </span> <span  style={{color:"blue",textShadow:"2px 2px 5px red"}}> {lan}
  </span>  <span style={{color:"red",textShadow:"2px 2px 5px blue",letterSpacing:"1px"}}> Developer</span> </h3></p>

</div>
<div className="imgCard" style={{border:"1px solid white",padding:"3em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxShadow:"1px 1px 1px 1px gray"}}>
  <img src={AboutIMg} alt="" width="100px" height="100px" style={{borderRadius:"50%"}} />
  <h3> Kashif Amin</h3>
  <p> Whatsapp : +3119013390</p>
  <p> Email : <a href="www.Email.coome"> 88Kashim99@gmail.com</a> </p>
  <p> Facebook : <a href="www.Email.coome"> www.facebook.com/Kashif22</a> </p>

</div>
    
   <div className="languge" style={{display:"block"}}>
    
   <h3 style={{fontSize:"24px",fontFamily:"cursive",background:"linear-gradient(90deg,red,blue,green)",color:"white",padding:"0.4em"}}> Working in the Following Languges {lan} </h3>

    </div>
         
     <div className="LanguugesImg" style={{display:"flex",justifyContent:"space-around",gap:"3em",flexWrap:"wrap",border:"1px"}}>
   <div className="img" style={{display:"flex",justifyContent:"center",alignItems:"center" }}> <img src="https://tse2.mm.bing.net/th/id/OIP.ZZaV8f0-sI1l6dcdApuE6gHaEK?pid=Api&h=220&P=0" alt="" width="100px" /> </div>
      <div className="img" style={{display:"flex",justifyContent:"center",alignItems:"center" }}> <img src="https://tse3.mm.bing.net/th/id/OIP.boBVlxoxhHiuFvn7MipwIQHaHW?pid=Api&h=220&P=0" alt="" width="80px" /> </div>
      <div className="img"style={{display:"flex",justifyContent:"center",alignItems:"center" }} > <img src="https://tse1.mm.bing.net/th/id/OIP.Tf4BFI6846neirVSebC0vAHaEi?pid=Api&h=220&P=0" alt="" width="100px"  /> </div>
      <div className="img"style={{display:"flex",justifyContent:"center",alignItems:"center" }} > <img src="https://tse2.mm.bing.net/th/id/OIP.J3gwgUR-rRHYusRAMC7K6AHaHy?pid=Api&h=220&P=0" alt="" width="80px"  /> </div>
      <div className="img"style={{display:"flex",justifyContent:"center",alignItems:"center" }} > <img src="https://tse3.mm.bing.net/th/id/OIP.oQSt1ISMB02_XEccIILMDwHaEK?pid=Api&h=220&P=0" alt="" width="100px"  /> </div>
      <div className="img"style={{display:"flex",justifyContent:"center",alignItems:"center" }} > <img src="https://tse4.mm.bing.net/th/id/OIP.tesFTM4pGFlnQxeYAGnAoAHaEK?pid=Api&h=220&P=0" alt="" width="100px"  /> </div>
      <div className="img"style={{display:"flex",justifyContent:"center",alignItems:"center" }} > <img src="https://tse3.mm.bing.net/th/id/OIP.wyY7fa7FHVIsdcoGwdybXQHaHa?pid=Api&h=220&P=0" alt="" width="100px"  /> </div>

     </div>

    </div>
  )
}
