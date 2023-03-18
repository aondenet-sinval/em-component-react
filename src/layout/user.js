import React from 'react'
import FormUser from '../components/form-user'
import styled from 'styled-components'
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const User = (props)=>{
  const { changeFormData, formDataUser, resetFormData} = props
  return(<Section>
      <header>
        <h2>Cadastro de Usuários</h2>
      </header>
      <FormUser changeFormData={changeFormData} formDataUser={formDataUser}
       resetFormData={resetFormData}/>
    </Section>
  )
}
export default User
