import { useState } from 'react'
import { v4 as uuid } from 'uuid';

export default function Header ({data : {addTask, setSortOption}}) {
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
          <input type="text" onChange={(e) => setNewTaskName(e.target.value)} />
          <button type="submit">Submit task</button>
        </form>
        <select name="" id="" onChange={() => setSortOption(prev =>({...prev, sortBy: e.target.value}))}>
          <option value="newest">Newest to Oldest</option>
          <option value="oldest">Oldest to Newest</option>
          <option value="a-to-z">A to Z</option>
          <option value="z-to-a">Z to A</option>
        </select>
      </div>
    );
}