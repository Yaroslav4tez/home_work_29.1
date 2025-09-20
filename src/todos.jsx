import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddTodo, getSetTodoList, getSetTodoText } from "./redux/actions";

export default () => {
 const todoList = useSelector(state => state.todo.list);
 const dispatch = useDispatch();

 const newTask = useSelector(state => state.todo.newTask);

 let calc = 0;

 const setTaskText = (e) => {
  const action = getSetTodoText(e.target.value);
  dispatch(action);
 }

  useEffect(() => {
    fetch("/api/todo-list")
      .then(resp => resp.json())
      .then(data => {
        return new Promise(resolve => {
          setTimeout(() => resolve(data), 3000);
        });
      })
      .then(list => {
        const action = getSetTodoList(list);
        dispatch(action);
      });
  }, []);

  const addTask = () => {
    fetch("/api/todo-list", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask) 
    })
    .then(resp => resp.json())
    .then(task => {
      const addAction = getAddTodo(task);
      dispatch(addAction);
      const clearAction = getSetTodoText('');
      dispatch(clearAction);
    });
  }

  return <div>
    <div>
      <input type="text" value={newTask.text} onChange={setTaskText}/>
      <button onClick={addTask}>Add</button>
    </div>
  <ul>
      {todoList.length ?
        todoList.map(item => {
          calc++
          return <li key={item._id}>{item.text}</li> 
          
        }) : 
        "No todos"}
    </ul>
    <div><footer>Всього {calc}</footer></div>
  </div> 
}


