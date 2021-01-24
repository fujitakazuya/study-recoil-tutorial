import React, { VFC } from 'react'
import { useStatsTodoList } from '../hooks/useStatsTodoList'

export const TodoListStats: VFC = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useStatsTodoList()

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <ul>
      <li>Total Item: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}
