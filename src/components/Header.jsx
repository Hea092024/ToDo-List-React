import { useState } from 'react'
import { v4 as uuid } from 'uuid';

export default function Header ({data : {addTask}}) {
    const [newTaskName, setNewTaskName] = useState("")

    function handleAddTask () { 
        e.preventDefault();

        const newTask = {
            name: newTaskName,
            timeStamp: new Date(),
            completed : false ,
            id: uuid(),
};
        addTask(newTask);

    }
    return (
        <div>
            <h1>TODO List</h1>
            <form onSubmit={handleAddTask}>
            <input type="text" onChange={(e) => setNewTask(e.target.value)} />
            <button type='submit'>Submit task</button>
            </form>
        </div>
    )
}