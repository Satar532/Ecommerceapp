import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dismissbtn } from '../Feature';
function StrickCompunts() {
    const dispatach=useDispatch()
      const error=useSelector(state=>state.Procuct.errors)
    
    
    return (
    
    error && <div className="alert alert-warning alert-dismissible fade show" role="alert"  style={{position:"fixed",top:"50px",width:"100%"}} >
      <strong>{error} </strong>
      <button type="button" class="btn-close" onClick={()=>dispatach(dismissbtn())}>X</button>
      </div>
  )
}

export default StrickCompunts
