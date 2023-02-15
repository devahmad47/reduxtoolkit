import { createSlice } from "@reduxjs/toolkit";

export const STATUSES =Object.freeze({
    IDLE:"idele",
    ERROR:"error",
    LOADING:"loading..."
})
const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status: STATUSES.IDLE, 
    },
    reducers:{
          //we cannot call async func in reducers directly coz reducers calls synchrounsly
        //for example fetching data from api directly here
        setProducts(state, action){
            state.data=action.payload
                 },
                 setStatus(state, action){
                    state.status=action.payload
                         },
                }
})
export const{setProducts, setStatus}=productSlice.actions;
export default productSlice.reducer;
//thunk use to perform delay work a peace of code 
// a kind of normal function

export function fetchProducts(){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
