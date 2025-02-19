import TodoItem from "./TodoItem";
export default function TodoList({
  data: { sortedData, deleteTask, editTask },
}) {
  if (sortedData.length === 0) {
    return <h2>No tasks. Add a task to begin. </h2>;
  }

  return (
    <>
      <ul>
        {sortedData.map((task) => {
          return (
            <TodoItem key={task.id} data={{ task, deleteTask, editTask }} />
          );
        })}
      </ul>
    </>
  );
}
