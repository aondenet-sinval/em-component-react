import React from 'react'
import FormLogin from '../components/form-login'
import styled from 'styled-components'
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Login = ()=>{
  return(<Section>
      <header>
        <h2>Login</h2>
      </header>
      <FormLogin />
    </Section>
  )
}
export default Login
