/* @flow */
import React, { useState } from 'react'
import If from '../Utils/Conditional'
import './Input.styles.sass'
import Text from '../Text'

type IInput = {
  value: string,
  isUnique: boolean,
  placeholder: string,
  onChange: (e: string) => void
}

const Input = ({
  isUnique,
  value = '',
  placeholder,
  onChange,
  ...rest
}: IInput) => {
  const [_val, setVal] = useState(value)
  const [warning, setWarning] = useState(null)

  const _onChange = (e: Event) => {
    const newText = e.target.value
    const isDeleting = newText.length < _val.length
    const lastChar = newText.slice(-1)
    const hasTypedChar = _val.indexOf(lastChar) > -1
    if (isUnique && hasTypedChar && !isDeleting) {
      setWarning('Sorry, you can only type unique characters')
    } else {
      setWarning(null)
      setVal(e.target.value)
      onChange(e.target.value)
    }
  }

  return (
    <React.Fragment>
      <input
        {...rest}
        value={_val}
        onChange={_onChange}
        className="notepad-input"
        placeholder={placeholder}
      />
      <If condition={!!warning} then={() => <Text>{warning}</Text>} />
    </React.Fragment>
  )
}

export default Input
