import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenuItem : 'pencil',
    actionMenuItem : null
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        menuItemClick:(state, action)=> {
            state.activeMenuItem = action.payload
        },
        actionItemClick:(state, action)=> {
            state.actionMenuItem = action.payload
        }
    }
})

export const { menuItemClick,actionItemClick } = menuSlice.actions

export default menuSlice.reducer