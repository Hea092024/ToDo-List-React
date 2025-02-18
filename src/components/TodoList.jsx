import TodoItem from "./TodoItem"
export default function TodoList({ data: { todoData } }) {
  if (todoData.length === 0) {
    return <h2>No tasks. Add a task to begin. </h2>;
  }

  return (
    <>
      <ul>
       {todoData.map(task => {
        return <TodoItem key={task.id} data={{task}}/>
       })}
      </ul>
    </>
  );
}