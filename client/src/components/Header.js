import React from 'react'
import { NavLink } from "react-router-dom";
import { useRecoilValue } from 'recoil'
import { currentUserState } from '../state/CurrentUserState'
import { currentFullUserState } from '../state/CurrentUserState'

function Header() {

  const currentUserId = useRecoilValue(currentUserState)
  const currentFullUser = useRecoilValue(currentFullUserState)

  
console.log(currentUserId)
console.log("checking for User")

console.log(currentFullUser)

  return (
    <header>
      <nav className="nav-bar">
      <NavLink to="/">
				<img  src="https://i.imgur.com/32TMUTg.jpg"/>
			</NavLink>
      <span>&nbsp;&nbsp;</span>
      {currentFullUser ?
        <div>
        <NavLink to="/account" >
          { currentFullUser.username }
          <img className="avatar" src={ currentFullUser.image_url }/> 
        </NavLink>
        
        </div>
        : 
        <NavLink to="/login">Login/Signup</NavLink>
      }
      </nav>
    </header>
  )
}

export default Header