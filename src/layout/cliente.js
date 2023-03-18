import React from 'react'
import FormCliente from '../components/form-cliente'
import styled from 'styled-components'
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Cliente = (props)=>{
  const { changeFormData, formDataCliente } = props
  return(<Section>
      <header>
        <h2>Cadastro de Clientes</h2>
      </header>
      <FormCliente changeFormData={changeFormData} formDataCliente={formDataCliente} />
    </Section>
  )
}
export default Cliente
