export const API_PREFIX = 'https://api.github.com'

export const USER_ID = 'Khachatour'

export const COMMON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Origin: 'http://localhost:1234/'
}

export const HEADERS = {
  GET: COMMON_HEADERS,
  PATCH: COMMON_HEADERS,
  PUT: COMMON_HEADERS,
  POST: {
    'Content-Type': 'application/json'
  },
  DELETE: {}
}
export const METHODS = ['GET', 'PUT', 'POST', 'DELETE', 'PATCH']
