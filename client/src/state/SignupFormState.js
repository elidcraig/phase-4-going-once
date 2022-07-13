import { atom } from 'recoil'

export const signupFormState = atom({
  key: 'signupFormState',
  default: {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    fullName: '',
    avatarUrl: '',
    address: ''
  }
})