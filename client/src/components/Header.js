import React from 'react'
import { NavLink } from "react-router-dom";
import { useRecoilValue } from 'recoil'
import { currentUserState } from '../state/CurrentUserState'

function Header() {

  const currentUserId = useRecoilValue(currentUserState)

  return (
    <div>
      <NavLink to="/">
				Logo here
			</NavLink>
      <span>&nbsp;&nbsp;</span>
      {currentUserId ?
        <NavLink to="/account" >Profile</NavLink> : 
        <NavLink to="/login">Login/Signup</NavLink>
      }
    </div>
  )
}

export default Header