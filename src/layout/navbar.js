import React, { useState } from 'react'
import NavItem from './nav-item'
import SideMenu from './side-menu'
const Navbar = ()=>{
  const [showHide, setShowHide] = useState('sideMenuHideFixed')
  const upDown = () => {
      if ((showHide === 'sideMenuHide') || (showHide === 'sideMenuHideFixed')) {
        setShowHide('sideMenuShow')
      }else {
        setShowHide('sideMenuHide')
      }
    }

  return(
    <header>
      <nav className="w3-bar w3-black">
        <NavItem url="#" sideMovement={upDown} linkName="SideMenu" />
        <SideMenu menuControl={showHide} />
      </nav>
    </header>
  )
}
export default Navbar
