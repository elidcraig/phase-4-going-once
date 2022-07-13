import { atom, selector } from 'recoil'
import { dashboardState } from './DashboardState';



export const isLiveState = selector ({
  key: "IsLive",
  get: ({get}) =>{
    const currentTime = new Date()
    const userInfo = get(dashboardState)
    const {posted_items: postedItems} = userInfo
    if (postedItems === undefined) {
      return <p>Loading...</p>;
    }
      return postedItems.filter(item =>{ 
        const {starting_time: startingTime, closing_time: closingTime} = item
        return (startingTime <= currentTime && closingTime >= currentTime)})
  }});

  export const isNotLiveState = selector ({
  key: "IsNotLive",
  get: ({get}) =>{
    const currentTime = new Date()
    const userInfo = get(dashboardState)
    const {posted_items: postedItems} = userInfo
    if (postedItems === undefined) {
      return <p>Loading...</p>;
    }
      return postedItems.filter(item =>{ 
        const {starting_time: startingTime, closing_time: closingTime} = item
        return !(startingTime <= currentTime && closingTime >= currentTime)})
  }});
