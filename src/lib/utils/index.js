/* @flow */

export const omitProp = (obj: any, _prop: string) =>
  Object.keys(obj).reduce((newObj, prop) => {
    if (prop === _prop) {
      return newObj
    }
    return {
      ...newObj,
      [prop]: obj[prop]
    }
  }, {})

/**
 * Filters given props or array of props from given object and returns
 * filtered one
 * @param {object} obj Object to filter props from
 * @param {*} _props Single prop or array of props to filter
 * @returns {object} Filtered object
 */
export const omit = (obj: any, _props: string | Array<string>) => {
  if (Array.isArray(_props)) {
    return _props.reduce(omitProp, obj)
  }
  return omitProp(obj, _props)
}
