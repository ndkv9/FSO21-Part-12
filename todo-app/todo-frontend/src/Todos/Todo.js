import React from 'react'

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = todo => () => {
    deleteTodo(todo)
  }

  const onClickComplete = todo => () => {
    completeTodo(todo)
  }

  const doneInfo = (
    <div>
      <span>This todo is done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </div>
  )

  const notDoneInfo = (
    <div>
      <span>This todo is not done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
        <button onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </div>
  )

  return (
    <div
      data-testid='todo-item'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
      }}
    >
      <span>{todo.text}</span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default Todo
