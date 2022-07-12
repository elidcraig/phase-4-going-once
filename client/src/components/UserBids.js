import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { dashboardState } from '../state/DashboardState.js'
import AuctionCard from './AuctionCard'
// import { currentUserState } from '../state/CurrentUserState'

function UserBids() {

  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useRecoilState(dashboardState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`/dashboard`)
        // .then(res => res.json())
        // .then(userObj => setUserInfo(userObj))
        .then(res => {
          if (res.ok) {
            res.json().then(user => {
              console.log(user)
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
  const itemCards = postedItems.map(item => <AuctionCard key={item.id} {...item}/>)


  return (
    <div>
      {itemCards}

    </div>
  )
}

export default UserBids