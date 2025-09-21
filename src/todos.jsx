import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "./redux/loadingReducer";
import { setNewTaskText } from "./redux/newTaskReducer";
import { setList, addTodo } from "./redux/listReducer";

export default () => {
 const todoList = useSelector(state => state.todo.list);
 const dispatch = useDispatch();

 const newTask = useSelector(state => state.todo.newTask);
 const isLoading = useSelector(state => state.todo.isLoading);


 let calc = 0;

 const setTaskText = (e) => {
  dispatch(setNewTaskText(e.target.value));
 }

  useEffect(() => {
    dispatch(setIsLoading(true));
    fetch("/api/todo-list")
      .then(resp => resp.json())
      .then(data => {
        return new Promise(resolve => {
          setTimeout(() => resolve(data), 3000);
        });
      })
      .then(list => {
        const action = setList(list);
        dispatch(action);
        dispatch(setIsLoading(false));
      });
  }, []);

  const addTask = () => {
    dispatch(setIsLoading(true));
    fetch("/api/todo-list", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask) 
    })
    .then(resp => resp.json())
    .then(task => {
      const addAction = addTodo(task);
      dispatch(addAction);
      dispatch(setNewTaskText(""));
      dispatch(setIsLoading(false));
    });
  }

  if (isLoading) {
    return <div className="imgContainer"><img src="https://i.pinimg.com/736x/e0/36/64/e036647fd9ad4adbd4ebf347a9b409a7.jpg" alt="" /></div>
  }

  return <div>
    <div>
      <input type="text" value={newTask.text} onChange={setTaskText}/>
      <button onClick={addTask}>Add</button>
    </div>
    <div>
  <ul>
      {todoList.length ?
        todoList.map(item => {
          calc++
          return <li key={item._id}>{item.text}</li> 
          
        }) : 
        "No todos"}
    </ul>
    </div>
    <div><footer>Всього {calc}</footer></div>
  </div> 
}


