/* @flow */
import React, { useState } from 'react'
import './Note.styles.sass'
import Input from '../Input/Input'
import Button from '../Button/Button'

type INote = {
  title: string,
  note: string
}

const Note = ({ title, note, deleteGist, updateGist }) => {
  const [newTitle, setTitle] = useState(title)
  const [newNote, setNote] = useState(note)
  const _setNote = (e: Event) => {
    const note = e.target.value
    if (note.length < 1000) {
      setNote(note)
    }
  }

  const gistUpdate = () => updateGist({ filename: newTitle, content: newNote })

  return (
    <div className="note">
      <div className="note-left">
        <Input
          isUnique
          value={newTitle}
          onChange={setTitle}
          onBlur={gistUpdate}
          placeholder="My notepad title..."
        />
        <textarea value={newNote} onChange={_setNote} onBlur={gistUpdate} />
      </div>
      <div className="note-right">
        <Button type="danger" onClick={deleteGist}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default Note
