import { atom } from 'recoil'

export const newItemState = atom({
    key: 'newItemState',
    default: {
      user_id: '',
      name: '',
      description: '',
      image_url: '',
      starting_bid: '',
      starting_time: '',
      closing_time: '',
      category: ''
      }
})