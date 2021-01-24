import React from 'react'
import { useFilterTodoList } from '../hooks/useFilterTodoList'
import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

export const TodoList = () => {
  const { filteredTodoList } = useFilterTodoList()

  return (
    <>
      <TodoListStats />
      <TodoItemCreator />
      <TodoListFilters />
      {filteredTodoList.map((todoItem) => (
        <TodoItem id={todoItem.id} key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
