export default function TodoItem ({data: {task}}) {

    function changeCompleted () {

    }

    const formattedTime = task.timestamp.toLocaleString("en-GB");

    return (
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={changeCompleted}
        />
        <p>{formattedTime}</p>
        <input type="text" value={task.name} />
      </li>
    );
}