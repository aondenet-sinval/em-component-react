import React, { useState } from 'react'
import RowFormPassword from './form-parts/row-form-password'
import RowFormText from './form-parts/row-form-text'
import InputReset from './form-parts/input-reset'
import InputSubmit from './form-parts/input-submit'
const FormUser = ()=>{
  const [user, setUser ]= useState({})
  const enviar = ()=> {}
  const changeFormUser = (e)=>{
    const name = e.target.name
    const value = e.target.value
    if (name === 'userEmail') {
      user.name = value
    }
    if (name === 'userName') {
    user.telefone = value
    }
    if (name === 'userPassword') {
      user.endereco = value
    }
    if ((user.email && user.username) && (user.password)) {
      setUser(user)
      console.log('user ', user);
    }
  }
  return(<form>
    <fieldset>
    <legend>Dados do novo usuário</legend>
    <RowFormText changes={changeFormUser}
      id="userEmail" labelValue="Email" />
    <RowFormText changes={changeFormUser}
      id="userName" labelValue="Nome" />
    <RowFormPassword changes={changeFormUser}
      id="userPassword" labelValue="Senha" />
    </fieldset>
    <InputSubmit value="Enviar" enviar={enviar} />
    <InputReset value="Limpar" />
    </form>
  )
}
export default FormUser
