import { atom } from 'recoil'

export const newBidState = atom({
    key: 'NewBid',
    default: {
      user_id: '',
      item_id: '',
      amount: '',
      }
})

export const currentBidState = atom({
    key: 'CurrentBid',
    default: ''
})