/* @flow */
import React from 'react'
import Text from '../../src/lib/components/Text'

import './index.sass'
import Button from '../../src/lib/components/Button/Button'
import Input from '../../src/lib/components/Input/Input'

const App = () => {
  console.log('TOKEN', window.ACCESS_TOKEN)
  return (
    <div className="notepadification">
      <Text className="nodepad-title">Notepad Appliction</Text>
      <div className="nodepad-container">
        <div className="nodepad-header">
          <div className="input-container">
            <label htmlFor="notepad_title">Notepad Title</label>
            <Input
              isUnique
              value=""
              id="notepad_title"
              placeholder="My notepad title..."
            />
          </div>
          <div className="buttons-container">
            <Button type="primary">Save</Button>
            <Button type="danger">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
