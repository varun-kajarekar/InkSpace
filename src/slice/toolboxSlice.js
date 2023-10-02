import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ['pencil']:{
        color : 'white',
        size : 1
    },
    ['eraser'] :{
        color : '#17191C',
        size : 1
    }
}

export const toolboxSlice = createSlice({
    name:'toolbox',
    initialState,
    reducers:{
        changecolor:(state, action)=> {
            state[action.payload.item].color = action.payload.color
        },
        changeBrushSize:(state, action)=> {
            state[action.payload.item].size = action.payload.size
        }
    }
})

export const { changecolor , changeBrushSize } = toolboxSlice.actions

export default toolboxSlice.reducer
