import { createSlice } from "@reduxjs/toolkit";

// {
//     id: 1,
//     name: 'cat',
//     price: 200.9,
//     count: 2,
//     product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
// },
// {
//     id: 2,
//     name: 'cat',
//     price: 200.17,
//     count: 24,
//     product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
// },
// {
//     id: 4,
//     name: 'cat',
//     price: 20.32,
//     count: 2,
//     product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
// },

type cartSliceType = {
    cart: any[],
    cartIds: number[]
}
const initialState: cartSliceType = {
    cart: [],
    cartIds: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        },
        removeFromCart(state, action): void {
            state.cart = state.cart.filter((item: any) => item.id !== action.payload)
        },
        addToCartIds(state, action) {
            state.cartIds.push(action.payload)
        },
        removeFromCartIds(state, action): void {
            state.cartIds = state.cartIds.filter((cart: any) => cart !== action.payload)
        },
        incrementCount(state, action): void {
            let result = []
            for (const product of state.cart) {
                if (product.id === action.payload) {
                    product.count += 1
                }
                result.push(product)
            }
            state.cart = result
        },
        decrementCount(state, action): void {
            let result = []
            for (const product of state.cart) {
                if (product.id === action.payload) {
                    product.count -= 1
                }
                result.push(product)
            }
            state.cart = result
        },
        cartReset: () => initialState
        // (state){
        //     state.cart = []
        //     state.cartIds = []
        // }
    }
})


export const {
    addToCart,
    removeFromCart,
    addToCartIds,
    removeFromCartIds,
    incrementCount,
    decrementCount,
    cartReset
} = cartSlice.actions

export default cartSlice.reducer