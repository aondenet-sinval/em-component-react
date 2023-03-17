import React from 'react'
import styled from 'styled-components'
const DivRow = styled.div`
  display: flex;
  width: 400px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const RowForm = (props)=>{
  const {lineForm} = props//label e input alinhamento
  return<DivRow>{lineForm}</DivRow>
}
export default RowForm
