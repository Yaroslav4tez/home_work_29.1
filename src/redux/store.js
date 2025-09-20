import reducer from "./reducer";
import { createStore } from "redux";


const initialState = {
    todo: {
        list: [],
        isLoading: false,
        newTask: {
            text: "",
            isDone: false
        }
    }
};


const store = createStore(reducer, initialState);



export default store; 