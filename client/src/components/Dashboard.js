import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { dashboardState } from '../state/DashboardState.js'
import AuctionCard from './AuctionCard'
import EditableAuctionCard from './EditableAuctionCard'
// import { currentUserState } from '../state/CurrentUserState'
import {isLiveState, isNotLiveState } from '../state/IsLiveState'

function Dashboard() {

  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useRecoilState(dashboardState)
  
  const liveItems = useRecoilValue(isLiveState)
  const notLiveItems = useRecoilValue(isNotLiveState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`/dashboard`)
        .then(res => {
          if (res.ok) {
            res.json().then(user => {
              setUserInfo(user)
              setIsLoaded(true)
            })
          } else {
            res.json().then(errors => {
              console.error(errors)
              navigate('/login', {replace:true})
            })
          }
        })
  }, [])

  // const {username, bids, posted_items} = userInfo
  
  if (!isLoaded) return <h1>Loading...</h1>

  const {username, bids, avatar_url: avatarUrl, posted_items: postedItems} = userInfo
  
  
  // const currentTime = new Date()
  // const isItemLive = item  => (item.startingTime >= currentTime && item.closingTime <= currentTime)
  
  const liveItemCards = liveItems.map(item => <AuctionCard key={item.id} item={item}/>)
  const nonLiveItemCards = notLiveItems.map(item => <EditableAuctionCard key={item.id} item={item}/>)

  return (
    <div>
      <h2>Live Items:</h2> 
      {liveItemCards}
      <h2>Non Live Items:</h2> 
      {nonLiveItemCards}
    </div>
  )
}

export default Dashboard

