import React from 'react'

const NavItem = (props)=>{
  const {linkName, url} = props
  return(
    <a href={url} className="w3-bar-item w3-button w3-mobile">
      {linkName}
    </a>
  )
}
export default NavItem
