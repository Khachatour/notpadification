/* @flow */

type TConditional = {
  condition: boolean,
  then?: () => ReactElement<any> | null,
  otherwise?: () => ReactElement<any> | null
}

const Conditional = (props: TConditional) => {
  const { condition, then, otherwise } = props
  if (!!condition) {
    return !!then ? then() : null
  }
  return !!otherwise ? otherwise() : null
}

export default Conditional
