import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';
import { signupFormState } from '../state/SignupFormState';
import { currentUserState, currentFullUserState } from '../state/CurrentUserState'

function SignupForm() {
  const navigate = useNavigate()

  const [signupForm, setSignupForm] = useRecoilState(signupFormState)
  const writeUserId = useSetRecoilState(currentUserState)
  const writeFullUser = useSetRecoilState(currentFullUserState)
  const resetSignupForm = useResetRecoilState(signupFormState)

  const handleFormChange = e => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
  
  const handleFormSubmit = e => {
    e.preventDefault()

    const config = {
      username: signupForm.username,
      password: signupForm.password,
      password_confirmation: signupForm.passwordConfirm,
      email: signupForm.email,
      full_name: signupForm.fullName,
      avatar_url: signupForm.avatarUrl,
      address: signupForm.address
    }

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(config)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            resetSignupForm()
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
      <h1>Sign Up</h1>
      <form className='login-form' onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input type='text' name='username' value={signupForm.username} onChange={handleFormChange}/>
        <label>Email</label>
        <input type='text' name='email' value={signupForm.email} onChange={handleFormChange}/>
        <label>Password</label>
        <input type='password' name='password' value={signupForm.password} onChange={handleFormChange}/>
        <label>Confirm Password</label>
        <input type='password' name='passwordConfirm' value={signupForm.passwordConfirm} onChange={handleFormChange}/>
        <label>Full Name</label>
        <input type='text' name='fullName' value={signupForm.fullName} onChange={handleFormChange}/>
        <label>Physical Address</label>
        <input type='text' name='address' value={signupForm.address} onChange={handleFormChange}/>
        <label>Profile Image</label>
        <input type='text' name='avatarUrl' value={signupForm.avatarUrl} onChange={handleFormChange}/>
        <input type='submit' />
      </form>
    </div>
  );
}

export default SignupForm;