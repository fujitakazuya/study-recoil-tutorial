import React from 'react'
import { useFilterTodoList, FilterType } from '../hooks/useFilterTodoList'

export const TodoListFilters = () => {
  const { filter, updateFilter  }  = useFilterTodoList()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilter(e.target.value as FilterType)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={onChange}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}
