/* @flow */
import http from './factory/ApiFactory'
import { API_PREFIX, USER_ID } from './factory/config'

export const getAllGists = token =>
  http.GET(`${API_PREFIX}/gists`, null, { Authorization: `token ${token}` })

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

export const getUser = (token: string) =>
  http.GET(`${API_PREFIX}/user`, null, { Authorization: `token ${token}` })

export const createGist = (title: string) =>
  http.POST(
    `${API_PREFIX}/gists`,
    {
      description: title,
      public: true,
      files: {
        'mock title': {
          content: 'mock content'
        }
      }
    },
    { Authorization: `token ${window.ACCESS_TOKEN}` }
  )

export const getGistsById = (id: string) =>
  http.GET(`${API_PREFIX}/gists/${id}`, null, {
    Authorization: `token ${window.ACCESS_TOKEN}`
  })

export const updateGist = (id: string, newGist: any) =>
  http.PATCH(`${API_PREFIX}/gists/${id}`, newGist, {
    Authorization: `token ${window.ACCESS_TOKEN}`
  })

export const deleteGist = (id: string) =>
  fetch(`${API_PREFIX}/gists/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `token ${window.ACCESS_TOKEN}`
    }
  }).then(res => res.text())
