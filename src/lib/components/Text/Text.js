/* @flow */
import React from 'react'
// this module is for upcoming translations
const Text = ({ as = 'span', children, ...rest }) => {
  const As = as
  return <As {...rest}>{children}</As>
}

export default Text
