import { useState } from "react";
export default function TodoItem ({data: {task, editTask, deleteTask}}) {
const [isReadOnly, setISReadOnly] = useState(true);
const [updatedTaskName , setUpdatedTaskName] = useState(task.name);
    function changeCompleted () {

    }

    const formattedTime = task.timestamp.toLocaleString("en-GB");
    function handleEdit () {
if(!isReadOnly) {
  editTask(task.id, {...task, name: updatedTaskName});
}
setISReadOnly(prev => !prev)
    }

    return (
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={changeCompleted}
        />
        <p>{formattedTime}</p>
        <input type="text" value={updatedTaskName} readOnly={isReadOnly} onChange ={() => setUpdatedTaskName(e.target.value)}/>
<button onClick={handleEdit}>{isReadOnly ? "Edit" : "Save"}</button>
<button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    );
}