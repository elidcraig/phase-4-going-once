import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { loginFormState } from '../state/LoginFormState'
import { currentUserState, currentFullUserState} from '../state/CurrentUserState'

function LoginForm() {
  let navigate = useNavigate()

  const [loginForm, setLoginForm] = useRecoilState(loginFormState)
  // const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const resetLoginForm = useResetRecoilState(loginFormState)

  const handleFormChange = e => setLoginForm({...loginForm, [e.target.name]: e.target.value})
  const writeUserId = useSetRecoilState(currentUserState)
  const writeFullUser = useSetRecoilState(currentFullUserState)
  const handleSubmit = e => {
    e.preventDefault()
    const config = {
      username: loginForm.username,
      password: loginForm.password
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
            resetLoginForm()
            writeUserId(user.id)
            writeFullUser(user)
            navigate('/dashboard', { replace: true })
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
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' name='username' value={loginForm.username} onChange={handleFormChange}/>
        <label>Password</label>
        <input type='password' name='password' value={loginForm.password} onChange={handleFormChange}/>
        <input type='submit'/>
      </form>
    </div>
  );
}

export default LoginForm;