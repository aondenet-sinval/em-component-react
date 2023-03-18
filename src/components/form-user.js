import React from 'react'
import RowFormPassword from './form-parts/row-form-password'
import RowFormText from './form-parts/row-form-text'
import InputReset from './form-parts/input-reset'
import InputSubmit from './form-parts/input-submit'
const FormUser = (props)=>{
  const { changeFormData, formDataUser } = props
  const enviar = (formData)=> {/*enviar pro backend*/}
    // Validar para esse form
    if (formDataUser.userEmail && formDataUser.userName && formDataUser.userPassword) {
      console.log('formData User ', formDataUser);
    }
  return(<form>
    <fieldset>
    <legend>Dados do novo usuário</legend>
    <RowFormText changes={changeFormData}
      id="userEmail" labelValue="Email" />
    <RowFormText changes={changeFormData}
      id="userName" labelValue="Nome" />
    <RowFormPassword changes={changeFormData}
      id="userPassword" labelValue="Senha" />
    </fieldset>
    <InputSubmit value="Enviar" enviar={enviar} />
    <InputReset value="Limpar" />
    </form>
  )
}
export default FormUser
