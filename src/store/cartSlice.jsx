

//from redux toolkit official site we have to learn reducers,initialstate,createslice etc
// this method reducer and redux toolkit helps us here to deal with state management
// and to pass data multiple components from single store
import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:[]
    ,
    reducers:{
      
     add(state, action){
state.push(action.payload)
     },
     remove(state,action){
        return state.filter((item)=>item.id!==action.payload)
     }
    }
})
export const{add, remove}=cartSlice.actions;
export default cartSlice.reducer;

