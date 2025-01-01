import { createSlice } from "@reduxjs/toolkit";

const  initialState={
    count:0
}

const counterSlices= createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state, action)=>{
            state.count =state.count + action.payload
        },
        decrement:(state)=>{
            state.count =state.count - 1
        },
        reset:(state)=>{
            state.count =0
        }
    }
})

export const {increment,decrement, reset} = counterSlices.actions;

export default counterSlices.reducer