/* @flow */
import React, { useState, useEffect } from 'react'
import Text from '../../src/lib/components/Text'

import './index.sass'
import Input from '../../src/lib/components/Input/Input'
import Button from '../../src/lib/components/Button/Button'
import If from '../../src/lib/components/Utils/Conditional'

import { createGist, getGistsById } from '../../src/api/gists'

const App = () => {
  const [title, setTitle] = useState('')
  const [gist, setGist] = useState(null)
  const onSave = () => createGist(title).then(gist => setGist(gist))

  return (
    <div className="notepadification">
      <Text className="nodepad-title">Notepad Appliction</Text>
      <div className="nodepad-container">
        <div className="nodepad-header">
          <div className="input-container">
            <label htmlFor="notepad_title">Notepad Title</label>
            <Input
              isUnique
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
        <div className="nodepad-body">
          <Text>My Notes</Text>
          <Input isUnique={false} />
        </div>
        <If
          condition={!!gist}
          then={() => {
            const notes = Object.keys(gist.files)
            return (
              <div className="nodepad-footer nodepad-gists">
                {notes.map(key => {
                  return (
                    <div className="note">
                      <div>{key}</div>
                      <div>{gist.files[key].content}</div>
                    </div>
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
