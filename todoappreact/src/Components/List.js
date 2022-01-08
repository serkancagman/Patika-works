import React from 'react'

export const List = ({todoItem, todoMainUpdate, todoUpdate}) => {

    const changeChecked = (currentId) => {
	  	let updatedTodos = todoItem.map(todo => {
	  	if(todo.id === currentId ) {
	  		todo.isDone = !todo.isDone
			}
			return todo
		})
		todoUpdate(updatedTodos);
	}

  const removeToDo = currentId => {
		let removeToDoItem =[...todoItem].filter(todo => todo.id !== currentId);
		todoUpdate(removeToDoItem);
	}

    return (
        <>
            





            {todoItem.map((list) => (
              <li key={list.id}  >
                <div className="view">
                  <input className="toggle" onChange={()=>changeChecked(list.id)} checked={list.isDone} type="checkbox" />
                  <label className={list.isDone ? "completed-todo" : " "} >{list.todoInput}</label>
                  <button onClick={()=>removeToDo(list.id)} className="destroy"></button>
                </div>
              </li>
            ))}
        </>
    )
}
