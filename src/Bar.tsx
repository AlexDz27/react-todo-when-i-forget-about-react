import React, { SyntheticEvent, useState } from 'react'

function Bar({ onAddTask }: {onAddTask: Function}) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    onAddTask(newTaskText)
    setNewTaskText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Add task" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} /> &nbsp;
      <button type="submit">Add</button>
    </form>
  )
}

export default Bar
