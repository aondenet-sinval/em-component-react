import React, { useState } from 'react'
import RowFormNumber from './form-parts/row-form-number'
import RowFormText from './form-parts/row-form-text'
import InputReset from './form-parts/input-reset'
import InputSubmit from './form-parts/input-submit'
const FormCliente = ()=>{
  const [user, setUser ]= useState({})
  const enviar = ()=> {}
  const changeFormUser = (e)=>{
    const name = e.target.name
    const value = e.target.value
    if (name === 'clienteName') {
      user.name = value
    }
    if (name === 'clienteTelefone') {
    user.telefone = value
    }
    if (name === 'clienteEndereco') {
      user.endereco = value
    }
    if (name === 'clienteCpf') {
      user.cpf = value
    }
    if ((user.name && user.telefone)&& (user.endereco && user.cpf)) {
      setUser(user)
      console.log('user ', user);
    }
  }
  return(<form>
    <fieldset>
      <legend>Dados do novo cliente</legend>
      <RowFormText changes={changeFormUser}
        id="clienteName" labelValue="Nome" />
      <RowFormNumber changes={changeFormUser}
        id="clienteTelefone" labelValue="Telefone" />
      <RowFormText changes={changeFormUser}
        id="clienteEndereco" labelValue="Endereco" />
      <RowFormNumber changes={changeFormUser}
        id="clienteCpf" labelValue="CPF" />
    </fieldset>
    <InputSubmit value="Enviar" enviar={enviar} />
    <InputReset value="Limpar" />
    </form>
  )
}
export default FormCliente
