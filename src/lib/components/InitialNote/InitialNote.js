/* @flow */
import React, { useState } from 'react'
import Text from '../Text'
import Input from '../Input'
import Button from '../Button'
import './InitialNote.styles.sass'

const InitialNote = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const onAdd = () => {}

  return (
    <div className="initial-note">
      <Text className="initial-note-title">My Notes</Text>
      <Input
        value={title}
        isUnique={true}
        onChange={setTitle}
        placeholder="enter note title"
      />
      <textarea value={note} onChange={setNote} placeholder="enter note" />
      <Button type="success" onClick={onAdd}>
        Add
      </Button>
    </div>
  )
}

export default InitialNote
