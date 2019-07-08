/* @flow */
import React, { useState } from 'react'
import Text from '../Text'
import Input from '../Input'
import Button from '../Button'
import If from '../Utils/Conditional'
import './InitialNote.styles.sass'
const MAX_TITLE_COUNT = 255
const MAX_NOTE_COUNT = 1000
const initState = { title: null, note: null }

const InitialNote = ({ onNoteAdd }) => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [warning, setWarning] = useState(initState)
  const onAdd = () => onNoteAdd({ filename: title, content: note })

  const checkAndUpdate = (
    text: string,
    prop: string,
    maxCount: number,
    setter: (s: string) => void
  ) => {
    if (text.length < maxCount) {
      setter(text)
      setWarning(initState)
    } else {
      setWarning({
        ...warning,
        [prop]: `Sorry, you can only type ${MAX_TITLE_COUNT} number of characters`
      })
    }
  }

  const onChangeTitle = (text: string) =>
    checkAndUpdate(text, 'title', MAX_TITLE_COUNT, setTitle)

  const onChangeNote = (e: Event) =>
    checkAndUpdate(e.target.value, 'note', MAX_NOTE_COUNT, setNote)

  return (
    <div className="initial-note">
      <Text className="initial-note-title">My Notes</Text>
      <Input
        value={title}
        isUnique={true}
        onChange={onChangeTitle}
        placeholder="enter note title"
      />
      <If
        condition={!!warning.title}
        then={() => <Text>{warning.title}</Text>}
      />
      <textarea value={note} onChange={onChangeNote} placeholder="enter note" />
      <Button type="success" onClick={onAdd}>
        Add
      </Button>
    </div>
  )
}

export default InitialNote
