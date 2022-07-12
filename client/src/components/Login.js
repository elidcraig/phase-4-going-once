import React from 'react';
import { useRecoilState } from 'recoil';
import { usernameState, passwordState, passwordConfirmState } from '../state/LoginState'
import { currentUserState } from '../state/CurrentUserState'

function Login() {
  const [username, setUsername] = useRecoilState(usernameState)
  const [password, setPassword] = useRecoilState(passwordState)
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(passwordConfirmState)
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)
  const handlePasswordConfirmChange = e => setPasswordConfirm(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const config = {
      username,
      password,
      password_confirmation: passwordConfirm
    }
    console.log(config)

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(config)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user.id)
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
        <label>Password</label>
        <input type='password' name='password' value={password} onChange={handlePasswordChange}/>
        <label>Confirm Password</label>
        <input type='password' name='passwordConfirm' value={passwordConfirm} onChange={handlePasswordConfirmChange}/>
        <input type='submit' />
      </form>
    </div>
  );
}

export default Login;