import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiUrl } from "../../helpers/ApiUrl";

import { userSliceType } from '../types/userSlice'

const initialState: userSliceType = {
    avatar: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    country: null,
    city: null,
    post_office: null,
    isAdmin: null,
    userToken: null
    // status: null,
    // error: null
}


// export const fetchUser = createAsyncThunk(
//     'user/fetchUser',
//     async function (smt:any) {
//         // console.log('ssss');
//         console.log(smt);



//         let resp = await fetch(ApiUrl + '/user/user',
//         {
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             }
//         })

//         const data = await resp.json()
//         return data
//     //         return axios.get(ApiUrl + '/user/user',
//     //         {
//     //             headers: {
//     //                 'Authorization': 'Bearer ' + token
//     //             }
//     //         }
//     //     )
//     //         .then(res => console.log('res------', res))
//     //         .catch(err => console.log('err', err));

//     }
// )


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action) {
            state.userToken = action.payload
        },
        // setIsAdmin(state, action){
        //     state.isAdmin = action.payload
        // },
        setAvatar(state, action: PayloadAction<any>) {
            state.avatar = action.payload
        },
        setUserData(state, action) {
            state.username = action.payload.username
            state.avatar = action.payload.avatar
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.isAdmin = action.payload.isAdmin

        },
        setUserAddress(state, action) {
            state.country = action.payload?.country ?? ''
            state.city = action.payload?.city ?? ''
            state.post_office = action.payload?.post_office ?? ''
        },
        userLogout: () => initialState
        // (state) {
            
            // state.userToken = null
            // state.avatar = null
            // state.username = null
            // state.firstName = null
            // state.lastName = null
            // state.email = null
            // state.country = null
            // state.city = null
            // state.post_office = null
            // state.isAdmin = null
            // state.userToken = null

        // }
    },
    // extraReducers: (builder) => {
    // builder.addCase(fetchUser.pending, (state, action) => {
    //     state.status = 'loading'
    //     state.error = null
    // })
    // builder.addCase(fetchUser.fulfilled, (state, action) => {
    //     state.status = 'resolved'
    //     state.error = action.payload
    // })
    // builder.addCase(fetchUser.rejected, (state, action) => {
    //     state.status = 'loading'
    //     state.error = null
    // })
    // [fetchUser.pending]: (state, action) => {
    // state.status = 'loading'
    // state.error = null

    // },
    // [fetchUser.fulfilled]: (state, action) => {
    //     state.status = 'resolved'
    //     state.error = action.payload
    // },
    // [fetchUser.rejected]: (state, action) => {

    // },
    // }
});

export const {
    // getToken,
    setToken,
    // removeToken,
    setAvatar,
    // removeAvatar,
    setUserData,
    setUserAddress,
    userLogout
} = userSlice.actions

export default userSlice.reducer