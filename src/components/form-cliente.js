import React from 'react'
import RowFormNumber from './form-parts/row-form-number'
import RowFormText from './form-parts/row-form-text'
import InputReset from './form-parts/input-reset'
import InputSubmit from './form-parts/input-submit'
const FormCliente = (props)=>{
  const { changeFormData, formDataCliente } = props
  const enviar = (formDataCliente)=> {/*enviar pro backend*/}
    // Validar para esse form
    if (formDataCliente.clienteName && formDataCliente.clienteEndereco && formDataCliente.clienteEndereco && formDataCliente.clienteCpf) {
      console.log('formData cliente ', formDataCliente);
    }
  return(<form>
    <fieldset>
      <legend>Dados do novo cliente</legend>
      <RowFormText changes={changeFormData}
        id="clienteName" labelValue="Nome" />
      <RowFormNumber changes={changeFormData}
        id="clienteTelefone" labelValue="Telefone" />
      <RowFormText changes={changeFormData}
        id="clienteEndereco" labelValue="Endereco" />
      <RowFormNumber changes={changeFormData}
        id="clienteCpf" labelValue="CPF" />
    </fieldset>
    <InputSubmit value="Enviar" enviar={enviar} />
    <InputReset value="Limpar" />
    </form>
  )
}
export default FormCliente
