//item slice of the 
import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state,action)=>{
            const newstore = action.payload
            return newstore;
        }
    }
});
export const itemActions = itemSlice.actions; 
export default itemSlice;