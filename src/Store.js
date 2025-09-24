import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './Feature'
 import OrderSlice from './Components/OrderSlice/Orderclice'

export const store=configureStore({
    reducer:{ 
        Procuct: reducer,
         OrderSlice:OrderSlice
    }
})