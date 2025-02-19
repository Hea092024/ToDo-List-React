import { useState ,useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [sortOption, setSortOption] = useState({
    sortBy: "newest",
    hideCompleted: false,
  });

  useEffect (() => {
  localStorage.setItem("todoData", JSON.stringify(todoData))
localStorage.setItem("sortOption", JSON.stringify(sortOption))
  }, [todoData, sortOption])

  function addTask(newTask) {
    setTodoData((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTodoData((prev) => prev.filter((task) => task.id !== id));
  }

  function editTask(id, updatedTask) {
    setTodoData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  }

const sortedData = [...todoData]
  .filter((task) => !task.completed || !sortOption.hideCompleted)
  .sort((a, b) => {
    switch (sortOption.sortBy) {
      case "a-to-z":
        return a.name.localeCompare(b.name);
      case "z-to-a":
        return b.name.localeCompare(a.name);
      case "newest":
        return b.timestamp - a.timestamp;
      case "oldest":
        return a.timestamp - b.timestamp;
      default:
        return 0;
    }
  });


  return (
    <>
      <Header data={{ addTask, sortOption, setSortOption }} />
      <TodoList data={{ sortedData, editTask, deleteTask }} />
    </>
  );
}

export default App;
