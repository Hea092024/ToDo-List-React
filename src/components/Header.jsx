import { useState } from 'react'

export default function Header ({data : {addTask}}) {
    const [newTask, setNewTask] = useState("")
    return (
        <div>
            <h1>TODO List</h1>
            <form action="">
            <input type="text" />
            <button>Submit task</button>
            </form>
        </div>
    )
}