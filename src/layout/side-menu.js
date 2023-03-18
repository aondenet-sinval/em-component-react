import React from 'react'
import styled from 'styled-components'
const Li = styled.li`
  text-decoration: none;
  list-style: none;
`
const Link = styled.a`
  text-decoration: none;
`
const SideMenu = (props)=>{
  const {menuControl} = props
  return(
    <nav className={menuControl}>
      <ul>
        <Li><Link href="#">A</Link></Li>
        <Li><Link href="#">B</Link></Li>
        <Li><Link href="#">C</Link></Li>
      </ul>
    </nav>
  )
}

export default SideMenu
