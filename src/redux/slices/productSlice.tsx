import { createSlice } from "@reduxjs/toolkit";

import { productType } from "../types/productSlice";

const initialState: productType = {
    products: [],
    // productsAmount: 0
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // addProductsAmount(state, action){
        //     state.productsAmount = action.payload
        // }
    }
})


export const {} = productSlice.actions

export default productSlice.reducer