import { atom } from 'recoil'

export const editItemState = atom({
    key: 'EditItem',
    default: {
      user_id: item.id, //user_id?
      name: item.name,
      description: item.description,
      image_url: item.image_url,
      starting_bid: item.starting_bid,
      starting_time: item.starting_time,
      closing_time: item.closing_time,
      category: item.category
  }})