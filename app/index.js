import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import { getAllGists, getAccessToken, getUser } from '../src/api/gists'

const CLIENT_ID = 'a40fa50ade80b6e1979b'
const REDIRECT_URI = 'http://localhost:1234/'

const Hello = () => {
  const [_code, setCode] = useState('')
  const [_token, setToken] = useState('')
  useEffect(() => {
    const code = window.location.href.split('code=')
    if (code.length > 1) {
      setCode(code[1])
    }
  })

  const fetchGists = () => getAllGists(_token).then(console.log)

  const token = () =>
    getAccessToken(_code).then(data => {
      const token = data.split('&')
      setToken(token[0].split('=')[1])
    })
  const _getUser = () => getUser(_token).then(console.log)

  return (
    <React.Fragment>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=gist&redirect_uri=${REDIRECT_URI}`}
      >
        Login
      </a>
      <button onClick={fetchGists}>fetch gists</button>
      <button onClick={token}>get token</button>
      <button onClick={_getUser}>get user</button>
    </React.Fragment>
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'))
