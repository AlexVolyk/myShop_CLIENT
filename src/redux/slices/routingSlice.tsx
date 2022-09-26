import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
    
}

const routingSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addtoFilter(state, action){
            state.filter.push(action.payload)
        },
        removeFromFilter(state,action){
            state.filter = state.filter.filter((item: string) => item !==  action.payload)
        }
    }
})


export const {
    addtoFilter, 
    removeFromFilter
} = routingSlice.actions

export default routingSlice.reducer