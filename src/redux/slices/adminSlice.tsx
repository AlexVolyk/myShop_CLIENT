import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiUrl } from "../../helpers/ApiUrl";

import { adminSliceType } from '../types/adminType'

const initialState: adminSliceType = {
    avatar: null,
    username: null,
    email: null,
    adminToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY0MTE2NDUwLCJleHAiOjE2NjQyMDI4NTB9.VBq-1w-eFmsAE8ZJsCFXIlavImTLCX2DGQhbzPQnzjs'
}


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminToken(state, action) {
            state.adminToken = action.payload
        },
        setAvatar(state, action) {
            state.avatar = action.payload
        },
        setUserData(state, action) {
            state.username = action.payload.username
            state.avatar = action.payload.avatar
            state.email = action.payload.email
        },
        userLogout: () => initialState
    },
});

export const {
    setAdminToken,
    setAvatar,
    setUserData,
    userLogout
} = adminSlice.actions

export default adminSlice.reducer