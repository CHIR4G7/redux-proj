import {configureStore, createSlice} from '@reduxjs/toolkit'


//different slices
import itemSlice from './ItemSlice';
import fetchStatusSlice from './fetchStatusSlice';
import BagSlice from './BagSlice';


//cofigue the store
const store = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: BagSlice.reducer
    }
});

export default store;

