import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div>
      {todos
        .map(todo => (
          <Todo
            key={todo.text}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))
        // eslint-disable-next-line react/jsx-key
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </div>
  )
}

export default TodoList
