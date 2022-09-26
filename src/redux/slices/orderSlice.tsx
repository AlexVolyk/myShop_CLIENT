import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { ApiUrl } from "../../helpers/ApiUrl";


type orderSliceType = {
    orders: object[]
}

const initialState: orderSliceType = {
    orders: [
        // {
        //     name: 'cat',
        //     price: 31.72,
        //     count: 2,
        //     product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
        //     status: 'going'
        // },
        // {
        //     order:
        //         [
        //             {
        //                 name: 'cat',
        //                 price: 23.11,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 47.85,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             }
        //         ],
        //     status: 'going'
        // }
        // ,
        // {
        //     name: 'cat',
        //     price: 73.01,
        //     count: 2,
        //     product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
        //     status: 'going'
        // },
        // {
        //     order:
        //         [
        //             {
        //                 name: 'cat',
        //                 price: 9.85,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 9.09,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 29.82,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             }
        //         ],
        //     status: 'going'
        // },
        // {
        //     order:
        //         [
        //             {
        //                 name: 'cat',
        //                 price: 321.2,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 321.3,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 21.3,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 41.2,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             }
        //         ],
        //     status: 'going'
        // },
        // {
        //     order:
        //         [
        //             {
        //                 name: 'cat',
        //                 price: 21.2,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 200,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 200,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 321.2,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 11.22,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             },
        //             {
        //                 name: 'cat',
        //                 price: 21.2,
        //                 count: 2,
        //                 product_avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        //             }
        //         ],
        //     status: 'going'
        // }
    ]
}



const userSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToOrder(state, action) {
            state.orders = action.payload
        },
        removeFromOrder(state, action) {
            state.orders = []
        }
    },
});

export const {
    addToOrder,
    removeFromOrder
} = userSlice.actions

export default userSlice.reducer