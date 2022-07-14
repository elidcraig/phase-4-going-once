import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { detailsState } from '../state/CardState'
import { currentFullUserState } from '../state/CurrentUserState'
import { newBidState } from '../state/NewBidState'

function Details() {

const [makingBid, setMakingBid] = useState(false)  

const [newBid, setNewBid] = useRecoilState(newBidState)
const currentUser = useRecoilValue(currentFullUserState)
const [item, setItem] = useRecoilState(detailsState)
const {name, id, image_url, description, category, starting_bid, highest_current_bid, closing_time, starting_time, user} = item

const startingTime = new Date(starting_time)
const closingTime = new Date(closing_time)
const currentTime = new Date()
const biddingIsOpen = startingTime <= currentTime && closingTime >= currentTime

const userOwnsItem = currentUser.id === user.id

const handleOpenBidForm = () => {
    setMakingBid(true)
    setNewBid(highest_current_bid + 1)
}

const handleBidChange = e => setNewBid(e.target.value)

const handleBidSubmit = e => {
    e.preventDefault()

    const config = {user_id: currentUser.id, item_id: id, amount: newBid}

    fetch('/bids', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(config)
    })
        .then(res => {
            if(res.ok) {
                res.json().then(bid => {
                    setItem({...item, highest_current_bid: bid.amount})
                    setMakingBid(false)
                })
            } else {
                res.json().then(errors => console.error(errors))
            }
        })
}

    return (
    <div className = "profile">
        <h2>{name}</h2>
        <img src={image_url} alt={name}/>
        <ul className="first-profile-ul">
            <li><strong>Description:</strong> {description}</li>
            <li><strong>Category:</strong> {category}</li>
            <li><strong>Current Bid:</strong> {highest_current_bid}</li>
            <li><strong>Bidding Ends On:</strong> {closing_time}</li>
        </ul>
        <form 
            className='new-bid-form'
            style={makingBid ? {} : {display: 'none'}}
            onSubmit={handleBidSubmit}
        >
            <input type="number" name='newBid' value={newBid} min={highest_current_bid + 1} onChange={handleBidChange}/>
            <input type="submit" />
        </form>
        <button 
            style={userOwnsItem || !biddingIsOpen ? {display: 'none'} : {}} onClick={handleOpenBidForm}
        >Make A Bid!</button>
    </div>
    )
}

export default Details