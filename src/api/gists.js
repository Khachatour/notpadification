/* @flow */
import http from './factory/ApiFactory'
import { API_PREFIX, USER_ID } from './factory/config'

export const getAllGists = () =>
  http.GET(`${API_PREFIX}/users/Khachatour/gists`)

// Github has an issue regarding CORS when accesing `access_token` endpoint
// for this either we need too make our own server to get the `access_token`
// or use ready made solutions like `https://cors-anywhere.herokuapp.com/`
// http://andreybleme.com/2018-02-24/oauth-github-web-flow-cors-problem/
export const getAccessToken = (code: string) =>
  fetch(
    `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: 'a40fa50ade80b6e1979b',
        client_secret: '8d785d8fec28e34e9cc25304ebc23ed86f5b3b4f',
        redirect_uri: 'http://localhost:1234',
        code,
        state: 'test'
      })
    }
  ).then(res => res.text())