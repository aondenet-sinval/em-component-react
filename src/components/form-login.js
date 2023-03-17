import React, { useState } from 'react'
import RowFormText from './form-parts/row-form-text'
import RowFormPassword from './form-parts/row-form-password'
import InputReset from './form-parts/input-reset'
import InputSubmit from './form-parts/input-submit'
const FormLogin = ()=>{
  const [user, setUser ]= useState({})
  const enviar = ()=> {}
  const changeFormUser = (e)=>{
    const name = e.target.name
    const value = e.target.value
    if (name === 'usernameLogin') {
    user.telefone = value
    }
    if (name === 'passwordLogin') {
      user.endereco = value
    }
    if ( user.username && user.password) {
      setUser(user)
      console.log('user ', user);
    }
  }
  return(<form>
    <fieldset>
    <legend>Digite seu Login</legend>
    <RowFormText changes={changeFormUser}
      id="usernameLogin" labelValue="Username" />
    <RowFormPassword changes={changeFormUser}
      id="passwordLogin" labelValue="Senha" />
    </fieldset>
    <InputSubmit value="Enviar" onClick={enviar} />
    <InputReset value="Limpar" />
    </form>
  )
}
export default FormLogin
