/* @flow */
import React, { useState } from 'react'
import './Input.styles.sass'

type IInput = {
  value: string,
  isUnique: boolean,
  placeholder: string
}

const Input = ({ isUnique, value = '', placeholder, ...rest }: IInput) => {
  const [_val, setVal] = useState(value)
  const [warning, setWarning] = useState(null)

  const onChange = (e: Event) => {
    const newText = e.target.value
    const isDeleting = newText.length < _val.length
    const lastChar = newText.slice(-1)
    const hasTypedChar = _val.indexOf(lastChar) > -1
    if (isUnique && hasTypedChar && !isDeleting) {
      setWarning('Sorry, you can only type unique characters')
    } else {
      setVal(e.target.value)
    }
  }

  return (
    <input
      {...rest}
      value={_val}
      onChange={onChange}
      className="notepad-input"
      placeholder={placeholder}
    />
  )
}

export default Input
