import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        setList: (_, action) => action.payload,
        addTodo: (prevState, action) => [...prevState, action.payload]
    }
}) 

export const { setList, addTodo } = listSlice.actions;

export default listSlice.reducer;  