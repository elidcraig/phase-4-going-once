import { atom } from 'recoil'

export const newBidState = atom({
    key: 'newBidState',
    default: {
      user_id: '',
      item_id: '',
      amount: '',
      }
})

export const currentBidState = atom({
    key: 'currentBidState',
    default: ''
})