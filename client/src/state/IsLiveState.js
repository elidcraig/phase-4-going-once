import { atom, selector } from 'recoil'
import { dashboardState } from './DashboardState';



export const isLiveState = selector ({
  key: "IsLive",
  get: ({get}) =>{
    const currentTime = new Date()
    const userInfo = get(dashboardState)
    const {posted_items: postedItems} = userInfo
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
      return postedItems.filter(item =>{ 
        const {starting_time: startingTime, closing_time: closingTime} = item
        return !(startingTime <= currentTime && closingTime >= currentTime)})
  }});


// const currentTime = new Date()
// const isItemLive = item  => (item.startingTime >= currentTime && item.closingTime <= currentTime)

// const lemursByNameState = selector({
//   key: 'lemursByNameState',
//   get: ({get}) =>{
//       const allLemurs = get(allLemursState)
//       const name = get(searchState)
//       return allLemurs.filter(lemur => {
//           if(name === ''){
//               return true
//           } else {
//               return lemur.name.toLowerCase().includes(name.toLowerCase())
//           }  
//       })
//   }
// })

// export const isLiveState = atom ({
//   key: "IsLive",
//   default: false
// });