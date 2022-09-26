import { createSlice } from "@reduxjs/toolkit";
import { searchSliceType } from "../types/searchSlice";




const initialState: searchSliceType = {
    searchProducts: [],
    search: ''
    // productsAmount: 0
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSearchProducts(state, action) {
            state.searchProducts = [...action.payload]
        }
        ,
        setSearch(state, action) {
            state.search = action.payload
        },
        resetSearch(state) {
            state.search = ''
        }
    }
})


export const { 
    setSearch, 
    resetSearch, 
    setSearchProducts 
} = productSlice.actions

export default productSlice.reducer