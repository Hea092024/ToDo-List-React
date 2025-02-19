import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
function App() {
  
  const [todoData, setTodoData] = useState([])

  function addTask (newTask){
    setTodoData((prev) => [...prev, newTask])

  }

  function deleteTask (id) {
    setTodoData((prev) => prev.filter(task => task.id !== id))
  }

  function editTask (id, updatedTask) {
setTodoData((prev) => prev.map(task => (task.id === id ? {...task, updatedTask} : task)))
  }

  return (

  
    <>

  <Header data={{addTask}}/>
  <TodoList data={{todoData, editTask, deleteTask}}/>

    </>
  )
}

export default App
