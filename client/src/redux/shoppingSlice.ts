import { createSlice } from "@reduxjs/toolkit";
import { Idata } from "../types/Idata";
import { RootState } from "./Store";
import { Iuser } from "../types/Iuser";

interface ShoppingState {
    items : Idata[],
    userInfo : Iuser | null
}

const initialState:ShoppingState = {
    items: [],
    userInfo : null
}

export const shoppingSlice = createSlice({
    name:"shopping",
    initialState,
    reducers:{
        updateCart:(state, action) =>{
            const item = state.items.find((item)=>item._id === action.payload._id)
            if(item) item.total += action.payload.total
            else state.items = 
                [...state.items, action.payload]
        },
        removeCart:(state, action) =>{
            state.items = state.items.filter((item)=>item._id !== action.payload._id)
        },
        resetCart:(state)=>{
            state.items = []
        },
        addTotal:(state,action)=>{
            const item = state.items.find((item)=>item._id === action.payload._id)
            if(item) item.total++
            
        },
        substractTotal:(state, action)=>{
            const item = state.items.find((item)=>item._id === action.payload._id)
            if(item && item?.total===1) state.items = state.items.filter((item)=>item._id !== action.payload._id)
            if(item && item.total>1) item.total--  
        },
        login:(state, action) =>{
            state.userInfo = action.payload
        },
        logout:(state) =>{
            state.userInfo  =  null
        }
    }
})

export const { updateCart, removeCart, resetCart, addTotal, substractTotal, login, logout} = shoppingSlice.actions
export const selectItems = (state: RootState) => state.items
export default shoppingSlice.reducer