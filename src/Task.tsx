import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { TaskI } from './TaskInterface'

function Task({ task, onDelete, onChange }: {task: TaskI, onDelete: Function, onChange: Function}) {
  const [text, setText] = useState(task.text)
  const [isBeingEdited, setIsBeingEdited] = useState(false)

  function handleSave() {
    setIsBeingEdited(false)
    onChange({...task, text})
  }

  function handleMarkCompleted(e: ChangeEvent<HTMLInputElement>) {
    onChange({...task, done: e.target.checked})
  }

  return (
    <li key={task.id}>
      {isBeingEdited ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button type="button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input type="checkbox" id={`taskDone-${task.id}`} checked={task.done} onChange={(e) => handleMarkCompleted(e)} />
          <label htmlFor={`taskDone-${task.id}`}>{text} &nbsp;</label>
          <button type="button" onClick={() => setIsBeingEdited(true)}>Edit</button>
        </>
      )}
      <button type="button" onClick={() => onDelete(task)}>Delete</button>
    </li>
  )
}

export default Task
