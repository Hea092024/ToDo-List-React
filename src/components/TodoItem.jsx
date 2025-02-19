export default function TodoItem ({data: {task, editTask, deleteTask}}) {

    function changeCompleted () {

    }

    const formattedTime = task.timestamp.toLocaleString("en-GB");
    function handleEdit () {

    }

    function handleDelete () {

    }

    return (
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={changeCompleted}
        />
        <p>{formattedTime}</p>
        <input type="text" value={task.name} />
<button onClick={handleEdit}>Edit</button>
<button onClick={handleDelete}>Delete</button>
      </li>
    );
}