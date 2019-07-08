import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import { getAccessToken, getUser } from '../src/api/gists'
import If from '../src/lib/components/Utils/Conditional'
import App from './main'
const CLIENT_ID = 'a40fa50ade80b6e1979b'
const REDIRECT_URI = 'http://localhost:1234/'

const Hello = () => {
  const [{ user, isLoggedIn }, setUser] = useState({
    user: null,
    isLoggedIn: false
  })
  useEffect(() => {
    if (!isLoggedIn) {
      const code = window.location.href.split('code=')
      if (code.length > 1) {
        getAccessToken(code[1]).then(data => {
          const token = data.split('&')[0].split('=')[1]
          window.ACCESS_TOKEN = token
          getUser(token).then(data => setUser({ user: data, isLoggedIn: true }))
        })
      }
    }
  })

  return (
    <If
      condition={isLoggedIn}
      then={() => <App />}
      otherwise={() => (
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=gist&redirect_uri=${REDIRECT_URI}`}
        >
          Login
        </a>
      )}
    />
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'))
