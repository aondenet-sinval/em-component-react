import React from 'react'
import styled from 'styled-components'
const DivRow = styled.div`
  display: flex;
  width: 400px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const RowFormNumber = (props)=>{
  const {changes, id, labelValue} = props
  return(
    <React.Fragment>
    <DivRow>
    <label htmlFor={id}>{labelValue}</label>
    <input onChange={changes} name={id} type="number" className="w3-margin"  id={id} />
    </DivRow>
    </React.Fragment>
  )
}
export default RowFormNumber
