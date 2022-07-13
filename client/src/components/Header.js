import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <NavLink to="/">
				Logo here
			</NavLink>
      <span>&nbsp;&nbsp;</span>
      <NavLink to="/login">
				Login/Signup
			</NavLink>
      <span>&nbsp;&nbsp;</span>
      <NavLink to="account">
				Profile icon here 
			</NavLink>
    </div>
  )
}

export default Header