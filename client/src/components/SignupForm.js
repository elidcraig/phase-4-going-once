import React from 'react';
import { useRecoilState } from 'recoil';
import { signupFormState } from '../state/SignupFormState';

function SignupForm() {

  const [signupForm, setSignupForm] = useRecoilState(signupFormState)

  console.log(signupForm)

  const handleFormChange = e => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
  
  const handleFormSubmit = e => {
    e.preventDefault()
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