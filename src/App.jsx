import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [todoData, setTodoData] = useState([]);
  const [sortOption, setSortOption] = useState({
    sortBy: "newest",
    hideCompleted: false,
  });

  function addTask(newTask) {
    setTodoData((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTodoData((prev) => prev.filter((task) => task.id !== id));
  }

  function editTask(id, updatedTask) {
    setTodoData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, updatedTask } : task))
    );
  }

  const sortedData = [...todoData].filter(task => !task.completed || !sortOption.hideCompleted)

  return (
    <>
      <Header data={{ addTask, sortOption, setSortOption }} />
      <TodoList data={{ todoData, editTask, deleteTask }} />
    </>
  );
}

export default App;
