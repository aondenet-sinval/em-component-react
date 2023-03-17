import React from 'react'
import FormUser from '../components/form-user'
import styled from 'styled-components'
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const User = ()=>{
  return(<Section>
      <header>
        <h2>Cadastro de Usuários</h2>
      </header>
      <FormUser />
    </Section>
  )
}
export default User
