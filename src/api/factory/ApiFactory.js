/* @flow */
import { HEADERS, METHODS } from './config'

const firstStageSuccess = res => {
  if (res.status >= 400) {
    throw Error(`API call failed. ${res.message}`)
  }
  return res
}

const errorHandler = (error: Error | string) => {
  throw Error(
    `Something went wrong. ${error instanceof Error ? error.message : error}`
  )
}

// TODO: add internet explorer check for headers
const __fetch = (method: string) => (
  path: string,
  body?: Object,
  extraHeaders?: Object = {}
) =>
  fetch(path, {
    method,
    // credentials: 'include',
    headers: { ...HEADERS[method], ...extraHeaders },
    ...(!!body ? { body: JSON.stringify(body) } : {})
  })
    .then(res => res.json())
    .then(firstStageSuccess)
    .catch(errorHandler)

export default METHODS.reduce(
  (acc, meth) => ({ ...acc, [meth]: __fetch(meth) }),
  {}
)
