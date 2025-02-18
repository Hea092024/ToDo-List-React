export default function TodoItem ({data: {task}}) {
    return (
      <>
        <li>
          <input type="checkbox" checked={task.completed} />
        </li>
      </>
    );
}