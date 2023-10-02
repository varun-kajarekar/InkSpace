import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenuItem : 'pencil'
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        menuItemClick:(state, action)=> {
            state.activeMenuItem = action.payload
        }
    }
})

export const { menuItemClick } = menuSlice.actions

export default menuSlice.reducer