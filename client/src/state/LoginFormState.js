import { atom } from 'recoil'

export const loginFormState = atom({
  key: 'loginFormState',
  default: {
    username: '',
    password: '',
    passwordConfirm: ''
  }
})