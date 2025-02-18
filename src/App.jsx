import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
function App() {
  
  const [todoData, setTodoData] = useState([])

  function addTask (newTask){
    setTodoData((prev) => [...prev, newTask])

  }

  return (

  
    <>

  <Header data={{addTask}}/>
  <TodoList/>

    </>
  )
}

export default App
