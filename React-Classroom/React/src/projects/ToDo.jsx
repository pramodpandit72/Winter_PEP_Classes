import React, { useState } from 'react'

const ToDo = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if(task.trim() === '') return;

        setTasks([...tasks, {id: Date.now(), text: task}]);
        setTask("");
    }

  return (
    <div>

        <h2>To Do App</h2>
        <input value={task} onChange={(e) => setTask(e.target.value)} className='border-2 px-4 py-1 rounded m-2'/>

        <button onClick={addTask} className='bg-green-600 rounded px-4 py-1 cursor-pointer'>Add Task</button>

        {tasks.map((t) => (
            <p key={t.id} ><span className='bg-green-200 rounded px-2 py-1 m-2'>{t.text}</span></p>
        ))}
    </div>
  )
}

export default ToDo