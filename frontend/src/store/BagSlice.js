import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addtoBag : (state,action)=>{
            return void(state.push(action.payload));
        },
        removeFromBag : (state,action)=>{
            return state.filter(itemid=>itemid!=action.payload)
        }
    }
});

export const BagSliceActions = BagSlice.actions;
export default BagSlice;