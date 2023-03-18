import React from 'react'

const InputButton = (props)=>{
  const {value, name, click} = props
  const stl = "w3-button w3-black w3-margin w3-round-large"
  return<input value={value} id={name} name={name} onClick={click} type="button" className={stl} />
}
export default InputButton
