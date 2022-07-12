import React from 'react';
import './Login.css'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Login() {

  return (
    <div>
      <LoginForm/>
      <SignupForm/>
    </div>
  );
}

export default Login;