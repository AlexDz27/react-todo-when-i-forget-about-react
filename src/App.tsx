import React, { useReducer } from 'react'
import Bar from './Bar'
import Task from './Task'
import { TaskI } from './TaskInterface'

function App({ initialTasks }: {initialTasks: TaskI[]}) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(newTaskText: string) {
    let newTaskId = tasks[tasks.length - 1].id + 1
    dispatch({
      type: 'added',
      id: newTaskId,
      text: newTaskText,
    })
  }

  function handleChangeTask(task: TaskI) {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }

  function tasksReducer(tasks: TaskI[], action: {[key: string]: any}) {
    switch (action.type) {
      case 'added':
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: false
        }]
        break

      case 'changed':
        return tasks.map((t: TaskI) => {
          if (t.id === action.task.id) {
            return action.task
          }
          return t
        })
        break

      case 'deleted':
        return tasks.filter((t: TaskI) => t.id !== action.id)
        break

      default:
        throw Error('Unknown action: ' + action.type)
    }
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
