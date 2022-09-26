import { createSlice } from "@reduxjs/toolkit";
import { pageSliceType } from "../types/pageSlice";


const initialState: pageSliceType = {
    // totalPages: 0,
    // currentPage: 1,
    totalListPages: 0,
    currentListPage: 1,
    totalSearchPages: 0,
    currentSearchPage: 1,
}

const pageSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setTotalPages(state, action) {
        //     state.totalPages = action.payload
        },
        setCurrentPage(state, action) {
        //     state.currentPage = action.payload
        },


        setTotalListPages(state, action){
            state.totalListPages = action.payload
        },
        setCurrentListPage(state, action) {
            state.currentListPage = action.payload
        },
        setTotalSearchPages(state, action){
            state.totalSearchPages = action.payload
        },
        setCurrentSearchPage(state, action) {
            state.currentSearchPage = action.payload
        },
    }
})


export const {
    setTotalListPages,
    setCurrentListPage,
    setTotalSearchPages,
    setCurrentSearchPage,
    setCurrentPage,
    setTotalPages
} = pageSlice.actions

export default pageSlice.reducer