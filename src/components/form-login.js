import React from 'react'
import RowFormText from './form-parts/row-form-text'
import RowFormPassword from './form-parts/row-form-password'
import InputReset from './form-parts/input-reset'
import InputSubmit from './form-parts/input-submit'
const FormLogin = (props)=>{
  const { changeFormData, formDataLogin } = props
  const enviar = (formData)=> {/*enviar pro backend*/}
  // Validar para esse form
  if (formDataLogin.usernameLogin && formDataLogin.passwordLogin) {
    console.log('formData login ', formDataLogin);
  }
  return(<form>
    <fieldset>
    <legend>Digite seu Login</legend>
    <RowFormText changes={changeFormData}
      id="usernameLogin" labelValue="Username" />
    <RowFormPassword changes={changeFormData}
      id="passwordLogin" labelValue="Senha" />
    </fieldset>
    <InputSubmit value="Enviar" onClick={enviar} />
    <InputReset value="Limpar" />
    </form>
  )
}
export default FormLogin
