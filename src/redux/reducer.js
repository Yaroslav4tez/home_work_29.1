export default  (prevState = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING': {
            return {
                ...prevState,
                todo: {
                    ...prevState.todo,
                    isLoading: action.payload
                }
            }
        }
        case 'SET_TODO_LIST': {
            return {
                ...prevState,
                todo: {
                    ...prevState.todo,
                    list: action.payload
                }
            }
        }
        case 'ADD_TODO': {
            return {
                ...prevState,
                todo: {
                    ...prevState.todo,
                    list: [...prevState.todo.list, action.payload]
                }
            }            
        }        
        case 'SET_TODO_TEXT': {
            return {
                ...prevState,
                todo: {
                    ...prevState.todo,
                    newTask: {
                        ...prevState.todo.newTask,
                        text: action.payload
                }
                }
            }
        }        
        default:
            return prevState;
    };
};