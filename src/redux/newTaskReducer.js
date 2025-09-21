import { createSlice } from "@reduxjs/toolkit";

const newTaskSlice = createSlice({
    name: 'newTask',
    initialState: {
        text: ''
    },
    reducers: {
        setNewTaskText: (prevState, action) => {
            prevState.text = action.payload;
        }
    }
}) 

export const { setNewTaskText } = newTaskSlice.actions;

export default newTaskSlice.reducer;