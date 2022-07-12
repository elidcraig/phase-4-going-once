import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <NavLink to="/">
				Logo of site name here
			</NavLink>
      <span>   </span>
      <NavLink to="/login">
				Login/Signup
			</NavLink>
    </div>
  )
}

export default Header