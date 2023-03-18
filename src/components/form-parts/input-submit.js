import React from 'react'

const InputSubmit = (props)=>{
  const {enviar, value} = props
  const stl = "w3-button w3-margin w3-black w3-round-large"
  return<input onClick={enviar} type="submit" value={value} className={stl} />
}
export default InputSubmit
