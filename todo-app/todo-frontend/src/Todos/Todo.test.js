import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('Todo', () => {
  const deleteTodo = jest.fn()
  const completeTodo = jest.fn()

  const todo = {
    text: 'ahihi',
    done: true,
  }

  beforeEach(() => {
    render(
      <Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />,
    )
  })

  it('should render proper content', () => {
    const todoItem = screen.getByText(/ahihi/i)
    expect(todoItem).toBeInTheDocument()
  })
})
