import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    cartItem: [],
    cartCount: 0
}


const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log("AddToCart run");
            // console.log("Store ==", state);
            // console.log("Action ==", action);
            // state.cartItem.push(action.payload)

            const newItem = action.payload
            const existingItem = state.cartItem.find(
                item => item.id === newItem.id)
                if(!existingItem){
                    state.cartItem.push(newItem);
                    state.cartCount++;
                    // console.log(state.cartItem.keys(item.id));
                }
        },
        incrementCartCount: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItem.find(item =>
                item.id == itemId)
                if(item){
                    item.count++
                }
        },
        decrementCartCount: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItem.find(item => 
                item.id == itemId)
                if(item && item.count > 1){
                    item.count--
                }
        },

        removeFromCart : (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItem.find(item =>
                item.id ==itemId
            )
            if(existingItem){
                state.cartItem = state.cartItem.filter(item => 
                    item.id !== itemId)
                    state.cartCount = state.cartItem.length
            }
        }
    }
})

export const {
    addToCart, 
    incrementCartCount, 
    decrementCartCount,
    removeFromCart
} = cartSlice.actions

export default cartSlice.reducer;