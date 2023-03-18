import React from 'react'

const NavItem = (props)=>{
  const {linkName, url, sideMovement} = props
  return(
    <a href={url} onClick={sideMovement} className="w3-bar-item w3-button w3-mobile">
      {linkName}
    </a>
  )
}
export default NavItem
