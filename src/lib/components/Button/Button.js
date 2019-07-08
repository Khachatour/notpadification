import React from 'react'
import './Button.styles.sass'
import Text from '../Text'

const BTN_TYPES = {
  primary: 'btn-primary',
  danger: 'btn-danger',
  success: 'btn-success'
}

const Button = ({ type = 'primary', children, onClick, ...rest }) => {
  return (
    <div
      {...rest}
      role="button"
      onClick={onClick}
      className={`notepad-btn ${BTN_TYPES[type]}`}
    >
      <Text>{children}</Text>
    </div>
  )
}

export default Button
