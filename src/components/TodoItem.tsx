import React, { VFC } from 'react'
import { useTodoList, TodoItemType } from '../hooks/useTodoList'

type Props = {
  id: string
  item: TodoItemType
}

export const TodoItem: VFC<Props> = ({ id, item }) => {
  const { editItemText, toggleItemCompletion, deleteItem } = useTodoList()

  const editTodoItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    editItemText(item, id, e.target.value)
  }

  const toggleTodoItemCompletion = () => {
    toggleItemCompletion(item, id)
  }

  const deleteTodoItem = () => {
    deleteItem(id)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editTodoItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleTodoItemCompletion} />
      <button onClick={deleteTodoItem}>X</button>
    </div>
  )
}
