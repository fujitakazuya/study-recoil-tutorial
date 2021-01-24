import { atom, useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

export type TodoItemType = {
  id: string
  text: string
  isComplete: boolean
}

export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
})

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const addItem = (inputValue: string) => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uuidv4(),
        text: inputValue,
        isComplete: false,
      },
    ])
  }

  const editItemText = (item: TodoItemType, id: string, value: string) => {
    const newList = replaceItemAtIndex(todoList, id, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = (item: TodoItemType, id: string) => {
    const newList = replaceItemAtIndex(todoList, id, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = (id: string) => {
    const newList = removeItemAtIndex(todoList, id)

    setTodoList(newList)
  }

  return { todoList, addItem, editItemText, toggleItemCompletion, deleteItem }
}

const replaceItemAtIndex = (todoList: TodoItemType[], id: string, newValue: TodoItemType): TodoItemType[] =>
  todoList.map((item) => item.id === id ? newValue : item)

const removeItemAtIndex = (todoList: TodoItemType[], id: string): TodoItemType[] =>
  todoList.filter((item) => item.id !== id)
