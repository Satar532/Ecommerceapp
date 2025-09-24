import { createSlice } from "@reduxjs/toolkit";

const OrderSlice=createSlice({
  name:"orderslice",
  initialState:{
   Database:[],
   user:"sattar"
  },
  reducers:{
  AddtoDB:(state,action)=>{
   console.log(action.payload)
  }

  }


})

 export const{AddtoDB}=OrderSlice.actions;
 export default OrderSlice.reducer 