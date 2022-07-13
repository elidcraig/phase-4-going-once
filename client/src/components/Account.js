import {useEffect, useState, React } from 'react'
import { currentUserState, currentFullUserState } from '../state/CurrentUserState'
import { useRecoilState, useRecoilValue } from 'recoil'

function Account() {

  // const userId = useRecoilValue(currentUserState)
  // const [fullUser, setFullUser] = useRecoilState(currentFullUserState)
  // const [isLoaded, setIsLoaded] = useState(false)

  // useEffect (() => {fetch ( 'me' )
  // .then ( (r) => r.json() )
  // .then ( user => { 
  //   console.log(user)
  //   setFullUser(user)
  //   setIsLoaded(true)
  // })
  // }, [])
  const fullUser = useRecoilValue(currentFullUserState)

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
      <button>Logout</button>
    </div>

  )
}

export default Account