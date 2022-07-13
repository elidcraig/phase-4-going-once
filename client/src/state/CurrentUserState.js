import { atom } from 'recoil'

export const currentUserState = atom({
  key: 'currentUserState',
  default: null
})
export const currentFullUserState = atom({
  key: 'currentFullUserState',
  default: null
})