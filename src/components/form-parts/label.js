import React from 'react'

const Label = (props)=>{
  const {value, htmlfor} = props
  return<label htmlFor={htmlfor}>{value}</label>
}
export default Label
