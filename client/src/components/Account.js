import {useEffect, useState, React } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUserState, currentFullUserState } from '../state/CurrentUserState'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

function Account() {
  const navigate = useNavigate()
  // const userId = useRecoilValue(currentUserState)
  const [fullUser, setFullUser] = useRecoilState(currentFullUserState)
  const resetFullUser = useResetRecoilState(currentFullUserState)
  // const [isLoaded, setIsLoaded] = useState(false)

  // useEffect (() => {fetch ( 'me' )
  // .then ( (r) => r.json() )
  // .then ( user => { 
  //   console.log(user)
  //   setFullUser(user)
  //   setIsLoaded(true)
  // })
  // }, [])

  const handleLogout = () => {
    fetch('/logout', {method: 'DELETE'})
    .then(res => {
      if (res.ok) {
        resetFullUser()
        navigate('/', {replace: true})
      }
    })
  }

  if (fullUser === null) {
    return <p>Loading...</p>;
  }

  const {username, email, avatar_url, full_name, address} = fullUser
  console.log(fullUser)

  return (
    <div>
      <h1>Account</h1>
      <h4>username: {username}</h4>
      <h4>email: {email}</h4>
      <h4>avatar: </h4>
      <img src={avatar_url} alt="avatar" className="account-avatar-display" />
      <h4>full name: {full_name}</h4>
      <h4>address: {address}</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default Account