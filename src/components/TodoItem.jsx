import { useState } from "react";
export default function TodoItem ({data: {task, editTask, deleteTask}}) {
const [isReadOnly, setISReadOnly] = useState(true);
    function changeCompleted () {

    }

    const formattedTime = task.timestamp.toLocaleString("en-GB");
    function handleEdit () {

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
<button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    );
}