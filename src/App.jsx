import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
function App() {
  
  const [TodoData, setTodoData] = useState([])

  return (

  
    <>
<div>
  <Header/>
  <TodoList/>
</div>
    </>
  )
}

export default App
