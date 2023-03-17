import React from 'react'
import FormCliente from '../components/form-cliente'
import styled from 'styled-components'
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Cliente = ()=>{
  return(<Section>
      <header>
        <h2>Cadastro de Clientes</h2>
      </header>
      <FormCliente />
    </Section>
  )
}
export default Cliente
