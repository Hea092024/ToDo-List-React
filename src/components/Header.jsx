import { useState } from 'react'
import { v4 as uuid } from 'uuid';

export default function Header ({data : {addTask}}) {
    const [newTaskName, setNewTaskName] = useState("")

    function handleAddTask (e) { 
        e.preventDefault();

        const newTask = {
            name: newTaskName,
            timestamp: new Date(),
            completed : false ,
            id: uuid(),
};
        addTask(newTask);

    }
    return (
        <div>
            <h1>TODO List</h1>
            <form onSubmit={handleAddTask}>
            <input type="text" onChange={e => setNewTaskName(e.target.value)} />
            <button type='submit'>Submit task</button>
            </form>
        </div>
    )
}