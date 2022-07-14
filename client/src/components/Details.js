import React from 'react'
import { useRecoilValue } from 'recoil'
import { detailsState } from '../state/CardState'
import { currentFullUserState } from '../state/CurrentUserState'

function Details() {
const currentUser = useRecoilValue(currentFullUserState)
const item = useRecoilValue(detailsState)
const {name, id, image_url, description, category, starting_bid, closing_time, starting_time, user} = item

const startingTime = new Date(starting_time)
const closingTime = new Date(closing_time)
const currentTime = new Date()
const biddingIsOpen = startingTime <= currentTime && closingTime >= currentTime

const userOwnsItem = currentUser.id === user.id


    return (
    <div className = "profile">
        <h2>{name}</h2>
        <img src={image_url} alt={name}/>
        <ul className="first-profile-ul">
            <li><strong>Description:</strong> {description}</li>
            <li><strong>Category:</strong> {category}</li>
            <li><strong>Current Bid:</strong> {starting_bid}</li>
            <li><strong>Bidding Ends On:</strong> {closing_time}</li>
        </ul>
        <button style={userOwnsItem || !biddingIsOpen ? {display: 'none'} : {}}>Make A Bid!</button>
    </div>
  //)}
  //else {
  //    return (<h1>This Auction is not live!</h1>)
  //}
    )
}

export default Details