import React, { useState } from 'react'
import Bar from './Bar'
import Task from './Task'
import { TaskI } from './TaskInterface'

function App({ initialTasks }: {initialTasks: TaskI[]}) {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTask(newTaskText: string) {
    // !!! READ HERE | READ HERE |READ HERE |READ HERE |READ HERE |READ HERE |READ HERE |READ HERE |READ HERE |READ HERE | !!!
    //
    // change state
    // what? -> Get new state and pass it
    // Could create new arr and add the new task

    // const newTasksState = [...tasks]
    // newTasksState.push({
    //   id: newTaskId + 1,
    //   text: newTaskText,
    //   done: false
    // })
    // setTasks(newTasksState)

    // Refactored 👇
    let newTaskId = tasks[tasks.length - 1].id + 1
    setTasks([...tasks, {
      id: newTaskId,
      text: newTaskText,
      done: false
    }])
  }

  function handleDeleteTask(task: TaskI) {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  function handleChangeTask(task: TaskI) {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task
      }
      return t
    })
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <Bar onAddTask={handleAddTask} />
      {tasks.length > 0 &&
        <ul>
          {tasks.map(task => <Task
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onChange={handleChangeTask}
          />)}
        </ul>
      }
    </div>
  )
}

export default App
