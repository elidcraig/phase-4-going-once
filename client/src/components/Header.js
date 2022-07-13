import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <NavLink to="/">
				Logo of site name here &nbsp &nbsp
			</NavLink>
      <NavLink to="/login">
				Login/Signup &nbsp &nbsp
			</NavLink>
      <NavLink to="account">
				<button>Account - Profile avatar icon here</button>
			</NavLink>
    </div>
  )
}

export default Header