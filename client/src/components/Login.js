import React from 'react';
import { useRecoilState } from 'recoil';
import { usernameState, passwordState, passwordConfirmState } from '../state/LoginState'

function Login() {
  const [username, setUsername] = useRecoilState(usernameState)
  const [password, setPassword] = useRecoilState(passwordState)
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(passwordConfirmState)

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
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(config)
    })
      .then(res => res.json())
      .then(console.log)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' value={username} onChange={handleUsernameChange}/>
        <label>Password</label>
        <input type='text' value={password} onChange={handlePasswordChange}/>
        <label>Confirm Password</label>
        <input type='text' value={passwordConfirm} onChange={handlePasswordConfirmChange}/>
        <input type='submit' />
      </form>
    </div>
   );
}

export default Login;