import { createSlice } from "@reduxjs/toolkit";

const  initialState={
    count:0
}

const counterSlices= createSlice({
    name:'counter',
    initialState,
    reducers:{

    }
})



export default counterSlices.reducer