import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { detailsState } from '../state/CardState'
import { currentFullUserState } from '../state/CurrentUserState'
import { newBidState } from '../state/NewBidState'

function Details() {

const [makingBid, setMakingBid] = useState(false)  

const [newBid, setNewBid] = useRecoilState(newBidState)
const currentUser = useRecoilValue(currentFullUserState)
const item = useRecoilValue(detailsState)
const {name, id, image_url, description, category, starting_bid, closing_time, starting_time, user} = item

const startingTime = new Date(starting_time)
const closingTime = new Date(closing_time)
const currentTime = new Date()
const biddingIsOpen = startingTime <= currentTime && closingTime >= currentTime

const userOwnsItem = currentUser.id === user.id

const handleOpenBidForm = () => {
    setMakingBid(true)
    setNewBid(starting_bid)
}

const handleBidChange = e => setNewBid(e.target.value)



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
        <form 
            className='new-bid-form'
            style={makingBid ? {} : {display: 'none'}}
        >
            <input type="number" name='newBid' value={newBid} onChange={handleBidChange}/>
        </form>
        <button 
            style={userOwnsItem || !biddingIsOpen ? {display: 'none'} : {}}
            onClick={handleOpenBidForm}
        >Make A Bid!</button>
    </div>
    )
}

export default Details