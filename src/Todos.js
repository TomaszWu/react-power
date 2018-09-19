import React from 'react'



const Todos = ({todos, deleteTodo, editTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
           return (
               <div className="collection-item" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                   <button  onClick={editTodo}>Edit</button>
               </div>
           )
        })

    ) : (
        <p className="center">You have no todo's left</p>

    );

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos
