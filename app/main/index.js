/* @flow */
import React, { useState, useEffect } from 'react'
import Text from '../../src/lib/components/Text'

import './index.sass'
import { omitProp } from '../../src/lib/utils'
import { createGist } from '../../src/api/gists'
import Note from '../../src/lib/components/Note'
import Input from '../../src/lib/components/Input'
import Button from '../../src/lib/components/Button'
import If from '../../src/lib/components/Utils/Conditional'
import { updateGist } from '../../src/api/gists'

const App = () => {
  const [title, setTitle] = useState('')
  const [gist, setGist] = useState(null)
  const onSave = () => createGist(title).then(setGist)
  const deleteGist = (key: number) => () => {
    const newGist = {
      description: gist.description,
      files: {
        ...gist.files,
        [key]: null
      }
    }
    updateGist(gist.id, newGist).then(setGist)
  }
  return (
    <div className="notepadification">
      <Text className="nodepad-title">Notepad Appliction</Text>
      <div className="nodepad-container">
        <div className="nodepad-header">
          <div className="input-container">
            <label htmlFor="notepad_title">Notepad Title</label>
            <Input
              value={title}
              id="notepad_title"
              onChange={setTitle}
              placeholder="My notepad title..."
            />
          </div>
          <div className="buttons-container">
            <Button type="primary" onClick={onSave}>
              Save
            </Button>
            <Button type="danger">Delete</Button>
          </div>
        </div>
        <If
          condition={!!gist}
          then={() => {
            const notes = Object.keys(gist.files)
            return (
              <div className="nodepad-footer nodepad-gists">
                {notes.map((key, idx) => {
                  const note = gist.files[key].content
                  const title = key
                  return (
                    <Note
                      key={idx}
                      note={note}
                      title={title}
                      deleteGist={deleteGist(key)}
                    />
                  )
                })}
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}

export default App
