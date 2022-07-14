import { atom, selector } from 'recoil'
import { dashboardState } from './DashboardState';



export const isLiveState = selector ({
  key: "IsLive",
  get: ({get}) =>{
    const currentTime = new Date()
    const userInfo = get(dashboardState)
    const {posted_items: postedItems} = userInfo
    if (postedItems === undefined) {
      return [];
    }
      return postedItems.filter(item =>{ 
        const {starting_time: startingTime, closing_time: closingTime} = item
        return (new Date(startingTime) <= currentTime && new Date(closingTime) >= currentTime)})
  }});

  export const isNotLiveState = selector ({
  key: "IsNotLive",
  get: ({get}) =>{
    const currentTime = new Date()
    const userInfo = get(dashboardState)
    const {posted_items: postedItems} = userInfo
    if (postedItems === undefined) {
      return [];
    }
      return postedItems.filter(item =>{ 
        const {starting_time: startingTime, closing_time: closingTime} = item
        return !(new Date(startingTime) <= currentTime && new Date(closingTime) >= currentTime)})
  }});

  export const closedAuctionsState = selector({
    key: 'closedAuctions',
    get: ({get}) => {
      const currentTime = new Date()
      const userInfo = get(dashboardState)
      const { posted_items: postedItems } = userInfo
      if (postedItems === undefined) {
        return []
      } else {
        return postedItems.filter(item => new Date(item.closing_time) <= currentTime)
      }
    }
  })

  export const liveListState = atom({
    key: 'LiveList',
    default: []
  })
  
  export const notLiveListState = atom({
    key: 'NotLiveList',
    default: []
  })
  