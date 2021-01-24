import React, { useState } from 'react'
import { useTodoList } from '../hooks/useTodoList'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const { addItem }  = useTodoList()

  const addTodoItem = () => {
    addItem(inputValue)
    setInputValue('')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addTodoItem}>Add</button>
    </div>
  )
}
