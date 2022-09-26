import { createSlice } from "@reduxjs/toolkit";
import { filterSliceType } from "../types/filterSlice";



const initialState: filterSliceType = {
    filter: [],
    minimumCurrentPrice: 0,
    maximumCurrentPrice: 0,
    maximumPrice: 0,
    minimumPrice: 0,
    totalProductsAmount: 0

}

const filterslice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addtoFilter(state, action) {
            state.filter.push(action.payload)
        },
        removeFromFilter(state, action) {
            state.filter = state.filter.filter((item: string) => item !== action.payload)
        },
        setMinimumCurrentPrice(state, action) {
            state.minimumCurrentPrice = +action.payload
        },
        setMaximumCurrentPrice(state, action) {
            state.maximumCurrentPrice = +action.payload
        },
        setMaximumPrice(state, action) {
            state.maximumPrice = +action.payload
        },
        setMinimumPrice(state, action) {
            state.minimumPrice = +action.payload
        },
        setTotalProductsAmount(state, action) {
            state.totalProductsAmount = +action.payload
        },
    }
})


export const {
    addtoFilter,
    removeFromFilter,
    setMinimumCurrentPrice,
    setMaximumCurrentPrice,
    setMinimumPrice,
    setMaximumPrice,
    setTotalProductsAmount
} = filterslice.actions

export default filterslice.reducer