import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,//false-PENDING OR true-DONE
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (state)=>{
            return void(state.fetchDone = true);
        },
        markFetchingStarted: (state)=>{
            return void(state.currentlyFetching=true);
        },
        markFetchingDone: (state)=>{
            return void(state.currentlyFetching= false);
        }
    }
});
export const fetchStatusActions = fetchStatusSlice.actions; 
export default fetchStatusSlice;