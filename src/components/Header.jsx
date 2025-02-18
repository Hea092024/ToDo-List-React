import { useState } from 'react'

export default function Header ({data : {addTask}}) {
    const [newTask, setNewTask] = useState("")

    function handleAddTask () { 
        e.preventDefault();

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