const getSetIsLoading = (isLoading) => {
    return {
        type: 'SET_IS_LOADING',
        payload: isLoading 
    }
};

const getSetTodoList = (list) => {
    return {
        type: 'SET_TODO_LIST',
        payload: list 
    }
};

const getAddTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

const getSetTodoText = (text) => {
    return {
        type: 'SET_TODO_TEXT',
        payload: text
    }
}

export {
    getSetIsLoading,
    getSetTodoList,
    getSetTodoText,
    getAddTodo
}